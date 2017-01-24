#!/usr/bin/env python3
import argparse
import datetime as dt
import os
import random
import subprocess
import sys
from collections import defaultdict

def sh(cmd, cwd=None, env=None, check=True):
    p = subprocess.run(cmd, cwd=cwd, env=env, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if check and p.returncode != 0:
        raise RuntimeError(f"Command failed: {' '.join(cmd)}\nSTDOUT:\n{p.stdout}\nSTDERR:\n{p.stderr}")
    return p

def ensure_repo(repo):
    try:
        sh(["git", "rev-parse", "--is-inside-work-tree"], cwd=repo)
    except Exception as e:
        raise SystemExit(f"Not a git repository: {repo}\n{e}")

def current_branch(repo):
    p = sh(["git", "branch", "--show-current"], cwd=repo)
    return p.stdout.strip() or "main"

def daterange(start_date: dt.date, end_date: dt.date):
    cur = start_date
    while cur <= end_date:
        yield cur
        cur += dt.timedelta(days=1)

def month_days(year, month):
    start = dt.date(year, month, 1)
    if month == 12:
        end = dt.date(year+1, 1, 1) - dt.timedelta(days=1)
    else:
        end = dt.date(year, month+1, 1) - dt.timedelta(days=1)
    return [d for d in daterange(start, end)]

def spread_hours(rng, n):
    """Return n distinct (h,m,s) in reasonable working hours, with jitter."""
    slots = set()
    while len(slots) < n:
        # skew hours to late morning / afternoon, but allow evening
        base = rng.choices([9,10,11,12,13,14,15,16,17,18,19,20], weights=[2,5,6,6,6,6,6,6,6,5,3,2], k=1)[0]
        m = rng.choice([0,5,10,15,20,25,30,35,40,45,50,55])
        s = rng.randint(0, 59)
        slots.add((base, m, s))
    return sorted(slots)

def poisson_like(rng, lam):
    """Small integer draw around lambda using a lightweight approach."""
    # Use a capped geometric mixture to avoid needing numpy
    c = 0
    p = min(0.75, max(0.15, lam / (lam + 1.5)))
    while rng.random() < p and c < 12:
        c += 1
        p *= 0.75  # taper off
    return c

def build_year_plan(year, base_seed, min_daily, max_daily, ensure_month_activity,
                    weekend_bias, streakiness, quiet_weeks, lively_weeks):
    """
    Return dict[date] -> int (commits that day), with non-repetitive patterns:
      - per-year and per-month seeds
      - monthly intensity sampled from a gamma-like roll
      - week-level boosts/suppression (quiet/lively)
      - streakiness to create short runs of activity
    """
    rng_year = random.Random((base_seed, year, 9973))
    start = dt.date(year, 1, 1)
    end   = dt.date(year, 12, 31)

    # Pre-assign weekly modifiers (ISO weeks)
    week_mod = {}
    for d in daterange(start, end):
        iso_y, iso_w, _ = d.isocalendar()
        if (iso_y, iso_w) not in week_mod:
            r = rng_year.random()
            if r < quiet_weeks:
                week_mod[(iso_y, iso_w)] = 0.5 * rng_year.uniform(0.5, 0.9)
            elif r > 1.0 - lively_weeks:
                week_mod[(iso_y, iso_w)] = 1.6 * rng_year.uniform(1.0, 1.4)
            else:
                week_mod[(iso_y, iso_w)] = rng_year.uniform(0.85, 1.15)

    plan = defaultdict(int)

    for month in range(1, 13):
        # Month-local RNG to avoid repetitive patterns across years
        rng_m = random.Random((base_seed, year, month, 7919))

        # Sample a monthly intensity (gamma-like by multiplying uniforms)
        intensity = 1.0
        for _ in range(3):
            intensity *= rng_m.uniform(0.7, 1.3)
        # Slight seasonal drift (more activity in Mar-Jun, Sep-Nov, random otherwise)
        seasonal = {
            1:0.9, 2:0.95, 3:1.05, 4:1.1, 5:1.1, 6:1.05,
            7:0.95, 8:0.9, 9:1.1, 10:1.15, 11:1.1, 12:0.95
        }[month]
        month_factor = intensity * seasonal

        days = month_days(year, month)
        month_total = 0
        streak = 0

        for d in days:
            iso_y, iso_w, _ = d.isocalendar()

            # Base daily probability from month factor
            base_p = 0.28 * month_factor * week_mod[(iso_y, iso_w)]

            # Reduce on weekends
            if d.weekday() >= 5:  # Sat/Sun
                base_p *= weekend_bias

            # Nudge with streakiness (recent activity makes next day slightly likelier)
            base_p *= (1.0 + 0.12 * min(5, streak)) if streakiness else base_p
            base_p = max(0.02, min(0.88, base_p))

            if rng_m.random() < base_p:
                # Daily count drawn around month_factor, capped by max_daily
                lam = 0.8 + 0.8 * month_factor
                c = min(max_daily, max(min_daily, poisson_like(rng_m, lam)))
                plan[d] = c
                month_total += c
                streak += 1
            else:
                streak = 0

        # Ensure at least some activity this month if requested
        if ensure_month_activity and month_total == 0:
            pick = rng_m.choice(days)
            plan[pick] = max(1, min_daily)

    return plan

def write_commits(repo, plan):
    # Warn if identity isn’t set
    try:
        name = sh(["git", "config", "--get", "user.name"], cwd=repo, check=False).stdout.strip()
        email = sh(["git", "config", "--get", "user.email"], cwd=repo, check=False).stdout.strip()
        if not name or not email:
            print("WARNING: user.name or user.email not set in this repo.")
    except Exception:
        print("WARNING: Unable to read git config for user.name/email.")

    created = 0
    for d in sorted(plan):
        rng = random.Random((d.year, d.month, d.day, 123457))
        for (h, m, s) in spread_hours(rng, plan[d]):
            when = dt.datetime(d.year, d.month, d.day, h, m, s)  # naive
            stamp = when.strftime("%Y-%m-%d %H:%M:%S -0000")
            env = os.environ.copy()
            env["GIT_AUTHOR_DATE"] = stamp
            env["GIT_COMMITTER_DATE"] = stamp
            msg = f"chore: log {when.strftime('%Y-%m-%d %H:%M:%S')} [auto]"
            sh(["git", "commit", "--allow-empty", "-m", msg], cwd=repo, env=env)
            created += 1
            if created % 50 == 0:
                print(f"... {created} commits created")
    return created

def main():
    ap = argparse.ArgumentParser(description="Create backdated random commits per year with natural patterns.")
    ap.add_argument("--repo", required=True, help="Path to an existing git repo.")
    ap.add_argument("--year", type=int, action="append", required=True,
                    help="Year to fill (use multiple --year flags for several years).")
    ap.add_argument("--seed", type=int, default=1337, help="Base seed for randomness.")
    ap.add_argument("--min-daily", type=int, default=0, help="Minimum commits on a chosen active day.")
    ap.add_argument("--max-daily", type=int, default=5, help="Maximum commits on an active day.")
    ap.add_argument("--weekend-bias", type=float, default=0.6, help="<1.0 reduces weekend activity.")
    ap.add_argument("--streakiness", type=int, default=1, help="1 enables short streaks, 0 disables.")
    ap.add_argument("--quiet-weeks", type=float, default=0.08, help="Fraction of weeks that are unusually quiet.")
    ap.add_argument("--lively-weeks", type=float, default=0.10, help="Fraction of weeks that are unusually lively.")
    ap.add_argument("--allow-empty-months", action="store_true",
                    help="If set, some months may be entirely empty.")
    ap.add_argument("--dry-run", action="store_true", help="Print plan only; no commits are made.")
    ap.add_argument("--push", action="store_true", help="Push to origin after creating commits.")
    args = ap.parse_args()

    ensure_repo(args.repo)
    years = sorted(set(args.year))
    full_plan = {}

    for y in years:
        yr_plan = build_year_plan(
            year=y,
            base_seed=args.seed,
            min_daily=args.min_daily,
            max_daily=args.max_daily,
            ensure_month_activity=not args.allow_empty_months,
            weekend_bias=args.weekend_bias,
            streakiness=bool(args.streakiness),
            quiet_weeks=args.quiet_weeks,
            lively_weeks=args.lively_weeks
        )
        full_plan.update(yr_plan)

    # Print summary
    per_month = defaultdict(int)
    for d, c in full_plan.items():
        per_month[(d.year, d.month)] += c
    total = sum(full_plan.values())

    print(f"Planned commits: {total} across {len(full_plan)} days.")
    for (y, m) in sorted(per_month):
        print(f"{y}-{m:02d}: {per_month[(y,m)]} commits")

    if args.dry_run:
        print("\nDRY RUN: no commits created.")
        return

    created = write_commits(args.repo, full_plan)
    print(f"Done. Created {created} commits.")

    if args.push:
        branch = current_branch(args.repo)
        print(f"Pushing to origin {branch} ...")
        sh(["git", "push", "origin", branch], cwd=args.repo)
        print("Push complete.")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit(130)
    except Exception as e:
        print(f"ERROR: {e}", file=sys.stderr)
        sys.exit(1)

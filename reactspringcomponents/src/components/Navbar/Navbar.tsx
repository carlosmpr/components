import React from "react";

import styles from "./Navbar.module.css";
import NavbarItem, { NavbarItemsProps } from "./NavbarItem/NavbarItem";

export type NavbarProps = {
  NavbarItems: NavbarItemsProps[];
};

export default function Navbar({ NavbarItems }: NavbarProps) {
  return (
    <div className={styles.NavbarWrapper}>
      <div className={styles.NavbarContent}>
        <div className={styles.HideMobile}>
        <p>BRAND</p>
        </div>
        <div className={styles.MenuWrapper}>
          {NavbarItems.map((item) => (
            <NavbarItem {...item} key={item.title} />
          ))}
        </div>
        <div className={styles.HideMobile}>
        <button> Home</button>
        </div>
      </div>
    </div>
  );
}

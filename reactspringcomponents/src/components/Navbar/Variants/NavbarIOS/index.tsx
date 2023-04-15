import React, { useState } from "react";
import styles from "./Navbar.module.css";
import NavbarItem, { NavbarItemsProps } from "./NavbarItem/NavbarItem";
import LightDarkSwitch from "../LightDarkSwitch";
import { useColorSchemeContext } from "../../context/ColorSchemeContext";

export type NavbarProps = {
  brand: String;
  navbarItemsLeft: NavbarItemsProps[];
  navbarItemsRight: NavbarItemsProps[];
};

const Brand: React.FC<{ brand: String }> = ({ brand }) => (
  <div>
    <p className={styles.brand}>{brand}</p>
  </div>
);

const Menu: React.FC<{ items: NavbarItemsProps[] }> = ({ items }) => (
  <ul className={`${styles.menu} `}>
    {items.map((item) => (
      <NavbarItem {...item} key={item.title} />
    ))}
  </ul>
);

const ResumeButton: React.FC = () => <button>Resume</button>;

const MobileMenu: React.FC<{
  brand: String;
  navbarItemsLeft: NavbarItemsProps[];
  navbarItemsRight: NavbarItemsProps[];
}> = ({ brand, navbarItemsLeft, navbarItemsRight }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className={`  ${styles["hamburger-menu"]} ${styles["hideDesktop"]}`}
        onClick={toggleMenu}
      >
        <div className={styles["hamburger-menu__line"]}></div>
        <div className={styles["hamburger-menu__line"]}></div>
        <div className={styles["hamburger-menu__line"]}></div>
      </div>
      <div
        className={`${styles["slide-in-menu"]} ${
          menuOpen ? styles.active : ""
        }`}
      >
        <div className={styles.mobileMenuContent}>
          <p className={styles.close} onClick={toggleMenu}>X</p>
          <p className={styles.brand}>{brand}</p>
          <Menu items={navbarItemsLeft} />
          <Menu items={navbarItemsRight} />
          <LightDarkSwitch />
          <button>Resume</button>
        </div>
      </div>
    </>
  );
};

export default function Navbar({
  brand,
  navbarItemsLeft,
  navbarItemsRight,
}: NavbarProps) {
  const { colorScheme } = useColorSchemeContext();

  return (
    <div className={styles.navbar} data-theme={colorScheme}>
      <div className={styles.navbar__content}>
        <Brand brand={brand} />
        <div className={styles.hideMobile}>
          <Menu items={navbarItemsLeft} />
        </div>
        <div className={styles.hideMobile}>
          <Menu items={navbarItemsRight} />
        </div>
        <div className={styles.hideMobile}>
          <LightDarkSwitch />
        </div>

        <div className={styles.hideMobile}>
          <ResumeButton />
        </div>
        <MobileMenu
          brand={brand}
          navbarItemsLeft={navbarItemsLeft}
          navbarItemsRight={navbarItemsRight}
        />
      </div>
    </div>
  );
}

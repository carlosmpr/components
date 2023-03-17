import React from "react";
import styles from "./Content.module.css";

interface ContentProps {
    children?: JSX.Element | JSX.Element[];
  }
export default function Content({children}: ContentProps) {
  return (
    <div className={styles.ContentWrapper}>
        <div className={styles[`Content-Container`]}>
       {children}
      </div>
    </div>
  );
}

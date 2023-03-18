import React from "react";
import styles from "./HorizontalScroll.module.css";
import Chip from "../Chip/Chip";
import "../../index.css"
type HorizontalScrollProps = {
 children?: JSX.Element | JSX.Element[];
};
export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  return (
    <div className={styles.HorizontalScrollWrapper}>
      {children}
    </div>
  );
}

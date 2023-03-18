import React from 'react'
import styles from "./Chip.module.css";
type ChipProps = {
  text: string;
  active: string;
}
export default function Chip({text, active}: ChipProps) {
  return (
    <div className={`${styles.ChipWrapper} ${active === text ? styles.ChipActive :styles.ChipInactive}`}>{text}</div>
  )
}

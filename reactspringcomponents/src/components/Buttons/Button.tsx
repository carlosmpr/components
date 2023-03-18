import React from 'react'
import styles from "./Button.module.css";
type ButtonProps = {
    title: string;
    buttonForm: "LongButton" | "SmallButton"
    onClick:any;
    buttonStyle: "outline-prymary" | "outline-secondary" | "Primary" | "Secondary" | "Checkout"}
export default function Button({title,  onClick,  buttonStyle="Primary",  buttonForm="LongButton"}:ButtonProps) {
  return (
    <div className={`${styles.ButtonWrapper} ${styles[`${buttonForm}`]}  ${styles[`${buttonStyle}`]}`} onClick={onClick}>{title}</div>
  )
}

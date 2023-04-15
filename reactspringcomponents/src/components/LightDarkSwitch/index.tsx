import React from 'react'
import styles from'./LightDark.module.css'
import Switch from '../Switch'
export default function index() {
  return (
    <div className={styles.Wrapper}>
        <p>Light</p>
        <Switch />
        <p>Dark</p>
    </div>
  )
}

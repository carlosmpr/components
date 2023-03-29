import React from 'react'
import styles from "./Footer.module.css"

type FooterItemProps = {
    title:string;
    listItem: string[];
}
export default function FooterItem({title, listItem}: FooterItemProps) {
  return (
    <div className={styles.ListContent}>
    <h3>{title}</h3>

    <div className={styles.ListItem}>
        {listItem.map(item => <p key={item}>{item}</p>)}
    </div>

</div>
  )
}

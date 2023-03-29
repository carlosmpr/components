import React from 'react'
import styles from "./Footer.module.css"
import FooterItem from './FooterItem'
export default function Footer() {
  return (
    <div className={styles.Wrapper}>
        <div className={styles.Content}>
            <h3>SmartCommerce</h3>
           <FooterItem title={'Features'} listItem={['Men', 'Women', 'Boys', 'Girls', 'New Arrivals', 'Shoes', 'Accessories']} />
           <FooterItem title={'Features'} listItem={['Men', 'Women', 'Boys', 'Girls', 'New Arrivals', 'Shoes', 'Accessories']} />
           <FooterItem title={'Features'} listItem={['Men', 'Women', 'Boys', 'Girls', 'New Arrivals', 'Shoes', 'Accessories']} />
           <FooterItem title={'Features'} listItem={['Men', 'Women', 'Boys', 'Girls', 'New Arrivals', 'Shoes', 'Accessories']} />
        </div>
    </div>
  )
}

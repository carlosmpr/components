import React from 'react'
import styles from './Hero.module.css'

type HeroProps ={
    reverse?: boolean;
}
export default function Hero({reverse}: HeroProps) {
  return (
    <div className={`${styles.HeroWrapper} ${reverse ? styles.HeroWrapperReverse: ''}`}>
        <div className={styles.HeroContent}>
        <p>decorator</p>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className={styles.HeroImage}>
            <img src='https://i.insider.com/61d5c65a5a119b00184b1e1a?width=1000&format=jpeg&auto=webp' />
        </div>
    </div>
  )
}

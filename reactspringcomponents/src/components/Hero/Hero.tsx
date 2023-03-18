import React from 'react'
import styles from './Hero.module.css'

type HeroProps ={
    reverse?: boolean;
    title: string;
    description: string;
    decorator?: string;
    image:string
}
export default function Hero({reverse, title="Main  Title", description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu", decorator="Descorator", image="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"}: HeroProps) {
  return (
    <div className={`${styles.HeroWrapper} ${reverse ? styles.HeroWrapperReverse: ''}`}>
        <div className={styles.HeroContent}>
        <p>{decorator}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
        <div className={styles.HeroImage}>
            <img src={image} alt={title} />
        </div>
    </div>
  )
}

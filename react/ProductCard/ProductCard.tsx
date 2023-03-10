import React from 'react';
import styles from './ProductCard.module.css';
interface ProductCardProps {
  title: string;
  imageSrc: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageSrc, description, price }) => {
  return (
    <div className={styles['product-card']}>
              <h2 className={styles['product-card-title']}>{title}</h2>
    <img className={styles['product-card-img']} src={imageSrc} alt={title} />
    <div className={styles['product-card-content']}>

      <p className={styles['product-card-description']}>{description}</p>
      <p className={styles['product-card-price']}>${price}</p>
    </div>
  </div>
  );
};

export default ProductCard;
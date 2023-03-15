import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { animated, useSpring } from '@react-spring/web'
export interface ProductCardProps {
  title: string;
  imageSrc: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  imageSrc,
  description,
  price,
}) => {
  const [isPulsing, setIsPulsing] = useState(false);
  const pulseProps = useSpring({
    from: { transform: 'scale(1)', opacity: 1 },
    to: async (next: any) => {
      while (isPulsing) {
        await next({ transform: 'scale(1.1)', opacity: 0.5 });
        await next({ transform: 'scale(1)', opacity: 1 });
      }
    },
  });


  const handleMouseDown = () => {
    setIsPulsing(true);
  };

  const handleMouseUp = () => {
    setIsPulsing(false);
  };
  
  return (
    <animated.div   style={isPulsing ? pulseProps : {}}
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onTouchStart={handleMouseDown}
    onTouchEnd={handleMouseUp}>
    <div className={styles["product-card"]}>
      <img className={styles["product-card-img"]} src={imageSrc} alt={title} />

      <div className={styles["product-card-content"]}>
        <h2 className={styles["product-card-title"]}>{title}</h2>
        <p className={styles["product-card-description"]}>{description}</p>
        <p className={styles["product-card-price"]}>${price}</p>
      </div>
    </div>
    </animated.div>
  );
};

export default ProductCard;

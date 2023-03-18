import React, { useState } from "react";
import Button from "../Buttons/Button";
import "./ListItem.css";

interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
  shortDescription: string;
  image: string;
}

interface ListItemProps {
  product: Product;
  onAdd: (id: number) => void;
}

const ListItem  = ({ product, onAdd }: ListItemProps) => {
    const { id, name, price, shortDescription, image } = product;

    const [showQty, setShowQty] = useState(false);
    const [qty, setQty] = useState(1);
  
    const truncateDescription = (description: string, maxLength: number) => {
      if (description.length <= maxLength) return description;
      return description.slice(0, maxLength) + "...";
    };
  
    const handleAddClick = () => {
      if (showQty) {
        onAdd( qty);
      } else {
        setShowQty(true);
      }
    };
  
    const handleQtyChange = (delta: number) => {
      setQty(Math.max(1, qty + delta));
    };
  
    return (
      <div className="list-item">
        <div className="list-item__image-container">
          <img src={image} alt={name} className="list-item__image" />
        </div>
        <div className="list-item__content">
          <h2>{name}</h2>
          <p>{truncateDescription(shortDescription, 50)}</p>
          <p className="list-item__price">Price: ${price.toFixed(2)}</p>
          {showQty && (
            <div className="list-item__qty">
              <button onClick={() => handleQtyChange(-1)}>-</button>
              <span>{qty}</span>
              <button onClick={() => handleQtyChange(1)}>+</button>
            </div>
          )}
          <Button title="Add to cart" buttonForm="SmallButton" buttonStyle="Primary" onClick={handleAddClick}></Button>
        </div>
      </div>
    );
};

export default ListItem;
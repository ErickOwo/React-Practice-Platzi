import React, { useContext } from "react";
import iconClose from "@icons/icon_close.png"
import AppContext from "../context/AppContext"

const OrderItem = ({ product })=>{
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = ()=>{
    removeFromCart(product);
  };
  return(
    <div className="shopping-cart">
        <figure>
          <img src={product.images[0]} alt="bike" />
        </figure>
        <p>{product.title}</p>
        <p>${product.price}</p>
        <img 
        src={iconClose} 
        alt="close" 
        onClick={handleRemove} />
      </div>
  );
};

export default OrderItem;
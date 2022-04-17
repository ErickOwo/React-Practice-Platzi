import React, { useState, useContext } from "react";
import cardIcon from "@icons/bt_add_to_cart.svg";
import AppContext from "../context/AppContext";

const ProductItem = ({ product })=>{
  const { addToCart } = useContext(AppContext);

  const handleClick = () =>{
    addToCart(product);
  };

  return(
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleClick}>
          <img src={cardIcon} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;
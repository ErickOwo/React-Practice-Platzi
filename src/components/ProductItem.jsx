import React, { useState, useContext } from "react";
import cardIconAdd from "@icons/bt_add_to_cart.svg";
import cardIconAdded from "@icons/bt_added_to_cart.svg"
import AppContext from "../context/AppContext";

const ProductItem = ({ product })=>{
  const [ added, setAdded ] = useState(false);
  const { addToCart } = useContext(AppContext);

  const handleClick = () =>{
    addToCart(product);
  };

  const handleAddIcon = ()=> setAdded(!added);

  return(
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleClick}>
          <img src={added ? cardIconAdded : cardIconAdd} alt="" onClick={ handleAddIcon } />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;
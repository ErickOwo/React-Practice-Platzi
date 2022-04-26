import React, { useContext } from "react";
import cardIconAdd from "@icons/bt_add_to_cart.svg";
import cardIconAdded from "@icons/bt_added_to_cart.svg"
import AppContext from "../context/AppContext";
import ProductsContext from "../context/ProductsContext"

const ProductItem = ({ product, added })=>{
  const { addToCart, removeFromCart } = useContext(AppContext);
  const { handleAdd } = useContext(ProductsContext);

  const handleClickCart = () =>{
    if(!added) addToCart(product);
    else removeFromCart(product);
  }

  return(
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={ handleClickCart }>
          <img src={added ? cardIconAdded : cardIconAdd} alt="" onClick={()=> {handleAdd(product.id); console.log(product)}}/>
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;
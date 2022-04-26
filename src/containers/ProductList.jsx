import React, {useContext} from "react";
import ProductsContext from "../context/ProductsContext";
import ProductItem from "../components/ProductItem";
import "../styles/orders.scss"

const ProductList = ()=>{
  const {products} = useContext(ProductsContext); 

  return(
    <section className="main-container">
      <div className="cards-container">

        {
          products.map(product=>(
          <ProductItem 
            product = {product}
            key = {product.id}
            added = {product.added}
          />
          )
        )}
      </div>
    </section>
  );
}

export default ProductList;
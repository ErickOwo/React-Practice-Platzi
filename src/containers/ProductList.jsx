import React from "react";
import ProductItem from "../components/ProductItem";
import "../styles/orders.scss"
import useGetProducts from "../hooks/useGetProducts";

const API = "https://api.escuelajs.co/api/v1/products?limit=58&offset=1";

const ProductList = ()=>{
  const products = useGetProducts(API);

  return(
    <section className="main-container">
      <div className="cards-container">
        {
          products.map(product=>(
          <ProductItem 
            product = {product}
            key = {product.id}
          />
          )
        )}
      </div>
    </section>
  );
}

export default ProductList;
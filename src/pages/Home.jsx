import React from "react";
import Header from "@containers/Header";
import ProductList from "../containers/ProductList";

const Home = ()=>{
    return(
      <>
        <Header />
        <ProductList />
      </>
    );
};

export default Home;
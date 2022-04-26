import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = API => {
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      const fetchData = async () => {
        const response = await axios(API);
        response.data.map(product => product.added = false)
        setProducts(response.data);
      };
      fetchData();
    },
    [API]
  );

  const handleAdd = id => {
    const productsActulized = products.map(product=>{
      if (id == product.id) product.added = !product.added;
      return product;
    })
    setProducts(productsActulized);
  };

  return {
    products,
    handleAdd
  };
};

export default useGetProducts;

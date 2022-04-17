import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import OrderItem from "../components/OrderItem";
import iconArrow from "@icons/flechita.svg";
import "@styles/my-order.scss";

const MyOrder = ()=>{
  const { state } = useContext(AppContext);

  const totalAdded = ()=>{
    const reducer = (accumulator, currentValue)=> accumulator + currentValue.price;
    const total = state.cart.reduce(reducer, 0);
    return total;
  };

  return( 
    <aside className="product-detail">
    <div className="title-container">
      <img src={iconArrow} alt="arrow" />
      <p className="title">My order</p>
    </div>
    <div className="my-order-content">
      {
        state.cart.map(item=>(
          <OrderItem
            product={item}
            key={`orderItem-${item.id}`}
          />
        ))
      }
    </div>
    <div className="order">
        <p>
          <span>Total</span>
        </p>
        <p>${totalAdded()}</p>
      </div>

      <button className="primary-button">
        Checkout
      </button>
    </aside>
  );
};

export default MyOrder;
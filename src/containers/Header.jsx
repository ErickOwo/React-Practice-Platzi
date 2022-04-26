import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import "@styles/header.scss";
import iconMenu from "@icons/icon_menu.svg";
import logoYardSale from "@logs/logo_yard_sale.svg";
import iconShoppingCard from "@icons/icon_shopping_cart.svg";
import Menu from "@components/Menu";
import MyOrder from "./MyOrder";
import MobileMenu from "./MobileMenu";

const Header =()=>{
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const { state } = useContext(AppContext);

  const handleToggleMenu = ()=>{
    setToggleMenu(!toggleMenu);
  }

  const handleToggle = ()=>{
    setToggle(!toggle);
  }

  const handleToggleOrders = ()=>{
    setToggleOrders(!toggleOrders);
  }

  return(
    <>
      {toggleMenu && <MobileMenu handleToggleMenu={handleToggleMenu} />}
      <nav>
        <img 
          onClick={handleToggleMenu} 
          src={iconMenu} 
          alt="menu" 
          className="menu" />
        <div className="navbar-left">
          <img src={logoYardSale} alt="logo" className="nav-logo" />

          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
            <li
              className="navbar-shopping-cart"
              onClick={() => handleToggleOrders()}
            >
              <img src={iconShoppingCard} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
        {toggleOrders && <MyOrder closeToggleOrders={handleToggleOrders} />}
      </nav>
    </>
  );
}

export default Header;
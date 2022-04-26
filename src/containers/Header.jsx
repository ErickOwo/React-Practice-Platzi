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
  const [animationMenu, setAnimationMenu] = useState(null);
  const [animationOverlay, setAnimationOverlay] = useState(null);

  const { state } = useContext(AppContext);

  const handleToggleMenu = ()=>{
    if(!toggleMenu){
      setAnimationMenu("openNav 1s forwards");
      setAnimationOverlay("displayOverlay 1s forwards")
      setToggleMenu(!toggleMenu);
    }
    else{
      setAnimationMenu("closeNav 1s forwards");
      setAnimationOverlay("removeOverlay 1s forwards");
      setTimeout(()=>{
        setToggleMenu(!toggleMenu);
      },1000);
    }
  }

  const handleToggle = ()=>{
    setToggle(!toggle);
    if(toggleOrders) setToggleOrders(!toggleOrders);
  }

  const handleToggleOrders = ()=>{
    setToggleOrders(!toggleOrders);
    if(toggle) setToggle(!toggle);
  }

  return(
    <>
      {
        toggleMenu && <MobileMenu 
        handleToggleMenu={handleToggleMenu} 
        styleMenu={animationMenu} 
        styleOverlay={animationOverlay} />
      }
      <nav>
        <img 
          onClick={handleToggleMenu} 
          src={iconMenu} 
          alt="menu" 
          className="menu" />
        <div className="navbar-left">
          <a href="/" className="nav-logo">
            <img src={logoYardSale} alt="logo" className="nav-logo-img" />
          </a>
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
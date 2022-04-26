import React from "react";
import "@styles/mobile-menu.scss"
import iconMenu from "@icons/icon_menu.svg";

const MobileMenu = ( { handleToggleMenu, styleMenu, styleOverlay } )=>{
  return(
    <div className="overlay" style={{animation: styleOverlay}}>
      <div className="mobile-menu" style={{animation: styleMenu}}>
        <img src={iconMenu} className={"icon-menu"} onClick={handleToggleMenu} />
        <ul>
          <li>
            <a href="/">CATEGORIES</a>
          </li>
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
            <a href="/">Other</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="/">My orders</a>
          </li>
          <li>
            <a href="/">My account</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="/" className="email">
              platzi@example.com
            </a>
          </li>
          <li>
            <a href="/" className="sign-out">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
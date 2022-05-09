import React from 'react';
import menu_icon from "../style/images/bars-solid.svg";
import user_icon from "../style/images/user-solid.svg";

const Header = () => {
  return (
    <div id="header" className="container cf">
      <ul>
        <li><a href="#"><img className="icon" src={menu_icon} alt="menu"/></a></li>
        <li><a href="/" className="home_btn">DayPrint</a></li>
        <li><a href="/login"><img className="icon" src={user_icon} alt="user"/></a></li>
      </ul>
    </div>
  )
}

export default Header;
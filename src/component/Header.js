import React from 'react';
import footprint_icon from "../style/images/shoe-prints-solid.svg";
import user_icon from "../style/images/user-solid.svg";

const Header = () => {
  return (
    <div id="header" className="container cf">
      <ul>
        <li><a href="#">스토리 작성하기 <img className="icon" src={footprint_icon} alt="menu"/></a></li>
        <li><a href="/" className="home_btn">DayPrint</a></li>
        <li><a href="/login">로그인 <img className="icon" src={user_icon} alt="user"/></a></li>
      </ul>
    </div>
  )
}

export default Header;
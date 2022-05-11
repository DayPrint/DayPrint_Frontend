// import React from 'react';
// import footprint_icon from "../style/images/shoe-prints-solid.svg";
// import user_icon from "../style/images/user-solid.svg";
import '../style/header.css';

const Header = () => {
  return (
    // <div id="header" className="container cf">
    //   <ul>
    //     <li><a href="#">스토리 작성하기 <img className="icon" src={footprint_icon} alt="add_story"/></a></li>
    //     <li><a href="/" className="home_btn">DayPrint</a></li>
    //     <li><a href="/login">로그인 <img className="icon" src={user_icon} alt="user"/></a></li>
    //   </ul>
    // </div>
    <header>
      <div  class="container cf">
        <h1>Dayprint</h1>
        <nav>
            <ul class="Header_bar cf">
                <li class="Header_add"><a href="#" alt="add_story">스토리 작성하기 <i class="fa-solid fa-shoe-prints"></i></a></li>
                <li class="Header_logo"><a href="/" alt="home">DayPrint</a></li>
                <li class="Header_account"><a href="/login" alt="login">로그인 <i class="fa-solid fa-user"></i></a></li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
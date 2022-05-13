import React from 'react';
import '../style/header.css';

const Header_beforelogin = () => {
  return (
    <header>
      <div className="container cf">
        <nav>
            <ul className="Header_bar cf">
                <li className="Header_add"><a href="/login" alt="add_story">로그인 하고 발도장 찍기 <i class="fa-solid fa-shoe-prints"></i></a></li>
                <li className="Header_logo"><a href="/main_beforelogin" alt="home">DayPrint</a></li>
                <li className="Header_account"><a href="/login" alt="login">로그인 <i class="fa-solid fa-user"></i></a></li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header_beforelogin;
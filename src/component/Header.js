import React from 'react';
import '../style/header.css';

const Header = () => {
  return (
    <header>
      <div className="container cf">
        <nav>
            <ul className="Header_bar cf">
                <li className="Header_add"><a href="add" alt="add_story">스토리 작성하기 <i class="fa-solid fa-shoe-prints"></i></a></li>
                <li className="Header_logo"><a href="/" alt="home">DayPrint</a></li>
                <li className="Header_account"><a href="/login" alt="login">로그인 <i class="fa-solid fa-user"></i></a></li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
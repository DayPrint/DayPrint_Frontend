import React from 'react';
import '../style/header.css';
import authService from '../service/auth.service';

const Header = () => {

  const handleLogout= (e)=>{
    authService.logout();
  }

  return (
    <header>
      <div className="container cf">
        <nav>
            <ul className="Header_bar cf">
                {
                localStorage.getItem("user")===null || localStorage.getItem("user")==="undefind"
                ?
                <li className="Header_add"><a href="/login" alt="add_story">발도장 찍기 <i class="fa-solid fa-shoe-prints"></i></a></li>
                :
                <li className="Header_add"><a href="/add" alt="add_story">스토리 작성하기 <i class="fa-solid fa-shoe-prints"></i></a></li>
                }
                
                <li className="Header_logo"><a href="/" alt="home">DayPrint</a></li>
                
                {
                localStorage.getItem("user")===null || localStorage.getItem("user")==="undefind"
                ?
                <li className="Header_account"><a href="/login" alt="login">로그인 <i class="fa-solid fa-user"></i></a></li>
                :
                <li className="Header_account"><a href="/" alt="logout" onClick={handleLogout}>로그아웃 <i class="fa-solid fa-user"></i></a></li>
                }
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
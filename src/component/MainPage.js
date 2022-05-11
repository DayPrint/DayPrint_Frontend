import React from 'react';
import '../style/styles.css';
import Header from './Header';
import Footer from './Footer';


const MainPage = () => {

  return (
    <div>
      <div className="MyAccount">
        <div className="account">OOO님의 기념일을 친구와 공유해보세요!</div>
      </div>
      <div className="MyWorkplace">
        <div><a href="/add">my story</a></div>
        <div><a href="/post">my story</a></div>
        <div><a href="/post">my story</a></div>
        <div><a href="/post">my story</a></div>
        <div><a href="/post">my story</a></div>
        <div><a href="/post">my story</a></div>
        <div><a href="/post">my story</a></div>
        <div><a href="/post">my story</a></div>
        <div><a href="/post">my story</a></div>
        <div><a href="/post">my story</a></div>
      </div>
      <div className="Instagram">instagram</div>
      <Footer />
    </div>
  )
}

export default MainPage;
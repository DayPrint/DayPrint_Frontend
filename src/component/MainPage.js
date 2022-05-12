import React from 'react';
import '../style/styles.css';
import Footer from './Footer';
import Header from './Header.js'


const MainPage = () => {

  return (
    <div>
      <Header/>
      <div className="MyAccount">
        <div className="account">OOO님의 기념일을 친구와 공유해보세요!</div>
      </div>
      <div className="MyWorkplace">
        <div><a href="/post">2022.05.10</a></div>
        <div><a href="/post">yyyy.mm.dd</a></div>
        <div><a href="/post">yyyy.mm.dd</a></div>
        <div><a href="/post">yyyy.mm.dd</a></div>
        <div><a href="/post">yyyy.mm.dd</a></div>
        <div><a href="/post">yyyy.mm.dd</a></div>
        <div><a href="/post">yyyy.mm.dd</a></div>
        <div><a href="/post">yyyy.mm.dd</a></div>
        <div><a href="/post">yyyy.mm.dd</a></div>
      </div>
      {/* <div className="Instagram">instagram</div> */}
      <Footer />
    </div>
  )
}

export default MainPage;

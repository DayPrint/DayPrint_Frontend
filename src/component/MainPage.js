import React from 'react';
import '../style/styles.css';
import Footer from './Footer';
import Header from './Header.js'
import MainMyAccount from './MainMyAccount';
import MainMyWorkplace from './MainMyWorkplace';


const MainPage = () => {
  return (
    <div>
      <Header/>
      <MainMyAccount/>
      <MainMyWorkplace/>
      <Footer/>
    </div>
  )
}

export default MainPage;

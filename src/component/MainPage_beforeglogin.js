import React from 'react';
import '../style/styles.css';
import Footer from './Footer';
import Header from './Header.js'
import MainMyAccount from './MainMyAccount';
import MainMyWorkplace from './MainMyWorkplace';
import MainMyAccount_beforelogin from './MainMyAccount_beforelogin';
import Header_beforelogin from './Header_beforelogin';


const MainPage_beforelogin = () => {
  return (
    <div>
      <Header_beforelogin/>
      <MainMyAccount_beforelogin/>
      <MainMyWorkplace/>
      <Footer/>
    </div>
  )
}

export default MainPage_beforelogin;

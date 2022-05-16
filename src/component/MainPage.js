import React, { useState, useEffect } from 'react';
import '../style/styles.css';
import Footer from './Footer';
import Header from './Header.js'
import postService from '../service/post.service';
import axios from 'axios';
import DisplayList from './DisplayList';
import MainMyAccount from './MainMyAccount';
import MainMyWorkplace from './MainMyWorkplace';


const MainPage = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const fetchData = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const response = postService.getpost();
      setData(response.then(result=>{return result}));
      console.log(response.then(result=>{return result}));
    } catch (e) {
      setError(error);
    }
  }
  useEffect(() => { fetchData(); }, []);
  
    
  return (
    <div>
      <Header />
      <MainMyAccount/>
      <MainMyWorkplace/>
      <Footer />
    </div>
  )
}

export default MainPage;
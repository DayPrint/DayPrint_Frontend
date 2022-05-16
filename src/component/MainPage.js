import React, { useState, useEffect } from 'react';
import '../style/styles.css';
import Footer from './Footer';
import Header from './Header.js'
import postService from '../service/post.service';
import MainMyAccount from './MainMyAccount';
import MainMyWorkplace from './MainMyWorkplace';

import '../index.css';


const MainPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();


  const fetchData = async () => {
    try {

      const response = await postService.getpost();

      console.log("<= response => ");
      console.log(response);
      response.map(o => console.log(o));
      
      console.log(" <= data => ");
      setData(response);
      console.log(data.length);
    } catch (e) {
      setError(e);
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
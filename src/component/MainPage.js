import React, { useState, useEffect } from 'react';
import '../style/styles.css';
import Footer from './Footer';
import Header from './Header.js'
import postService from '../service/post.service';
import axios from 'axios';
import DisplayList from './DisplayList';
import '../index.css';


const MainPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();


  const fetchData = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      const response = await postService.getpost();

      console.log("<= response => ");
      console.log(response);
      response.map(o => console.log(o));
      
      console.log(" <= data => ");
      setData(response);
      console.log(data.length);
    } catch (e) {
      setError(error);
    }
  }

  useEffect(() => { 
    fetchData(); }, []);
  
  return (
    <div>
      <Header />
      <div className="MyAccount">
        <div className="account">OOO님의 기념일을 친구와 공유해보세요!</div>
        <div><DisplayList data={data}/></div>
        <div></div>
      </div>
      {/* <DisplayList data={data} /> */}
      {/* <button onClick={postService.getpost}>Click</button> */}
      
      {/* <div className="Instagram">instagram</div> */}
      <Footer />
    </div>
  )
}

export default MainPage;

import React, { useState, useEffect } from 'react';
import '../style/styles.css';
import Footer from './Footer';
import Header from './Header.js'
import DisplayList from './DisplayList';
import postService from '../service/post.service';
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

  useEffect(() => { 
    fetchData(); }, []);
  
  return (
    <div>
      <Header />
      <div className="MyAccount">
        <div className="account">OOO님의 기념일을 친구와 공유해보세요!</div>
      </div>
      <div className="MyWorkplace">
        <DisplayList data={data} />
      </div>
      {/* <button onClick={postService.getpost}>Click</button> */}

      {/* <div className="Instagram">instagram</div> */}
      <Footer />
    </div>
  )
}

export default MainPage;

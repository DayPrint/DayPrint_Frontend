import React, { useState, useEffect } from 'react';
import '../style/styles.css';
import Footer from './Footer';
import Header from './Header.js'
import DisplayList from './DisplayList';
<<<<<<< HEAD
import postService from '../service/post.service';


const MainPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
=======
import '../index.css';


const MainPage = () => {
  const [data, setData] = useState([]);
>>>>>>> 943cd5d8474deca6c92bad411210b395c3b9d8cf
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
    setLoading(false);
  }
<<<<<<< HEAD
  useEffect(() => { fetchData(); }, []);


=======

  useEffect(() => { 
    fetchData(); }, []);
  
>>>>>>> 943cd5d8474deca6c92bad411210b395c3b9d8cf
  return (
    <div>
      <Header />
      <div className="MyAccount">
        <div className="account">OOO님의 기념일을 친구와 공유해보세요!</div>
        <div><DisplayList data={data}/></div>
        <div></div>
      </div>
      <DisplayList data={data} />
      {/* <button onClick={postService.getpost}>Click</button> */}

      {/* <div className="Instagram">instagram</div> */}
      <Footer />
    </div>
  )
}

export default MainPage;

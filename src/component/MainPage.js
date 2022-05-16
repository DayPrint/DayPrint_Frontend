import React, { useState, useEffect } from 'react';
import '../style/styles.css';
import Footer from './Footer';
import Header from './Header.js'
import DisplayList from './DisplayList';
import postService from '../service/post.service';


const MainPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);
      // const response=await postService.getpost();
      // setData(response);
      setData(postService.getpost());
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }
  useEffect(() => { fetchData(); }, []);


  return (
    <div>
      <Header />
      <div className="MyAccount">
        <div className="account">OOO님의 기념일을 친구와 공유해보세요!</div>
      </div>
      <DisplayList data={data} />
      {/* <button onClick={postService.getpost}>Click</button> */}

      {/* <div className="Instagram">instagram</div> */}
      <Footer />
    </div>
  )
}

export default MainPage;

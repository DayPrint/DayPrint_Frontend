import React from 'react';
import '../style/styles.css';

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
      <div className="carousel">
        <a className="carousel-item" href="#one!"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-08.jpg" /></a>
        <a className="carousel-item" href="#two!"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-09.jpg" /></a>
        <a className="carousel-item" href="#three!"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-10.jpg" /></a>
        <a className="carousel-item" href="#four!"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-11.jpg" /></a>
        <a className="carousel-item" href="#five!"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/food-drink-12.jpg" /></a>
      </div>
      <div className="controls">
        <span className="prev btn-floating">
          <i className="material-icons">arrow_back</i>
        </span>
        <span className="next btn-floating">
          <i className="material-icons">arrow_forward</i>
        </span>
      </div>
    </div>
  )
}

export default MainPage;
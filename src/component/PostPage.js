import React from 'react';
import '../style/styles.css';
import plus_btn from "../style/images/plus-solid.svg";
import Header from './Header.js'

const PostPage = () => {

  return (
    <div>
      <Header/>
      <div className="post_background">
        <h1>000님에게 10개의 메세지가 왔습니다</h1>
        <p>받은 메시지는 25일날 확인하실 수 있어요</p>
        <a href="/post/comment"><img className="plus_btn" src={plus_btn} alt="plus"/></a>
      </div>
    </div>
  )
}

export default PostPage;

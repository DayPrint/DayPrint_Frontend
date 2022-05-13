import React from 'react';
import '../style/css/comment.css';
import '../style/css/button.css';
import Header from './Header.js'

const Comment = () => {
  return (
    <div>
      <Header/>
      <div className="comment">
        <p>메시지를 남겨주세요</p>
        <textarea name="text" placeholder="write here" />
        <input placeholder="닉네임 입력"/>
        <a href="/post" className="myButton">입력</a>
      </div>
    </div>
  )
}

export default Comment;

import React from 'react';
import '../style/styles.css';

const LoginPage = () => {

  return (
    <div id="login">
      <form autoComplete="off">
        <input type="text" id="id" placeholder="아이디" />
        <input type="password" id="pwd" placeholder="비밀번호" />
        <button type="submit" className="login_btn">로그인</button>
        <a href="/signup" className="signup_btn">회원가입</a>
      </form>

    </div>
  );
};

export default LoginPage;

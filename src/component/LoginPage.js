import React from 'react';
import '../style/styles.css';
import Header from './Header';

const LoginPage = () => {

  return (
    <div>
      <Header />
      <div>
        <label htmlFor="id">아이디 : </label>
        <input type="text" id="id" />
      </div>
      <div>
        <label htmlFor="pwd">패스워드 : </label>
        <input type="password" id="pwd" />
      </div>
    </div>
  )
}

export default LoginPage;
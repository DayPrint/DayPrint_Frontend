import React from 'react';
import '../style/styles.css';

const LoginPage = () => {

  return (
    <div>
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
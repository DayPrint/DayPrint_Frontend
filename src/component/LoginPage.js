import React, {useState} from 'react';
import {Link, Navigate, Redirect, useNavigate} from "react-router-dom"
import '../style/styles.css';
import authService from '../service/auth.service';
import FooterLogo from "./FooterLogo";

const LoginPage = () => {
  let navigator =useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })
  
  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
    console.log(inputs);
  };

  const handleLogin=async (e)=>{
    e.preventDefault();
    await authService.login(inputs.email,inputs.password);
    if(localStorage.getItem('user').match("undefined")){
      console.log("fail");
    }
    else{
      navigator("/");  
    }
  }

  return (
    <div id="login">
      {/* <Header /> */}
      <div class="content">
        <h2 class="banner-tt"><a href="/">DayPrint</a> 로그인</h2>
        <form autoComplete="off" class="login_form" onSubmit={handleLogin}>
          <div className="field">
            <label for="userName" class="hidden">Name</label>
            <i className="fas fa-user" />
            <input type="text" name="email" placeholder="  아이디  or  이메일" onChange={onChange}/>
          </div>
          <div className="field">
            <label for="userPass" class="hidden">password</label>
            <i className="fas fa-lock" />
            <input type="password" name="password" placeholder="  비밀번호" onChange={onChange}/>
          </div>
          <input type="submit" className="field" value="로그인" />
        </form>
        <div>
          <div>
            <a href="/signup" class="link">회원가입</a>
          </div>
        </div>
      </div>
      <FooterLogo/>
    </div>
  );
};

export default LoginPage;
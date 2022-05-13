import axios from 'axios';
import React, { useState } from 'react';
import '../style/styles.css';

const LoginPage = () => {

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })
  const [results, setResults] = useState({
    id: "",
    Autorization: ""
  })

  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
    console.log(inputs);
  };

  const getLoginData = (event) => {
    event.preventDefault();
    console.log(inputs.email);
    console.log(inputs.password);
    try {
      console.log("login 실행")
      axios.post(
        "/login",
        {
        "email": inputs.email,
        "password": inputs.password
      }
      ).then((res) => {
        console.log(res);
        setResults({
          id: res.data.result.id,
          Autorization: res.data.result.jwtToken
        });
        localStorage.setItem("user",JSON.stringify(results));
      })
    } catch (error) {
      console.log(error);
    }
    return;
  }

  return (
    <div id="login">
      {/* <Header /> */}
      <div class="content">
        <h2 class="banner-tt"><a href="/">DayPrint</a> 로그인</h2>
        <form autoComplete="off" class="login_form" onSubmit={getLoginData}>
          <div className="field">
            <label for="userName" class="hidden">Name</label>
            <i className="fas fa-user" />
            <input type="text" name="email" placeholder="  아이디  or  이메일" onChange={onChange} />
          </div>
          <div className="field">
            <label for="userPass" class="hidden">password</label>
            <i className="fas fa-lock" />
            <input type="password" name="password" placeholder="  비밀번호" onChange={onChange} />
          </div>
          <input type="submit" className="field" value="로그인" onChange={onChange} />
        </form>
        <div>
          <div>
            <a href="/signup" class="link">회원가입</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


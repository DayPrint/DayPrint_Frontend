import React, { useState, useRef } from 'react';
import '../style/css/imageupload.css';
import img from '../style/images/file-image-solid.svg'
import '../style/styles.css';
import AuthService from '../service/auth.service';
import { useNavigate } from 'react-router-dom';
import FooterLogo from './FooterLogo';

const LoginPage = () => {
  const navigator = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    phone: "",
    imagefile: "",
    id: "",
    passwd1: "",
    passwd2: ""

  })
  const [passwdCheck, setpasswdCheck] = useState(true);
  const { username, phone, imagefile, id, passwd1, passwd2 } = inputs;
  const checkPasswd = e => {
    
    if (e.target.value != inputs.passwd1) {
      setpasswdCheck(true);
      setInputs({
        ...inputs,
        passwd2:e.target.value
      });
    } else {
      setpasswdCheck(false);
      setInputs({
        passwd2: e.target.value
      });
    }
  }
  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
    console.log(inputs);
  };
  const myRef = useRef(null);
  const file = useRef(null);
  const getFilePath = () => {
    myRef.current.placeholder = file.current.value;
    inputs[imagefile] = file.current.value;
  }
  const register = async (e) => {
    e.preventDefault();
    await AuthService.register(inputs);
    navigator("/login");
  }
  return (
    <div id="sign_up">
      {/* <Header /> */}
      <div className="content">
        <h2 class="banner-tt"><a href="/">DayPrint </a>회원가입</h2>
        <form autoComplete="off" onSubmit={register} class="sign_up_form">
          <div className="field">
            <label for="upload">대표이미지 선택하기</label>
            <input type="file" id="uploadfile" placeholder='파일 찾아서 업로드'></input>
          </div>
          <div className="field">
            <label for="userName" class="hidden">Name</label>
            <i className="fas fa-user" />
            <input type="text" id="userName" name="username" onChange={onChange} placeholder="  사용자이름" />
          </div>
          <div className="field">
            <label for="phone" class="hidden">PhoneNumber</label>
            <i className="fas fa-phone" />
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" onChange={onChange} placeholder="  연락처 (000-0000-0000)" />
          </div>
          <div className="field">
            <label for="userEmail" class="hidden">email</label>
            <i className="far fa-envelope" />
            <input type="email" id="userEmail" name="id" onChange={onChange} placeholder="  아이디(E-mail)" required />
          </div>
          <div className="field">
            <label for="userPass" class="hidden">password</label>
            <i className="fas fa-lock" />
            <input type="password" id="userPass" name="passwd1" onChange={onChange} placeholder="  비밀번호" required />
          </div>
          <div className="field">
            <label for="userPass" class="hidden">password</label>
            <i className="fas fa-lock" />
            <input type="password" id="passConfirm" name="passwd2" onChange={checkPasswd} placeholder="  비밀번호 확인" />
            
          </div>
          {passwdCheck&&(<h3>패스워드가 같지 않습니다.</h3>)}
      
          <input type="submit" className="field" value="DayPrint 계정 만들기" onClick={() => console.log(inputs)} />
        </form>
        <div class="sign_up_container">
          <div class="sign_up_link">
            <a href="/" class="link">홈으로</a>
            <a href="/login" class="link">이미 회원이세요? 로그인하기</a>
          </div>
        </div>
      </div>
      <FooterLogo />
    </div>
  )
}

export default LoginPage;
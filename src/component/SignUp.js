import React from 'react';
import '../style/styles.css';
import Header from './Header';

const LoginPage = () => {

  return (
    <div id="sign_up">
      {/* <Header /> */}
      <div className="content">
        <h2 class="banner-tt"><a href="/">DayPrint </a>회원가입</h2>
        <form autoComplete="off" action="" method="POST" class="sign_up_form">
          <div className="field">
            <label for="userName" class="hidden">Name</label>
            <i className="fas fa-user" />
            <input type="text" id="userName" name="username" placeholder="  아이디" />
          </div>
          <div className="field">
            <label for="userEmail" class="hidden">email</label>
            <i className="far fa-envelope" />
            <input type="email" id="userEmail" name="useremail" placeholder="  이메일 주소" />
          </div>
          <div className="field">
            <label for="userPass" class="hidden">password</label>
            <i className="fas fa-lock" />
            <input type="password" id="userPass" name="userpw" placeholder="  비밀번호" />
          </div>
          <div className="field">
            <label for="userPass" class="hidden">password</label>
            <i className="fas fa-lock" />
            <input type="password" id="passConfirm" placeholder="  비밀번호 확인" />
          </div>
          <input type="submit" className="field" value="DayPrint 계정 만들기" />
        </form>
        <div class="sign_up_container">
          <div class="sign_up_link">
            <a href="/" class="link">홈으로</a>
            <a href="/login" class="link">이미 회원이세요? 로그인하기</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
import React from 'react';
import '../style/css/styles.css';
const LoginPage = () => {

  return (
    <div id="sign_up">
      <div className="content">
        <h2>무료로 계정을 만들어보세요!</h2>
        <form autoComplete="off" action="" method="POST">
          <div className="field">
            <i className="fas fa-user" />
            <input type="text" id="userName" name="username" placeholder="이름" />
          </div>
          <div className="field">
            <i className="far fa-envelope" />
            <input type="email" id="userEmail" name="useremail" placeholder="이메일 주소" />
          </div>
          <div className="field">
            <i className="fas fa-lock" />
            <input type="password" id="userPass" name="userpw" placeholder="비밀번호" />
          </div>
          <div className="field">
            <i className="fas fa-lock" />
            <input type="password" id="passConfirm" placeholder="비밀번호 확인" />
          </div>
          <input type="submit" className="signup_btn" value="DayPrint 계정 만들기" />
        </form>
        <a href="/login" className="login_btn">이미 회원이세요? 로그인하기</a>
      </div>
    </div>
  )
}

export default LoginPage;
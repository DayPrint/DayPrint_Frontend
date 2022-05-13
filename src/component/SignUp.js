import React,{ useState ,useRef} from 'react';
import '../style/css/imageupload.css';
import img from '../style/images/file-image-solid.svg'
import '../style/styles.css';
import AuthService from '../service/auth.service';

const LoginPage = () => {
  const [inputs, setInputs]=useState({
    username:"",
    phone:"",
    imagefile:"",
    id:"",
    passwd1:"",
    passwd2:""

  })
  const {username,phone,imagefile,id,passwd1,passwd2}=inputs;
  const onChange=e=>{
    setInputs({
      ...inputs,
      [e.target.name]:e.target.value
    });
  };
  const myRef=useRef(null);
  const file=useRef(null);
  const getFilePath=()=>{
    myRef.current.placeholder=file.current.value;
    inputs[imagefile]=file.current.value;
  }
  const register=(e)=>{
    e.preventDefault();
    AuthService.register(inputs);
  }
  return (
    <div id="sign_up">

      {/* <Header /> */}
      <div className="content">
        <h2 class="banner-tt"><a href="/">DayPrint </a>회원가입</h2>
        <form autoComplete="off" onSubmit={register} class="sign_up_form">
          <div className="field">
            <label for="userName" class="hidden">Name</label>
            <i className="fas fa-user" />
            <input type="text" id="userName" name="username" onChange={onChange} placeholder="  사용자이름" />
          </div>
          <div className="field">
            <label for="phone" class="hidden">PhoneNumber</label>
            <i className="fas fa-user" />
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" onChange={onChange} placeholder="  연락처" />
          </div>
          <div className="field">
            <label for="userEmail" class="hidden">email</label>
            <i className="far fa-envelope" />
            <input type="email" id="userEmail" name="id" onChange={onChange} placeholder="  아이디(E-mail)" required />
          </div>
          <div className="field">
            <label for="userPass" class="hidden">password</label>
            <i className="fas fa-lock" />
            <input type="password" id="userPass" name="passwd1" onChange={onChange} placeholder="  비밀번호" required/>
          </div>
          <div className="field">
            <label for="userPass" class="hidden">password</label>
            <i className="fas fa-lock" />
            <input type="password" id="passConfirm" name="passwd2" onChange={onChange} placeholder="  비밀번호 확인" />
          </div>
          <div class="filebox">
                    <label for="file"><img src={img} /></label>
                    <input class="upload-name"  ref={myRef}  />
                    <input type="file" id="file" name="imagefile" onChange={getFilePath} ref={file} />
                </div>
          <input type="submit" className="field" value="DayPrint 계정 만들기" onClick={()=>console.log(inputs)} />
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

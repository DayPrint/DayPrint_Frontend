import React, { useState } from 'react';
import '../style/css/addpost.css';
import '../style/styles.css';
import Header from './Header.js'
import PostService from '../service/post.service';
// import img from '../style/images/file-image-solid.svg'
// import '../style/css/button.css';
// import '../style/css/addpostpage.css';
// import '../style/css/button.css'
import FooterLogo from './FooterLogo';
import '../style/css/button.css';


const AddPostPage = () => {
    const [inputs, setInputs]=useState({
        file:"",
        title:"",
        date:"",
        explanation:""
      })
    const {uploadfile,date,explanation,title}=inputs;
    const onChange=e=>{
        setInputs({
        ...inputs,
        [e.target.name]:e.target.value
        });
    };
    const post=(e)=>{
        e.preventDefault();
        PostService.addpost(inputs);
        console.log(inputs);
    }
    return (
        <div id="addpost">

      <Header />
      <div className="content">
        <form autoComplete="off" action="" method="POST" class="" onSubmit={post}>
            <div className="field">
                <input type="file" id="uploadfile" placeholder='파일 찾아서 업로드'></input>
                <label for="upload">기념일 사진 찾기</label>
            </div>
            <div className="field">
                <label for="title" class="fieldtext">나의 기념일</label>
                <input type="text" id='title' name="title" onChange={onChange} placeholder="  제목" />
            </div>
            <div className="field">
                <label for="date" class="fieldtext">기념일 날짜</label>
                <input type="date" id='date' name="date" onChange={onChange} placeholder="날짜" />
            </div>
            <div className="field field_des">
                <label for="explanation" class="fieldtext">설명</label>
                <input type="postContent" id='explanation' name="explanation" onChange={onChange} placeholder='  기념일의 설명' />
            </div>
          <button type="submit" className="field addpostpost" value="DayPrint 계정 만들기"><a href='/post'>스토리 작성하기</a></button>
        </form>
      </div>
      
      <FooterLogo/>
    </div>
    );
};

export default AddPostPage;

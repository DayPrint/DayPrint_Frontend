import React, { useState } from 'react';
import '../style/css/addpost.css';
import '../style/styles.css';
import Header from './Header.js'
import PostService from '../service/post.service';
import FooterLogo from './FooterLogo';
import '../style/css/button.css';
import { useNavigate } from 'react-router-dom';

const AddPostPage = () => {
    const navigator = useNavigate();

    // const imgRef = useRef();
    const [inputs, setInputs]=useState({
        file:"/",
        title:"",
        date:"",
        explanation:""
      })
    const onChange=e=>{
        setInputs({
        ...inputs,
        [e.target.name]:e.target.value
        });
    };
    const post= async (e)=>{
        e.preventDefault();
        await PostService.addpost(inputs);
        console.log(inputs);
        return navigator("/");
    };

    // const onLoadFile= (e)=>{
    //     const reader = new FileReader();
    //     const file = e.target.files[0];
    //     console.log(file);

    //     console.log(reader.readAsDataURL(file));
    //     reader.onloadend = () => {
    //         setImgurl(reader.result);
    //         console.log("이미지 주소"+reader.result);
    //         setInputs({
    //             ...inputs,
    //             file:imgurl
    //         });
    //         console.log(reader);
    //         console.log(inputs);

    //         const formData = new FormData();
    //         formData.append('file',reader);
    //         for(const keyvalue of formData) console.log(keyvalue);
    //     };
    // };
    
    return (
        <div id="addpost">
      <Header />
      <div className="content">
        <form autoComplete="off" action="" method="POST" class="" onSubmit={post}>
            
            <div className="field">
                <label for="title" class="fieldtext">나의 기념일</label>
                <input type="text" id='title' name="title" onChange={onChange} maxlength="15" placeholder="  제목 (최대 15글자)" />
            </div>
            <div className="field">
                <label for="date" class="fieldtext">기념일 날짜</label>
                <input type="date" id='date' name="date" onChange={onChange} placeholder="날짜" />
            </div>
            <div className="field field_des">
                <label for="explanation" class="fieldtext">설명</label>
                <textarea type="postContent" id='explanation' maxlength="15" name="explanation" onChange={onChange} placeholder='  기념일의 설명 (최대 15글자)' />
            </div>
          <button type="submit" className="field addpostpost" value="DayPrint 계정 만들기" onChange={onChange}>스토리 작성하기</button>
        </form>
      </div>
      {/* <img src={inputs.file}></img> */}
      <FooterLogo/>
    </div>
    );
};

export default AddPostPage;

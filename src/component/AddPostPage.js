import React, { useState } from 'react';
import '../style/css/button.css';
import '../style/css/addpostpage.css';
import img from '../style/images/file-image-solid.svg'
import '../style/css/button.css'
import Header from './Header.js'
import PostService from '../service/post.service.js';

const AddPostPage = () => {
    const [inputs, setInputs]=useState({
        file:"",
        title:"",
        date:"",
        explanation:""
      })
    const {file,date,explanation,title}=inputs;
    const onChange=e=>{
        setInputs({
        ...inputs,
        [e.target.name]:e.target.value
        });
        console.log(inputs);
    };
    const post=(e)=>{
        e.preventDefault();
        PostService.addpost(inputs);
      }
    return (
        <div className='addpostform'>
            <Header/>
            <form autoComplete="off" onSubmit={post}>
                <div class="filebox">
                    <label for="file"><img src={img} /></label>
                    <input class="upload-name" value="첨부파일" name="file" onChange={onChange} placeholder="첨부파일" />
                    <input type="file" id="file" />
                </div>
                <div class='form'>
                    <div>
                        <label for="title">나의 기념일</label>
                        <input type="text" id='title' name="title" onChange={onChange} placeholder="제목" value="제목" />
                    </div>
                    <div>
                        <label for="date">기념 날짜</label>
                        <input type="date" id='date' name="date" onChange={onChange} placeholder="날짜" />
                    </div>
                    <div>
                        <label for="explanation">설명</label>
                        <input type="postContent" id='explanation' name="explanation" onChange={onChange} placeholder='설명' />
                    </div>
                </div>
            </form>
            <a href="/post" className="myButton">입력</a>
        </div>
    );
};

export default AddPostPage;

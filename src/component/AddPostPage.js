import React, { useState } from 'react';
import '../style/css/button.css';
import '../style/css/addpostpage.css';
import img from '../style/images/file-image-solid.svg'
import '../style/css/button.css'
import Header from './Header.js'

const AddPostPage = () => {
    // const theme = ['Christmas', 'New Year', 'Birthday', 'Graduation', 'Marriage'];
    // const Theme = {
    //     "Christmas": "Christmas",
    //     "NewYear": "New Year",
    //     "Birthday": "Birthday",
    //     "Graduation": "Graduation",
    //     "Marriage": "Marriage"
    // }
    // const [thema, setTheme] = useState(Theme.Christmas);
    // const changeTheme = (params, e) => {
    //     //this.thema=Theme.e.target.value;
    //     const { value, name } = e.target;
    //     console.log(value, name);
    //     console.log(params);
    // }
    return (
        <div className='addpostform'>
            <Header/>
            {/* <div>
                <ul id="theme">
                    {theme.map((th, i) => {
                        return <li onClick={changeTheme} value={th}>{th}</li>
                    })}
                </ul>
            </div> */}
            <form autoComplete="off" action="" method="POST">
                <div class="filebox">
                    <label for="file"><img src={img} /></label>
                    <input class="upload-name" value="첨부파일" placeholder="첨부파일" />
                    <input type="file" id="file" />
                </div>
                <div class='form'>
                    <div>
                        <label for="title">나의 기념일</label>
                        <input type="text" id='title' name="title" placeholder="제목" value="제목" />
                    </div>
                    <div>
                        <label for="date">기념 날짜</label>
                        <input type="datetime-local" id='date' name="date" placeholder="날짜" />
                    </div>
                    <div>
                        <label for="explanation">설명</label>
                        <input type="postContent" id='explanation' name="explanation" placeholder='설명' />
                    </div>
                </div>
            </form>
            <a href="/post" className="myButton">입력</a>
        </div>
    );
};

export default AddPostPage;

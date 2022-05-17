import React from 'react';
import { useState, useEffect } from 'react';
import postService from '../service/post.service';
import '../style/postpage.css';
//import useAsync from 'react-async'

const PostContainer = (props) => {
    const [data, setData] = useState({
        file:"",
        title:"",
        targetDate:"",
        content:""
    });
    const getData =async () => {
        const response = await postService.getpostdetail(props.value.id);
        setData(response);
        console.log(response);
        console.log("데이터 확인")
    }
    useEffect(() => { getData(); }, []);

    return (
        <div>
            <h2>{data.targetDate}</h2>
            <div class="postpage_container">
                <nav>
                    <div class="postpoage_picture">기념일 사진</div>
                    <ul class="postpage">
                        <li class="postpage_name tape2"> {/* <!--tape는 1~5까지 종류 있음(tape1, tape2, tape3, tape4, tape5)-->*/}
                            {data.title}
                        </li>
                        <li class="postpage_des">
                        <div>
                            {data.content}
                        </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default PostContainer;
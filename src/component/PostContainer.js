import React from 'react';
import '../style/postpage.css';
//import useAsync from 'react-async'

const PostContainer = (props) => {
    console.log(props);

    return (
        <div>
            <h2>{props.value.targetDate}</h2>
            <div class="postpage_container">
                <nav>
                    <div class="postpoage_picture">기념일 사진</div>
                    <ul class="postpage">
                        <li class="postpage_name tape2"> {/* <!--tape는 1~5까지 종류 있음(tape1, tape2, tape3, tape4, tape5)-->*/}
                            {props.value.title}
                        </li>
                        <li class="postpage_des">
                        <p>
                            {props.value.content}
                        </p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default PostContainer;
import React from 'react';
import '../style/postpage.css';

const PostContainer = () => {
    return (
        <div>
            <h2 >22.05.19</h2>
            <div class="postpage_container">
                <nav>
                    <div class="postpoage_picture">기념일 사진</div>
                    <ul class="postpage">
                        <li class="postpage_name tape2"> {/* <!--tape는 1~5까지 종류 있음(tape1, tape2, tape3, tape4, tape5)-->*/}
                        데이프린트 생일
                        </li>
                        <li class="postpage_des">
                        <p>글자는이십글자까지만글자는이십글자까지만</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
  }
  
  export default PostContainer;
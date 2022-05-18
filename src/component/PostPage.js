import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/postpage.css';
import Header from './Header';
import PostContainer from './PostContainer';
import commentService from '../service/comment.service';
import PostComs from './PostComs';
import postService from '../service/post.service';

const PostPage = () => {
    const params = useParams();
    const navigator = useNavigate();
    const [comments, setComments] = useState([]);
    const [data, setData] = useState({
        file: "",
        title: "",
        targetDate: "",
        content: ""
    });

    const handleDelete = async () => {
        await postService.deletepost(params.id);
        navigator('/');
    }

    const getComments = async () => {
        console.log(params.id);
        const response = await commentService.getComments(params.id);
        setComments(response);
    }

    const getData = async () => {
        const response = await postService.getpostdetail(params.id);
        setData(response);
        console.log(response);
        console.log("데이터 확인")
    }

    const createComment = () => {
        navigator('/post/comment/' + params.id)
    }

    const handleEdit = () => {
        navigator('/edit/' + params.id)
    }

    const linkCopy = () =>{
        var url = '';
        var textarea = document.createElement("textarea");
        document.body.appendChild(textarea)
        url = window.document.location.href;
        textarea.value = url;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("URL이 복사되었습니다.")
    }

    useEffect(() => { getComments(); getData(); }, [])

    return (
        <body>
            <Header />
            <main>
                <nav class="postmenu">
                    <ul class="pm_list">
                        {localStorage.getItem('user') === 'undefind' || localStorage.getItem('user') === null ? "" :
                            <button onClick={handleEdit}><li class="pm_edit link">수정</li></button>
                        }
                        {localStorage.getItem('user') === 'undefind' || localStorage.getItem('user') === null ? "" :
                            <button onClick={handleDelete}><li class="pm_del link">삭제</li></button>
                        }
                    </ul>
                </nav>
                <div class="border1">
                    <div class="border2">
                        <PostContainer value={data} />
                        <button onClick={linkCopy}>링크 복사하기</button>
                        <div class="postpage_coms">
                            <nav>
                                <div class="com_board">
                                    comment board
                                </div>
                                <ul class="com_container">
                                    {comments.map(o => <PostComs data={o} key={o.id} date={data.targetDate} />)}
                                    <a><button onClick={createComment}><li>
                                        <p class="com_bullet"><i class="fa-solid fa-thumbtack"></i>0</p>
                                        <div class="com_text">
                                            추가하기
                                        </div>
                                    </li></button></a>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
            </footer>
        </body>
    )
}

export default PostPage;
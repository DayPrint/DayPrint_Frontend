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
    const handleDelete = async () => {
        await postService.deletepost(params.id);
        navigator('/');
    }
    const [comments, setComments] = useState([]);
    const getComments = async () => {
        console.log(params.id);
        const response = await commentService.getComments(params.id);
        setComments(response);
    }

    const createComment = () => {
        navigator('/post/comment/'+ + params.id )
    }

    useEffect(() => { getComments(); }, [])

    return (
        <body>
            <Header />
            <main>
                <nav class="postmenu">
                    <ul class="pm_list">
                        <a href=''><li class="pm_edit link">수정</li></a>
                        <button onClick={handleDelete}><li class="pm_del link">삭제</li></button>
                    </ul>
                </nav>
                <div class="border1">
                    <div class="border2">
                        <PostContainer value={params} />
                        <div class="postpage_coms">
                            <nav>
                                <div class="com_board">
                                    comment board
                                </div>
                                <ul class="com_container">
                                    {comments.map(o => <PostComs data={o} key={o.id} />)}
                                    <a onClick={createComment}>
                                    <li>
                                        <p class="com_bullet"><i class="fa-solid fa-thumbtack"></i>0</p>
                                        <div class="com_text">
                                            추가하기
                                        </div>
                                    </li></a>
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
import React from 'react';
import '../style/postpage.css';
import Header from './Header';
import PostComs from './PostComs';
import PostContainer from './PostContainer';
import { useNavigate, useParams } from 'react-router-dom';
import postdetailService from '../service/postdetail.service';

const PostPage = () => {
    const navigator = useNavigate();
    let params = useParams();
    
    const handledelete= () =>{
        postdetailService.deletepost(params);
        navigator("/");
    }

  return (
    <body>
        <Header />
        <main>
            <nav class="postmenu">
                <ul class="pm_list">
                    <a href=''><li class="pm_edit link">수정</li></a>
                    <button onClick={handledelete}><li class="pm_del link">삭제</li></button>
                </ul>
            </nav>
            <div class="border1">
                <div class="border2">
                    <PostContainer />
                  <div class="postpage_coms">
                      <nav>
                          <div class="com_board">
                              comment board
                          </div>
                          <ul class="com_container">
                              <PostComs />
                              <PostComs />
                              <PostComs />
                              <PostComs />
                              <PostComs />
                              <PostComs />
                              <PostComs />
                              <PostComs />
                              <PostComs />
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

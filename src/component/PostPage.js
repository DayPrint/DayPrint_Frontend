import React from 'react';
import '../style/postpage.css';
import Header from './Header';
import PostComs from './PostComs';
import PostContainer from './PostContainer';
import Context from '../Context'

const PostPage = ({data}) => {

  return (
      <Context.Provider value={data}>
    <body>
        <Header />
        <main>
            <nav class="postmenu">
                <ul class="pm_list">
                    <a href=''><li class="pm_edit link">수정</li></a>
                    <a href=''><li class="pm_del link">삭제</li></a>
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
  </Context.Provider>
  )
}

export default PostPage;

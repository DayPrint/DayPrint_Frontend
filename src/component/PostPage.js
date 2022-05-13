import React from 'react';
import '../style/postpage.css';
import Header from './Header';
import PostComs from './PostComs';
import PostContainer from './PostContainer';
import FooterLogo from './FooterLogo';

const PostPage = () => {
  return (
    <body>
        <Header />
        <main>
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
        <FooterLogo/>
      </footer>
  </body>
  )
}

export default PostPage;

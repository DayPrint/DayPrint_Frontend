import React from 'react';
import '../style/postpage.css';
import Header from './Header';
import plus_btn from "../style/images/plus-solid.svg";

const PostPage = () => {

  return (
    <body>
      <Header />
      <main>
          <div class="border1">
              <div class="border2">
                  <h2>22.05.19</h2>
                  <div class="postpage_container">
                      <nav>
                          <div class="postpoage_picture">
                              기념일 사진
                          </div>
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
                  <div class="postpage_coms">
                      <nav>
                          <div class="com_board">
                              comment board
                          </div>
                          <ul class="com_container">
                              <a href="">
                                  <li>
                                      <p class="com_bullet"><i class="fa-solid fa-thumbtack"></i>0</p>
                                      <div class="com_text">
                                          닉네임
                                      </div>
                                  </li>
                              </a>
                              <a href="">
                                  <li>
                                      <p class="com_bullet"><i class="fa-solid fa-thumbtack"></i>0</p>
                                      <div class="com_text">
                                          닉네임
                                      </div>
                                  </li>
                              </a>
                              <a href="">
                                  <li>
                                      <p class="com_bullet"><i class="fa-solid fa-thumbtack"></i>0</p>
                                      <div class="com_text">
                                          닉네임
                                      </div>
                                  </li>
                              </a>
                              <a href="">
                                  <li>
                                      <p class="com_bullet"><i class="fa-solid fa-thumbtack"></i>0</p>
                                      <div class="com_text">
                                          닉네임
                                      </div>
                                  </li>
                              </a>
                              <a href="">
                                  <li>
                                      <p class="com_bullet"><i class="fa-solid fa-thumbtack"></i>0</p>
                                      <div class="com_text">
                                          닉네임
                                      </div>
                                  </li>
                              </a>
                              <a href="">
                                  <li>
                                      <p class="com_bullet"><i class="fa-solid fa-thumbtack"></i>0</p>
                                      <div class="com_text">
                                          닉네임
                                      </div>
                                  </li>
                              </a>
                              <a href="">
                                  <li>
                                      <p class="com_bullet"><i class="fa-solid fa-thumbtack"></i>0</p>
                                      <div class="com_text">
                                          닉네임
                                      </div>
                                  </li>
                              </a>
                              <a href="">
                                  <li>
                                      <p class="com_bullet"><i class="fa-solid fa-thumbtack"></i>0</p>
                                      <div class="com_text">
                                          닉네임
                                      </div>
                                  </li>
                              </a>
                              <a href="">
                                  <li>
                                      <p class="com_bullet"><i class="fa-solid fa-thumbtack"></i>0</p>
                                      <div class="com_text">
                                          닉네임
                                      </div>
                                  </li>
                              </a>
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

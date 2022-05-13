import React, { useEffect, useState } from 'react';
import '../style/postpage.css';
import Header from './Header';
import plus_btn from "../style/images/plus-solid.svg";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostPage = () => {

    let {postId} = useParams();
    const [list, setlist] = useState([]);
    const loadData= ()=> {
        try{
            console.log("loaddata 실행")
            axios.get("/api/comment/"+ postId ,{
                headers:{
                    Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJ1c2VyUGsiOiJzdHJpbmciLCJpYXQiOjE2NTI0MTcwMDYsImV4cCI6MTY1MjQxODgwNn0.tCkeJxfbZqgrGAYC-AaVAPEJ5OkGXS7IrXwqa31KqPc",
                },
            }
            )
            .then((res) => {
                res.data.map((cur) => {
                    setlist(prev => [...prev, cur]);
                    console.log(cur);
            });
            console.log(list.map((cur)=>{
                console.log(cur);
            }))
        })
        } catch(error){
            console.log("loadData 오류");
            console.log(error);
        }
        return;
    };

    useEffect(()=>{
        loadData();
    }, [])


  return (
    <body>
      <Header />
      <main>
          <div className="border1">
              <div className="border2">
                  <h2>22.05.19({list.length})</h2>
                  <div className="postpage_container">
                      <nav>
                          <div className="postpoage_picture">
                              기념일 사진
                          </div>
                          <ul className="postpage">
                              <li className="postpage_name tape2"> {/* <!--tape는 1~5까지 종류 있음(tape1, tape2, tape3, tape4, tape5)-->*/}
                                  데이프린트 생일
                              </li>
                              <li className="postpage_des">
                                  <p>글자는이십글자까지만글자는이십글자까지만</p>
                              </li>
                          </ul>
                      </nav>
                  </div>
                  <div className="postpage_coms">
                      <nav>
                          <div className="com_board">
                              comment board
                          </div>
                          <ul className="com_container">
                              {list.map((cur) => {
                                <a href="">
                                  <li>
                                      <p className="com_bullet"><i className="fa-solid fa-thumbtack"></i>0</p>
                                      <div className="com_text">
                                          {cur.author}
                                      </div>
                                  </li>
                                </a>
                              })}
                              <a href="">
                                  <li>
                                      <p className="com_bullet"><i className="fa-solid fa-thumbtack"></i>0</p>
                                      <div className="com_text">
                                          닉네임
                                      </div>
                                  </li>
                              </a>
                              <a href="">
                                  <li>
                                      <p className="com_bullet"><i className="fa-solid fa-thumbtack"></i>0</p>
                                      <div className="com_text">
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

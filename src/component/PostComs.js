import React from 'react';
import '../style/postpage.css';

const PostComs = ({datum}) => {
    return (
        <a href="">
            <li>
                <p class="com_bullet"><i class="fa-solid fa-thumbtack"></i>0</p>
                <div class="com_text">
                    {datum.postTitle}
                </div>
            </li>
        </a>
    )
  }
const DisplayComments=({data})=>{
    console.log(data);
    return data.map((cur, index) => (<PostComs datum={cur} key={cur.id} />));
}
  export default PostComs;
import React, { useState } from 'react';
import '../style/postpage.css';

const PostComs = (data) => {
    console.log(data);    
    return (
        <a href="">
            <li>
                <p class="com_bullet"><i class="fa-solid fa-thumbtack"></i>0</p>
                <div class="com_text">
                    {data.data.author}   
                </div>
            </li>
        </a>
    )
}
  
export default PostComs;
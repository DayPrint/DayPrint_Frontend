import React, { useState } from 'react';
import '../style/postpage.css';
import Swal from 'sweetalert2';


const PostComs = (data) => {
    console.log(data);
    const alarm=()=>{
        alert("작성자 : "+data.data.author+"\n메시지 : "+data.data.text);
        // Swal.fire({
        //     title:"작성자 : " + data.data.author,
        //     text:"메시지 : "+ data.data.text,
        //     icon:"info"
        // })
    }    
    return (
        <a href="" >
            <li onClick={alarm}>
                <p class="com_bullet"><i class="fa-solid fa-thumbtack"></i>0</p>
                <div class="com_text">
                    {data.data.author}   
                </div>
            </li>
        </a>
    )
}

  
export default PostComs;
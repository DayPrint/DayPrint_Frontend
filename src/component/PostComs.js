import React, { useState } from 'react';
import '../style/postpage.css';
import Swal from 'sweetalert2';


const PostComs = (data) => {
    console.log(data);

    const Toast = Swal.mixin({
        toast:true,
        position:'center-center',
        showConfirmButton:false,
        timer:3000,
        timerProgressBar:true,
        width: '65%',
        didOpen: (toast) =>{
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    const alarm= async ()=>{
        await Toast.fire({
            icon:'success',
            title:"작성자 : "+data.data.author+"\n메시지 : "+data.data.text 
        })
        // alert("작성자 : "+data.data.author+"\n메시지 : "+data.data.text);
        // Swal.fire({
        //     title:"작성자 : " + data.data.author,
        //     text:"메시지 : "+ data.data.text,
        //     icon:"info"
        // })
        return false;
    }    
    return (
        <a>
            <button onClick={alarm}>
                <p class="com_bullet"><i class="fa-solid fa-thumbtack"></i>0</p>
                <div class="com_text">
                    {data.data.author}   
                </div>
            </button>
        </a>
    )
}

  
export default PostComs;
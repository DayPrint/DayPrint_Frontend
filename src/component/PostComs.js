import React, { useState } from 'react';
import '../style/postpage.css';
import Swal from 'sweetalert2';


const PostComs = (data) => {
    console.log("coms data ");
    console.log(data);
    const date = new Date();

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const cur = year + "-" + month + "-" + day;

    console.log("cur date ");
    console.log(cur);
    const Toast = Swal.mixin({
        toast: true,
        position: 'center-center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        width: '65%',
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const alarm = async () => {
        if (cur < data.date) {
            await Toast.fire({
                icon: 'error',
                title: "아직 (" + data.data.author + ") 의 메세지를 볼 수 없어요."
            })
        }
        else {
            await Toast.fire({
                icon: 'success',
                title: "작성자 : " + data.data.author + "\n메시지 : " + data.data.text
            })
        }
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
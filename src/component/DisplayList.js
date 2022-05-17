import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailPostData } from '../Context';

const DisplayPost = ({datum}) => {
    let navigator=useNavigate();
    const goToPost=()=>{
        navigate
    }
    return <div key={datum.id}><a href={"http://3.36.98.223:8080/api/postdetail/"+datum.id}>{datum.title}</a></div>
    );
};
const DisplayList=({data})=>{
    return data.map((cur, index) => (<DisplayPost datum={cur} key={cur.id} />));
}

export default DisplayList;
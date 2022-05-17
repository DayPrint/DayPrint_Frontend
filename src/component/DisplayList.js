import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayPost = ({datum}) => {
    let navigator=useNavigate();
    const goToPost=()=>{
        navigator("/post/"+datum.id);
    }
    return <div key={datum.id}><a onClick={goToPost}>{datum.title}</a></div>;
};
const DisplayList=({data})=>{
    return data.map((cur, index) => (<DisplayPost datum={cur} key={cur.id} />));
}

export default DisplayList;
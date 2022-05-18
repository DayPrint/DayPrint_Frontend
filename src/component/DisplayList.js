import React from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayPost = ({datum}) => {
    let navigator=useNavigate();
    const goToPost=()=>{
        navigator("/post/"+datum.id);
    }
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return <div key={datum.id}><a onClick={goToPost}>{datum.title}</a></div>;
};
const DisplayList=({data})=>{
    console.log(data);
    return data.map((cur, index) => (<DisplayPost datum={cur} key={cur.id} />));
}

export default DisplayList;
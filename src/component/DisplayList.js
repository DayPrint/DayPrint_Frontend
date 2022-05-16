import React from 'react';

const DisplayPost = ({datum}) => {
    return <div key={datum.id}><a href={"http://3.36.98.223:8080/api/postdetail/"+datum.id}>{datum.title}</a></div>;
};
const DisplayList=({data})=>{
    console.log("list"+data);
    return <div className="MyWorkplace">{data.map((cur, index) => (<DisplayPost datum={cur} key={cur.id} />))}</div>;
}

export default DisplayList;
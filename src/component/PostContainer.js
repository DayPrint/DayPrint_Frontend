import React from 'react';
import { useState, useEffect } from 'react';
import postService from '../service/post.service';
import '../style/postpage.css';
//import useAsync from 'react-async'

const PostContainer = ({value}) => {
    const [data, setData] = useState({
        targetDate:"",
        title:"",
        content:""
    });
    const [error,setError]=useState();
    const getData = async () => {
        try {
            const response = await postService.getpostdetail(value.id);
            console.log(response);
            setData(response);
        } catch (e) {
            setError(e);
        }
    }
    useEffect(() => { getData(); }, []);
    // const { postdata, error, isLoading } = useAync({
    //     promiseFn: getData
    // })
    // if (isLoading) return "Loading"
    // if (error) return "error occured"
    // if (data)
    return (
        <div>
            <h2>{data.targetDate}</h2>
            <div class="postpage_container">
                <nav>
                    <div class="postpoage_picture">기념일 사진</div>
                    <ul class="postpage">
                        <li class="postpage_name tape2"> {/* <!--tape는 1~5까지 종류 있음(tape1, tape2, tape3, tape4, tape5)-->*/}
                            {data.title}
                        </li>
                        <li class="postpage_des">
                            <p>{data.content}</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default PostContainer;
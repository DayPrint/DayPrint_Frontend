import axios from "axios";
import '../style/header.css';

const API_URL = "http://127.0.0.1:8080/api/post/";

class PostService{
    addpost(inputs){
        console.log("post start");
        console.log(inputs);
        const user=JSON.parse(localStorage.getItem('user'));
        console.log(user);
        axios.post(API_URL+user.id,{
            data:{
                imageUrl:inputs.file,
                postContent:inputs.explanation,
                targetDate:inputs.date,
                title:inputs.title,
                userId:user.id
            },
            headers:{
                Authorization:user.jwtToken,
            }
        }).then((res)=>console.log(res));
    }
}

export default new PostService();
import axios from "axios";
import '../style/header.css';

const API_URL = "http://3.36.98.223:8080/post/";

class PostService{
    addpost(inputs){
        const user=JSON.parse(localStorage.getItem('user'));
        return axios.post(API_URL+user.id,{
            imageUrl:inputs.file,
            //theme:,
            postcontent:inputs.explanation,
            targetDate:inputs.date,
            title:inputs.title,
            userId:user.id,
            headers:{
                Authorization:user.jwtToken
            }
        }).then((res)=>console.log(res))
    }
}

export default new PostService();
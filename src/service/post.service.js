import axios from "axios";
import '../style/header.css';

const API_URL = "http://3.36.98.223:8080/api/post/";

class PostService{
    addpost(inputs){
        console.log("post start");
        console.log(inputs);
        const user=JSON.parse(localStorage.getItem('user'));
        console.log(user);
        axios.post(API_URL+user.id,{
            headers:{
                "Access-Control-Allow-Origin":"*",
                "Access-Control-Allow-Methods": ["GET", "POST", "PUT", "DELETE"],
                "Access-Control-Allow-Headers": ["Authorization", "Content-Type", "X-Auth-Token", "Origin"],
                "Authorization":user.jwtToken
            }
        }).then((res)=>console.log(res)).catch(e => console.log(e));
    }
}

export default new PostService();
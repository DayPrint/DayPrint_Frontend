import axios from "axios";
import { useReducer } from "react";

//const API_URL = "http://3.36.98.223:8080/api/post/";
const API_URL="http://localhost:8080/api/post/";

class PostService{
    addpost(inputs){
        
        const user=JSON.parse(localStorage.getItem('user'));
        if (user && user.jwtToken) {
            console.log(user.jwtToken);
            const data={
                imageUrl:inputs.file,
                //theme:,
                postcontent:inputs.explanation,
                targetDate:inputs.date,
                title:inputs.title,
                userId:user.id
            }
            return axios.post(API_URL+user.id,data,{
                'Authorization':user.jwtToken
            }).then((res)=>console.log(res)).catch(error=>console.log(error.response));
        }else{
            console.log('no user login plz');
        }
    }
    getpost(inputs){
        const user=JSON.parse(localStorage.getItem('user'));
        if (user && user.jwtToken) {
            return axios.get(API_URL+user.id,{
                headers:{
                    Authorization:user.jwtToken,
                }
            }).then((res)=>console.log(res.data)).catch(er=>console.log(er.response));
        }
    }
}

export default new PostService();
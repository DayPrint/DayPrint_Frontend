import axios from "axios";

const API_URL = "http://3.36.98.223:8080/post/";

class PostService{
    tempUser(){
        localStorage.setItem('user',JSON.stringify({
            "id": 1,
            "jwtToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJ1c2VyUGsiOiJzdHJpbmciLCJpYXQiOjE2NTI0MjQxNTYsImV4cCI6MTY1MjQyNTk1Nn0.pGzDFN6j8c_-KaC5Y7cH8jWklZOPNy7cYXz-jPAZVWc"
        }))
    }
    addpost(inputs){
        const user=JSON.parse(localStorage.getItem('user'));
        return axios.post(API_URL+user.id,{
            imageUrl:inputs.file,
            //theme:,
            postcontent:inputs.explanation,
            targetDate:inputs.date,
            title:inputs.title,
            userId:user.id
        }).then((res)=>console.log(res))
    }
}

export default new PostService();
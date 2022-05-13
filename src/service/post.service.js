import axios from "axios";

const API_URL = "http://3.36.98.223:8080/api/post/";

class PostService{
    addpost(inputs){
        const user=JSON.parse(localStorage.getItem('user'));
        const data={
            imageUrl:inputs.file,
            //theme:,
            postcontent:inputs.explanation,
            targetDate:inputs.date,
            title:inputs.title,
            userId:user.id
        }
        return axios.post(API_URL+user.id,data,{
            Authorization:user.jwtToken
        }).then((res)=>console.log(res))
    }
}

export default new PostService();
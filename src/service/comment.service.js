import axios from "axios";
import { useNavigate } from "react-router-dom";
import authService from "./auth.service";
import ApiError from "../component/ApiError";

const API_URL="http://3.36.98.223:8080/api/comment/"

class CommentService{
    getComments(postID){
        const user = authService.getCurrentUser();
        if(user&&user.jwtToken){
            return axios({
                method: 'get',
                url: API_URL+postID,
                headers: {
                    Authorization: user.jwtToken
                },
            })
            .then((res) =>{ return res.data })
            .catch(error => {
                console.log(error.response)
                return <ApiError />;
            });
        }
        else{
            return <ApiError />;
        }
    }

    addComment(inputs) {
        const user = authService.getCurrentUser();
        const data = {
            "author": inputs.author,
            "text": inputs.text
        }
        return axios({
            method: 'post',
            url: API_URL +inputs.postId,
            data: data,
            headers: {
                Authorization: user.jwtToken
            },
        })
        .then((res) => console.log(res))
        .catch(error => {
            console.log(error.response)
            return <ApiError />;
        });
    }
}
export default new CommentService();
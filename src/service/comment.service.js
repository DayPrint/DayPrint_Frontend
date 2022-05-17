import axios from "axios";
import authService from "./auth.service";

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
            .catch(error => console.log(error.response));
        }
    }
}
export default new CommentService();
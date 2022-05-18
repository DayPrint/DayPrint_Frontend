import axios from "axios";
import ApiError from "../component/ApiError";

const API_URL = "http://3.36.98.223:8080/api/comment/"

class CommentService {
    getComments(postID) {
        return axios({
            method: 'get',
            url: API_URL + postID,
        })
            .then((res) => { return res.data })
            .catch(error => {
                console.log(error.response)
                return <ApiError />;
            });
    }

    addComment(inputs) {
        const data = {
            "author": inputs.author,
            "text": inputs.text
        }
        return axios({
            method: 'post',
            url: API_URL + inputs.postId,
            data: data,
        })
            .then((res) => console.log(res))
            .catch(error => {
                console.log(error.response)
                return <ApiError />;
            });
    }
}
export default new CommentService();
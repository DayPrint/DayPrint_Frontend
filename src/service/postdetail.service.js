import axios from "axios";


const API_URL = "http://3.36.98.223:8080/api/postdetail/";


class PostDetailService {
    deletepost(postId) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.jwtToken) {
            console.log("user exists")
            return axios({
                method: 'delete',
                url: API_URL + postId,
                headers: {
                    Authorization: user.jwtToken
                }
            }).then((res) =>{
                console.log(res.data);
                return res.data;
            })
            .catch(error => console.log(error));
        }
    }
}

export default new PostDetailService();
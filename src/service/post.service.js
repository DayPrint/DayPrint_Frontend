import axios from "axios";
import ApiError from "../component/ApiError";


const API_URL = "http://3.36.98.223:8080/";

class PostService {
    addpost(inputs) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.jwtToken) {
            console.log(user.jwtToken);
            const data = {
                imageUrl: inputs.file,
                //theme:,
                postContent: inputs.explanation,
                targetDate: inputs.date,
                title: inputs.title,
                userId: user.id
            }
            return axios({
                method: 'post',
                url: API_URL + "api/post/"+user.id,
                headers: {
                    Authorization: user.jwtToken
                },
                data: data,
            })
            .then((res) => console.log(res))
            .catch(error => {
                console.log(error.response)
                return <ApiError />;
            });
        } else {
            console.log('no user login plz');
            return <ApiError />
        }
    }

    getpost() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.jwtToken) {
            console.log("user exists")
            return axios({
                method: 'get',
                url: API_URL +"api/post/"+ user.id,
                headers: {
                    Authorization: user.jwtToken
                }

            })
            .then((res) =>{
                console.log(res.data);
                return res.data;
            })
            .catch(error => {
                console.log(error)
                return <ApiError />;
            });
        }
        else{
            return <ApiError />;
        }
    }


    getpostdetail(postID){
        const user = JSON.parse(localStorage.getItem('user'));
        if(user&&user.jwtToken){
            return axios({
                method:'get',
                url:API_URL+"api/postdetail/"+postID,
                headers:{
                    Authorization:user.jwtToken
                }
            })
            .then((res)=>{return res.data;})
            .catch(e=>{
                console.log(e)
                return <ApiError />;
            });
        }
        else{
            return <ApiError />;
        }
    }

    deletepost(postId) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.jwtToken) {
            console.log("user exists")
            return axios({
                method: 'delete',
                url: API_URL + "api/postdetail/" + postId,
                headers: {
                    Authorization: user.jwtToken
                }
            })
            .then((res) =>{
                console.log(res.data);
                return res.data;
            })
            .catch(error => {
                console.log(error);
                return <ApiError />;
            });
        }
        else {
            return <ApiError />;
        }
    }

    updatePost(inputs){
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.jwtToken) {
            console.log(user.jwtToken);
            const data = {
                imageUrl: inputs.file,
                //theme:,
                postContent: inputs.explanation,
                targetDate: inputs.date,
                title: inputs.title,
                userId: user.id
            }
            return axios({
                method: 'put',
                url: API_URL + "api/postdetail/"+inputs.postId,
                headers: {
                    Authorization: user.jwtToken
                },
                data: data,
            })
            .then((res) => console.log(res))
            .catch(error => console.log(error.response));
        } else {
            console.log('no user login plz');
            return <ApiError />;
        }
    }
}

export default new PostService();
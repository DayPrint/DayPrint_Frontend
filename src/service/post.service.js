import axios from "axios";
import React, { useState } from "react";


const API_URL = "http://3.36.98.223:8080/api/post/";

class PostService {
<<<<<<< HEAD
    addpost(inputs) {
=======
    constructor(data){
        this.data=data;
    }
>>>>>>> 943cd5d8474deca6c92bad411210b395c3b9d8cf

    addpost(inputs) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.jwtToken) {
            console.log(user.jwtToken);
            const data = {
                imageUrl: inputs.file,
                //theme:,
                postcontent: inputs.explanation,
                targetDate: inputs.date,
                title: inputs.title,
                userId: user.id
            }
            return axios({
                method: 'post',
                url: API_URL + user.id,
                headers: {
                    Authorization: user.jwtToken
                },
                data: data,
            }).then((res) => console.log(res)).catch(error => console.log(error.response));
        } else {
            console.log('no user login plz');
        }
    }

    getpost() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.jwtToken) {
            console.log("user exists")
            return axios({
                method: 'get',
                url: API_URL + user.id,
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

export default new PostService();
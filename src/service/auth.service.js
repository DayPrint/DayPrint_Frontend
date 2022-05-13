import axios from "axios";

const API_URL = "http://3.36.98.223:8080/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password
      })
      .then(response => {
        console.log("login 응답데이터 헤더" + JSON.stringify(response));
        let user = {};
        if(response.headers['access-token']) {
          user = response.data;
          user.accessToken = response.headers['access-token'];
          localStorage.setItem("user", JSON.stringify(user));
        }
        return user;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(inputs) {
    return axios.post(API_URL + "join", {
      email:inputs.id,
    //   imageUrl,
      name:inputs.username,
      password:inputs.passwd1,
      phone:inputs.phone
    }).then((res)=>console.log(res));
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
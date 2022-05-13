import axios from "axios";

const API_URL = "http://3.36.98.223:8080/";

class AuthService {
  login(username, password) {
    console.log(username, password);
    return axios
      .post(API_URL + "login", {
        "email":username,
        "password":password
      })
      .then(response => {
        console.log("login 응답데이터 헤더" + JSON.stringify(response));
        if(response) {
          console.log(response);
          localStorage.setItem("user", JSON.stringify(response.data.result));
        }
        return response;
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
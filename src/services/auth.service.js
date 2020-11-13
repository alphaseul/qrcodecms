import axios from "axios";

const API_URL = 'http://82.165.184.180:1337/auth/local';



class AuthService {
  login(email, password) {
    return axios
      .post(API_URL, {
          "identifier": email,
          "password": password,
      })
      .then((response) => {
        console.log(response.data.jwt)
        if (response.data.jwt) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("jwt", JSON.stringify(response.data.jwt));
        }
        return response;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
  }

  register(username, email, password) {
    return axios.post(API_URL, {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
import axios from "axios";

const API_URL = 'http://82.165.184.180:1337/';



class AuthService {
  login(email, password) {
    return axios
      .post(API_URL+'auth/local', {
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
    return axios.post(API_URL+'users', {

      "username":  username,
      "email" :  email,
      "password":  password,
      "confirmed": true,
      "role": {
          "id": 1,
          "name": "Authenticated",
          "description": "Default role given to authenticated user.",
          "type": "authenticated"
      }
    });
  }
}

export default new AuthService(); 
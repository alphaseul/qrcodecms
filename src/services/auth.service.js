import axios from "axios";
import { Amplify, API } from "aws-amplify";
import awsmobile from "../aws-exports";

const API_URL = "/";
Amplify.configure(awsmobile);

class AuthService {
  async login(email, password) {
    return await API.post("User", "/users", {
      body: {
        identifier: email,
        password: password,
      },
    }).then((response) => {
      if (response.jwt) {
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("jwt", JSON.stringify(response.jwt));
      }
      return response;
    });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
  }

  register(username, email, password) {
    return axios.post(API_URL + "users", {
      username: username,
      email: email,
      password: password,
      confirmed: true,
      role: {
        id: 1,
        name: "Authenticated",
        description: "Default role given to authenticated user.",
        type: "authenticated",
      },
    });
  }
}

export default new AuthService();

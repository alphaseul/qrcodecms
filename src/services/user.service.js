import axios from "axios";
import authHeader from "./auth-header";
const sendmail = require("@sendgrid/mail");
const apiKey =
  "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";
sendmail.setApiKey(apiKey);

const API_URL = "http://82.165.184.180:1337/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "entreprises", { headers: authHeader() });
  }

  getUserBoard() {
    return axios.get(API_URL + "clients", { headers: authHeader() });
  }

  getAnnonce() {
    return axios.get(API_URL + "annonces", { headers: authHeader() });
  }
  getClients() {
    return axios.get(API_URL + "clients", { headers: authHeader() });
  }
  postAnnonce(title, description, price) {
    return axios.post(API_URL + "annonces", {
      //data: {
      nom: title,
      description: description,
      prix: price,
      //},
      //headers: authHeader(),
      //},
    });
  }
  sendmail(msg) {
    sendmail.send(msg).then(
      () => {},
      (error) => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    );
  }
}

export default new UserService();

import axios from 'axios';
import authHeader from './auth-header';


const API_URL = 'http://82.165.184.180:1337/';

class UserService{
    getPublicContent(){
        return axios.get(API_URL + 'entreprises');
    }
   
    getUserBoard() {
        return axios.get(API_URL + 'clients', { headers: authHeader() });
      }
}

export default new UserService();
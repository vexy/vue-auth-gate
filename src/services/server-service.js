import axios from 'axios';
import AuthHeader from './auth-header';

const API_URL = 'http://localhost:5000/';  //get base stats
const PROTECTED1 = API_URL + 'protected';
const PROTECTED2 = API_URL + 'protected2';

class ServerService {
  getServerDump() {
    return axios.get(API_URL);
  }

  getProtected() {
    let fullURL = AuthHeader.setupProtectedAccessHeader(PROTECTED1)
    return axios.get(fullURL);
  }

  getProtected2() {
    let fullURL = AuthHeader.setupProtectedAccessHeader(PROTECTED2)
    return axios.get(fullURL);
  }
}

export default new ServerService();

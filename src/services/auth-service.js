import axios from 'axios';
import authHeader from './auth-header';

//127.0.0.1:5000
const API_URL = 'http://localhost:5000/';

class AuthService {
  login(user) {
    let fullPath = API_URL + 'login'
    console.log("<AuthServeice:login>Logging in with this user: " + user.username)
    return axios.post(fullPath, {}, {
        auth: {
          username: user.username,
          password: user.password
      }}).then( response => {
        let newToken = response.data['token']
        console.log("<AuthServeice:login>Token: " + response.data['token'])
        console.log("<AuthServeice:login>Login headers: " + response.status)
        return newToken;
      });
  }

  logout() {
    localStorage.removeItem('user');
    // redirect to some page ?
  }

  register(user) {
    console.log("<AuthService> Registering new user:" + user.username)
    return axios.post(API_URL + 'register', {
      username: user.username,
      password: user.password,
      email: user.email,
    });
  }
}

export default new AuthService();

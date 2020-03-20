import axios from 'axios';

//127.0.0.1:5000
const API_URL   = 'http://localhost:5000/';
const LOGIN     = API_URL + 'login'
const REGISTER  = API_URL + 'register'

class AuthService {
  login(user) {
    console.log("<AuthService:login> Logging in...")
    return axios.post(LOGIN, {}, {
        auth: {
          username: user.username,
          password: user.password
      }}).then( response => {
        let returnData = {
          'token': response.data.token,
          'user': user
        }
        return returnData;
      });
  }

  logout() {
    //do any API logout here
  }

  register(user) {
    console.log("<AuthService:register> Registering...")
    return axios.post(REGISTER + 'register', {
      username: user.username,
      password: user.password,
      email: user.email,
    });
  }
}

export default new AuthService();

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  login(user) {
    console.log("Checking fixed input <AUTH SERVICE>");
    if( user.email == "t@t.co" && user.password == "test") {
      console.log("Test account passed...")
      return { data: 'someTOKEN-HARDCODED-instead-of-response' };
    } else {
      return axios
        .post(API_URL + 'signin', {
          username: user.username,
          password: user.password
        })
        .then(response => {
          console.log("<AuthService> response returned: " + response)
          if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
          }

          return response.data;
        });
    }
  }

  logout() {
    localStorage.removeItem('user');
    // redirect to some page ?
  }

  register(user) {
    console.log("About to register user <AUTH SERVICE>")
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();

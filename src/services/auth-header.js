
const token = localStorage.getItem('accessToken');

class AuthHeader {
  setupLoginHeader() {
    let basicAuth = 'Basic ' + btoa(user.username + ':' + user.password);
    console.log("<HEADER> This is header:"); console.log(basicAuth);
    return {
      headers: {'Authorization': basicAuth }
    };
  }

  setupProtectedAccessHeader(url) {
    return url + "?token=" + token;
  }

}

export default new AuthHeader();

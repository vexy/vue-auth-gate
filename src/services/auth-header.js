export default function authHeader(user) {
  let token = JSON.parse(localStorage.getItem('user'));

  // construct
  if (user && user.accessToken) {
    // Authorization based on HTTP header
    const options = {
      headers: {'X-Custom-Header': 'value'}
    };
    let basicAuth = 'Basic ' + btoa(user.username + ':' + user.password);
    console.log("<HEADER> This is header: " + basicAuth)
    return {
      headers: {'Authorization': basicAuth }
    };
  } else {
    return {};
  }
}

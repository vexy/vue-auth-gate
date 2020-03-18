import AuthService from '../services/auth-service';

const token = localStorage.getItem('user');
const initialState = token
  ? { status: { loggedIn: true }, token, user: null }
  : { status: { loggedIn: false }, token: null, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      console.log("<AuthMODULE> About to Login, user: " + user.username);
      return AuthService.login(user).then(
        token => {
          console.log("<AuthMODULE> Response we have " + token);
          commit('loginSuccess', token, user);
          return Promise.resolve(token);
        },
        error => {
          console.log("<AuthMODULE> Error");
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        response => {
          console.log("<AuthModule> Register SUCCESS with: " + response.data);
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          console.log("<AuthModule> Register ERROR with: " + error);
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    loginSuccess(state, newToken, newUser) {
      console.log("<AuthModule:commit> Token " + newToken + ".. User: " + newUser)
      state.status.loggedIn = true;
      state.token = newToken;
      state.user = newUser
      localStorage.user = newToken
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.token = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.token = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
};

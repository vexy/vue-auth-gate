import AuthService from '../services/auth-service';

const token = localStorage.getItem('accessToken');
const usr = localStorage.getItem('username');
const initialState = token
  ? { loggedIn: true, token, username: usr }
  : { loggedIn: false, token: null, username: '' };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        dataSet => {
          commit('loginSuccess', dataSet);
          return Promise.resolve(dataSet);
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
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    loginSuccess(state, objects) {
      state.loggedIn = true;
      state.token = objects.token;
      state.username = objects.user.username;
      localStorage.accessToken = objects.token;
      localStorage.username = objects.user.username;
      console.log("<state_commit> loginSuccess: completed !");
    },
    loginFailure(state) {
      state.loggedIn = false;
      state.token = null;
    },
    logout(state) {
      state.loggedIn = false;
      state.token = null;
      state.username = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('username');
      console.log("<state_commit> logout: completed !");
    },
    registerSuccess(state) {
      state.loggedIn = false;
      state.token = null;
      state.username = null;
      console.log("<state_commit> registerSuccess: completed !");
    },
    registerFailure(state) {
      state.loggedIn = false;
      state.token = null;
      state.username = null;
    }
  }
};

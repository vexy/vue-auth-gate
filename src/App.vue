<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-primary bg-light">
      <router-link to="/server" class="nav-link">
        <font-awesome-icon :icon="['fa', 'server']" class="icon alt"/> Server
      </router-link>

      <div v-if="!loggedIn" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </div>

      <div v-if="loggedIn" class="d-flex p2">
        <router-link to="/protected1" class="nav-link">
          <font-awesome-icon icon="key" /> Protected 1
        </router-link>
        <router-link to="/protected2" class="nav-link">
          <font-awesome-icon icon="key" /> Protected 2
        </router-link>
      </div>

      <div v-if="loggedIn" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>

    </nav>

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },
    username() {
      return this.$store.state.auth.username;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

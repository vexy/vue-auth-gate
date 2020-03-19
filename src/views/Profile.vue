<template>
  <div class="container">
    <header class="jumbotron">
      <h3>Profile data</h3>
      <h4><strong>{{username}}</strong></h4>
    </header>
    <div>
      <span><strong>Access token</strong></span>
      <div> {{token}} </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  computed: {
    username() {
      return this.$store.state.auth.username;
    },
    token() {
      return this.$store.state.auth.token;
    },
    authenticated() {
      console.log("LoggedIN:")
      console.log(this.$store.state.auth.loggedIn);
      return this.$store.state.auth.loggedIn;
    }
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.push('/login');
    }
  }
};
</script>

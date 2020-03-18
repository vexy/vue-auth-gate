<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        Welcome to the system
      </h3>
      <div>
        <span>Your token is</span>
        <p> _token_ </p>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'profile',
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
    token() {
      return this.$store.state.token;
    }
  },
  mounted() {
    console.log("State: " + this.$store.state)
    //if (!this.currentUser) {
      //this.$router.push('/login');
    //}
  }
};
</script>

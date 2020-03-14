<template>
  <div class="container">
    <header class="jumbotron">
      <h1>This is protected page #1</h1>
      <span>
        Your service submitted <strong>token</strong> in the background
      </span>
    </header>
    <div class="card card-container">
      <SharedComponent msg="Passed from Protected1.vue" />
    </div>
    <div class="card card-container">
      <ProtectedDummy />
    </div>
  </div>
</template>

<script>
import SharedComponent from '@/components/SharedComponent';
import ProtectedDummy from '@/components/ProtectedDummy.vue';

export default {
  name: 'protected1',
  components: {
    SharedComponent,
    ProtectedDummy,
  },
  computed: {
    authenticated() {
      return this.$store.state.auth.loggedIn
    }
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.span {
  display: block;
}
</style>

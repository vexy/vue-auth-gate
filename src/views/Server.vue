<template>
  <div class="container">
    <header class="jumbotron jumbotron-fluid padding: 4rem 1rem;">
      <h3>Current server data</h3>
      <p class="lead">Number of registered users: {{content.count}}</p>
    </header>

    <div class="card">
      <div>
        <p class="lead">USERS</p>
      </div>
      <ol>
        <li v-for="user in users">
            <p>USER: <span>{{user}}</span></p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>

import ServerService from '../services/server-service';

export default {
  name: 'server',
  components: {
  },
  data() {
    return {
      content: '',
      users: []
    };
  },
  mounted() {
    ServerService.getServerDump().then(
      response => {
        this.content = response.data;
        this.users = this.content.storage;
      },
      error => {
        this.content = error.toString();
      }
    );
  }
};
</script>

<style scoped>

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
</style>

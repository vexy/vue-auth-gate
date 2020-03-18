<template>
  <div class="container">
    <header class="jumbotron">
      <h3>Runing server data dump</h3>
    </header>
    <div>
      <h4>Total registered users: {{content['count']}}</h4>
      <div>
        <span>Raw content</span>
      </div>
      <ul>
        <li v-for="user in users">
            <p>USER: <span>{{user}}</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UserService from '../services/user-service';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      content: '',
      users: []
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
        this.users = this.content['storage']
      },
      error => {
        this.content = error.toString();
      }
    );
  }
};
</script>

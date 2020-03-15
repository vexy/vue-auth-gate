<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>
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
      content: ''
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content = error.toString();
      }
    );
  }
};
</script>

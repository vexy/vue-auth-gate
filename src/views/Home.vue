<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <span>This is loaded from original Home</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>

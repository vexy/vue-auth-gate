<template>
  <div class="container">
    <p class="row">This is protected dummy component, displaying protected data from API.</p>

    <p class="row"><b>Server response</b></p>
    <div class="card">
      <span>"HOST/protected/"</span>
      <div class="row">{{message1}}</div>
    </div>

    <p class="row"><b>Server response</b></p>
    <div class="card">
      <span>"HOST/protected2/"</span>
      <p class="row">{{message2}}</p>
    </div>
  </div>
</template>

<script>
import ServerService from '@/services/server-service';

export default {
  name: 'ProtectedDummy',
  components: {
    ServerService
  },
  data: function() {
    return {
      message1: '',
      message2: '',
    }
  },
  mounted() {
    //protected rss 1
    ServerService.getProtected().then(
      response => {
        this.message1 = response.data;
      },
      error => {
        this.message1 = error.toString();
      }
    );

    //protected rss 2
    ServerService.getProtected2().then(
      response => {
        this.message2 = response.data;
      },
      error => {
        this.message2 = error.toString();
      }
    );
  }
};
</script>

<style scoped lang="scss">

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

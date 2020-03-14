<template>
  <div class="container">
    <div class="row">
      <h3>This is your <i>shared component</i></h3>
    </div>
    <div class="row">
      <div class="card">
        <p>Message below is passed through your view files</p>
        <span>{{msg}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SharedComponent',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.h3 {
  padding: 10px 0 10px;
  text-align: center !important;
}

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

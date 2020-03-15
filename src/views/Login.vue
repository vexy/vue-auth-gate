<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img id="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" class="profile-img-card"/>

      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <div class="form-group">
            <label>Email</label>
            <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
              <input v-model="email" type="email">
              <div><span>{{ errors[0] }}</span></div>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label>Password</label>
            <ValidationProvider name="Password" rules="required" v-slot="{ errors }">
              <input v-model="password" type="text">
              <div><span>{{ errors[0] }}</span></div>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit">Sign Up</button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>

import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

// No message specified.
extend('email', email);
extend('required', {
  ...required,
  message: 'This field is required'
});

export default {
  name: 'login',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    loading: false,
    email: '',
    password: ''
  }),
  methods: {
    onSubmit () {
      console.log("onSubmit called...");
      this.loading = true;
      alert('Data collected: email=' + this.email + ' , password=' + this.password);
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
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

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.span {
  display: block;
}
</style>

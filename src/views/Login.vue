<template>
  <div class="col-md-12">
    <div class="card card-container">
      <h5>Welcome to System</h5><br>
      <img id="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" class="profile-img-card"/>

      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <div class="form-group">
            <label>Username</label>
            <ValidationProvider name="username" rules="required" v-slot="{ errors }">
              <input v-model="user.username" type="text">
              <div><span>{{ errors[0] }}</span></div>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label>Password</label>
            <ValidationProvider name="Password" rules="required" v-slot="{ errors }">
              <input v-model="user.password" type="text">
              <div><span>{{ errors[0] }}</span></div>
            </ValidationProvider>
          </div>

          <div v-if="errored">
            <p class="alert alert-warning">Wrong login creadentials. Try Again</p>
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit">Login</button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import User from '../models/user';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

// No message specified.    //leftover from email based login
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
    user: new User('', '', ''),
    message: '',
    errored: false,
  }),
  methods: {
    onSubmit () {
      this.errored = false;
      this.$store.dispatch('auth/login', this.user).then(
        (response) => {
            this.errored = false;
            this.$router.push('/profile');
        },
        error => {
            this.errored = true;
            this.message = error.toString();
        }
      );
    }
  }
};
</script>

<style scoped>

.label {
  display: block;
  margin-right: 1rem;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
  text-align: center;
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

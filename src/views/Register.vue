<template>
  <div class="col-md-12">
    <div class="card card-container">
      <h5>Signup. It's easy</h5><br>
      <img id="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" class="profile-img-card"/>

      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(handleRegistration)">
          <div class="form-group">
            <label>Username</label>
            <ValidationProvider name="Username" rules="required" v-slot="{ errors }">
              <input v-model="user.username" type="text">
              <div><span>{{ errors[0] }}</span></div>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label>Email</label>
            <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
              <input v-model="user.email" type="email">
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

          <div class="form-group">
            <label>Confirm Password</label>
            <ValidationProvider name="Password" rules="required" v-slot="{ errors }">
              <input v-model="confirmedPassword" type="text">
              <div><span>{{ errors[0] }}</span></div>
            </ValidationProvider>
          </div>

          <div>
            <p v-if="message" class="alert"
              :class="successful ? 'alert-success' : 'alert-warning'">
              {{message}}
              <div v-if="successful">
                <router-link to="/profile" class="nav-link">
                  <font-awesome-icon icon="user" /> Login now ?
                </router-link>
              </div>
            </p>
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit">Register</button>
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

// No message specified.
extend('email', email);
extend('required', {
  ...required,
  message: 'This field is required'
});

export default {
  name: 'register',
  components: { ValidationObserver, ValidationProvider },
  data() {
    return {
      user: new User('', '', ''),
      confirmedPassword: '',
      submitted: false,
      successful: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleRegistration () {
      this.message = '';
      this.submitted = true;
      this.$store.dispatch('auth/register', this.user).then(
        data => {
          this.message = "You have been registered successfully !";
          this.successful = true;
        },
        error => {
          this.message = error.toString();
          this.successful = false;
        }
      );
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
</style>

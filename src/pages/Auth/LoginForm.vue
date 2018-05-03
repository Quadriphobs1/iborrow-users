<template>
  <form @submit.prevent="login" class="needs-validation" v-bind:class="{ 'was-validated': wasValidated }" novalidate method="post">
      <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="hasError">
          <strong>Error!</strong> {{errorMessage}}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">×</span>
          </button>
      </div>
      <div class="form-group">
        <input v-model="username" type="text" name="username" v-validate="'required'" class="form-control" :class="{ 'is-invalid': errors.has('username') }" required placeholder="Enter email or username">
        <span class="invalid-feedback" v-show="errors.has('username')">{{ errors.first('username') }}</span>
      </div>
      <div class="form-group mb-4">
        <input type="password" name="password" v-model="password" class="form-control" v-validate="'required'" required :class="{ 'is-invalid': errors.has('password') }" placeholder="Enter password">
        <span class="invalid-feedback" v-show="errors.has('password')">{{ errors.first('password') }}</span>
      </div>

      <div class="form-group clearfix">
          <a href="#" class="float-left forgot-link my-2">Forgot Password ?</a>
          <button type="submit" :disabled="loading" class="btn btn-purple float-right" > <i class="fa fa fa-circle-o-notch fa-spin mr-2" v-if="loading"></i>LOGIN</button>
      </div>

      <div class="form-divider"></div>
      <div class="text-center mt-4">
        <router-link :to="{ name: 'auth.register' }" tag="a" class="btn-link text-capitalize f12">Create an Account</router-link>
      </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login-form',
  data () {
    return {
      loading: false,
      username: null,
      password: null,
      wasValidated: false,
      errorMessage: null,
      hasError: false
    }
  },
  methods: {
    login (e) {
      e.preventDefault()
      this.$validator.validateAll().then((result) => {
        this.wasValidated = true
        this.loading = true
        this.hasError = false
        this.errorMessage = null
        if (result) {
          let data = {
            username: this.username,
            password: this.password
          }
          return axios.post('/api/auth/signin', data).then((res) => {
            if (res.status === 200) {
              this.loading = false
              // Save the token.
              this.$store.dispatch('auth/saveToken', {
                token: res.data.token,
                roles: res.data.roles,
                remember: true
              })

              // Fetch the user.
              this.$store.dispatch('auth/fetchUser')

              // Redirect home.
              this.$router.push({ name: 'landing-page' })
            } else {
              this.hasError = true
              this.errorMessage = res.data.message
            }
          }).catch((err) => {
            this.loading = false
            this.hasError = true
            this.errorMessage = err.response.data.message
          })
        } else {
          this.loading = false
        }
      })
    }
  }
}
</script>

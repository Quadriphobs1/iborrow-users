<template>
  <form @submit.prevent="reset" class="needs-validation" v-bind:class="{ 'was-validated': wasValidated }" novalidate method="post">
      <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="hasError">
          <strong>Error!</strong> {{errorMessage}}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">×</span>
          </button>
      </div>
      <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="success">
          <strong>Success!</strong> {{successMessage}}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">×</span>
          </button>
      </div>
      <div class="form-group">
        <input v-model="email" type="email" name="email" v-validate="'required|email'" class="form-control" :class="{ 'is-invalid': errors.has('email') }" required placeholder="Enter your email address">
        <span class="invalid-feedback" v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </div>

      <div class="form-group clearfix text-right">
          <button type="submit" :disabled="loading" class="btn btn-purple"> <i class="fa fa fa-circle-o-notch fa-spin mr-2" v-if="loading"></i>RESET PASSWORD</button>
      </div>

      <div class="form-divider"></div>
      <div class="text-center mt-4">
        Remember password? <router-link :to="{ name: 'auth.login' }" tag="a" class="btn-link text-capitalize f12"> proceed to login</router-link>
      </div>
  </form>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'forgot-password-form',
    data () {
      return {
        email: null,
        loading: false,
        wasValidated: false,
        errorMessage: null,
        hasError: false,
        success: false,
        successMessage: null
      }
    },
    methods: {
      reset () {
        this.$validator.validateAll().then((result) => {
          this.wasValidated = true
          this.loading = true
          this.hasError = false
          this.errorMessage = null
          this.success = false
          if (result) {
            let data = {
              email: this.email
            }
            return axios.post('/api/auth/forgot', data).then((res) => {
              if (res.status === 200) {
                this.loading = false
                this.success = true
                this.successMessage = res.data.message
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

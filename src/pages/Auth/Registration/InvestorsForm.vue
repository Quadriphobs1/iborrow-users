<template>
 <form @submit.prevent="validateBeforeSubmit" class="row needs-validation" v-bind:class="{ 'was-validated': wasValidated }" novalidate method="post">

    <div class="form-group col-md-6">
        <input v-model="firstName" type="text" name="firstName" class="form-control" v-validate="'required|alpha'" :class="{ 'is-invalid': errors.has('firstName') }" required placeholder="Enter firstname">
        <span class="invalid-feedback" v-show="errors.has('firstName')">{{ errors.first('firstName') }}</span>
    </div>
    <div class="form-group col-md-6">
        <input v-model="lastName" type="text" name="lastName" v-validate="'required|alpha'" :class="{ 'is-invalid': errors.has('lastName') }" class="form-control" placeholder="Enter lastname" required>
        <span class="invalid-feedback" v-show="errors.has('lastName')">{{ errors.first('lastName') }}</span>
    </div>
    <div class="form-group col-12">
        <input v-model="email" type="email" v-validate="'required|email|uniqueEmail'" name="email" class="form-control" :class="{ 'is-invalid': errors.has('email') }" placeholder="Enter email" required>
        <span class="invalid-feedback" v-show="errors.has('email')">{{ errors.first('email') }}</span>
    </div>
    <div class="form-group col-12">
        <input v-model="username" type="text" name="username" v-validate="'required|alpha_num|uniqueUsername'" class="form-control" :class="{ 'is-invalid': errors.has('username') }" placeholder="Enter prefered username" required>
        <span class="invalid-feedback" v-show="errors.has('username')">{{ errors.first('username') }}</span>
    </div>
    <div class="form-group mb-4 col-12">
        <input v-model="password" type="password" name="password" v-validate="'required|min:6'" required class="form-control" :class="{ 'is-invalid': errors.has('password') }" placeholder="Enter password">
        <span class="invalid-feedback" v-show="errors.has('password')">{{ errors.first('password') }}</span>
    </div>

    <div class="custom-control custom-checkbox my-1 mr-sm-2 position-relative col-12">
        <span style="position: absolute; top: 8px; left: 15;">
            <input v-model="terms" v-validate="'required'" required type="checkbox" name="confirmTerms" class="custom-control-input"  id="customControlInline">
            <label class="custom-control-label" for="customControlInline" style="padding-left: 25px">I agree to the terms</label>
            <span class="invalid-feedback" v-show="errors.has('terms')">You forgot to check the box.</span>
        </span>
        <button type="submit" class="btn btn-purple float-right " :disabled="loading"><i class="fa fa fa-circle-o-notch fa-spin mr-2" v-if="loading"></i>Register</button>
    </div>

    <div class="form-divider col-12"></div>

    <div class="text-center mt-2 col-12">
      Already have an account ? <router-link :to="{ name: 'auth.login' }" tag="a" class="btn-link text-capitalize f12">Proceed to login</router-link>
    </div>
</form>
</template>

<script>
import axios from 'axios'
import { Validator } from 'vee-validate'

const isUnique = (value) => {
  return axios.post('/api/auth/validate/email', { email: value }).then((response) => {
    return {
      valid: response.data.valid,
      data: {
        message: response.data.message
      }
    }
  })
}
const isUniqueUsername = (value) => {
  return axios.post('/api/auth/validate/username', { username: value }).then((response) => {
    return {
      valid: response.data.valid,
      data: {
        message: response.data.message
      }
    }
  })
}
Validator.extend('uniqueEmail', {
  validate: isUnique,
  getMessage: (field, params, data) => {
    return data.message
  }
})
Validator.extend('uniqueUsername', {
  validate: isUniqueUsername,
  getMessage: (field, params, data) => {
    return data.message
  }
})

export default {
  name: 'borrrowers-form',
  data () {
    return {
      username: null,
      password: null,
      firstName: null,
      lastName: null,
      email: null,
      terms: false,
      wasValidated: false,
      loading: false
    }
  },
  methods: {
    validateBeforeSubmit (e) {
      e.preventDefault()
      this.$validator.validateAll().then((result) => {
        this.wasValidated = true
        this.loading = true
        if (result) {
          let data = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            username: this.username,
            password: this.password
          }
          return axios.post('/api/auth/signup/investors', data).then((res) => {
            if (res.status === 200) {
              this.loading = false
              e.target.reset()
              const userID = res.data.user._id
              // Redirect the user to confirm his/her account with the code sent
              this.$router.push({ name: 'registered.welcome', params: { userId: userID } })
            }
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          this.loading = false
        }
      })
    }
  }
}
</script>

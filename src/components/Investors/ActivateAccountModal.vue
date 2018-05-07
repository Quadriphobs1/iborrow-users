<template>
  <div class="modal fade" id="activationModal" tabindex="-1" role="dialog" aria-labelledby="activationModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <form @submit.prevent="validateBeforeSubmit" v-bind:class="{ 'was-validated': wasValidated }" novalidate method="post" class="needs-validation">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel5">Activate Account</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>Please check your email address for the activation code, input the activation code below and click on activate.</p>
                <div class="alert alert-dark" role="alert">
                  Can't find activation code? <a href="#" class="alert-link" @click="resendCode">Resend code</a>
                </div>
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Activation Code:</label>
                    <input v-model="code" type="text" name="code" v-validate="'required|alpha_num|min:6|max:6|uniqueCode'" class="form-control" :class="{ 'is-invalid': errors.has('code') }" required placeholder="Enter Activation Code">
                    <span class="invalid-feedback" v-show="errors.has('code')">{{ errors.first('code') }}</span>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" :disabled="loading"> <i class="fa fa fa-circle-o-notch fa-spin mr-2" v-if="loading"></i> Activate Account</button>
            </div>
        </div>
      </form>
    </div>
</div>
</template>

<script>
// TODO: Activate account
import axios from 'axios'
import { Validator } from 'vee-validate'
// Check if code is correct and active
const isCode = (value) => {
  return axios.post('/api/users/activate/checkcode', { code: value }).then((response) => {
    return {
      valid: response.data.valid,
      data: {
        message: response.data.message
      }
    }
  })
}

Validator.extend('uniqueCode', {
  validate: isCode,
  getMessage: (field, params, data) => {
    return data.message
  }
})

export default {
  name: 'acount-activation-number',
  data () {
    return {
      code: null,
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
            code: this.code
          }
          return axios.post('/api/users/activate', data).then((res) => {
            if (res.status === 200) {
              this.loading = false
              this.$toastr.s(res.data.message, 'Account activated successfully')
              this.$router.push({ name: 'investors.onboard.stepone' })
            }
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          this.loading = false
        }
      })
    },
    //  resend the verification code to user email
    async resendCode (e) {
      e.preventDefault()
      try {
        const { data } = await axios.get('/api/users/activate/resendcode')
        if (data) {
          this.$toastr.s(data.message, 'Code sent successfully')
        }
      } catch (err) {
        this.$toastr.e(err.response.data.message)
      }
    }
  }
}
</script>

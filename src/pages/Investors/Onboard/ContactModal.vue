<template>
  <div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="contactModallabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <form @submit.prevent="validateBeforeSubmit" v-bind:class="{ 'was-validated': wasValidated }" novalidate method="post" class="needs-validation">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel5">Add Contact Information</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="hasError">
                    <strong>Error!</strong> {{errorMessage}}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="form-group">
                    <label  class="col-form-label">Date of Birth:</label>
                    <input v-model="date" type="date" name="date" class="form-control date-picker-input" v-validate="'required'" :class="{ 'is-invalid': errors.has('date') }" required placeholder="Select Date of Birth">

                    <span class="invalid-feedback" v-show="errors.has('date')">{{ errors.first('date') }}</span>
                    <span class="" >Note: You must be 18 years and above to proceed the registration</span>
                </div>
                <div class="form-group">
                    <label  class="col-form-label">State of Origin:</label>
                    <select v-model="state" name="state" v-validate="'required'" :class="{ 'is-invalid': errors.has('state') }" required  class="form-control" >
                        <option>Abia</option>
                        <option>Abuja</option>
                        <option>Adamawa</option>
                        <option>Akwa Ibom</option>
                        <option>Anambra</option>
                        <option>Bauchi</option>
                        <option>Bayelsa</option>
                        <option>Benue</option>
                        <option>Borno</option>
                        <option>Cross River</option>
                        <option>Delta</option>
                        <option>Ebonyi</option>
                        <option>Edo</option>
                        <option>Ekiti</option>
                        <option>Enugu</option>
                        <option>Gombe</option>
                        <option>Imo</option>
                        <option>Jigawa</option>
                        <option>Kaduna</option>
                        <option>Kano</option>
                        <option>Katsina</option>
                        <option>Kebbi</option>
                        <option>Kogi</option>
                        <option>Kwara</option>
                        <option>Lagos</option>
                        <option>Nassarawa</option>
                        <option>Niger</option>
                        <option>Ogun</option>
                        <option>Ondo</option>
                        <option>Osun</option>
                        <option>Oyo</option>
                        <option>Plateau</option>
                        <option>Rivers</option>
                        <option>Sokoto</option>
                        <option>Taraba</option>
                        <option>Yobe</option>
                        <option>Zamfara</option>
                    </select>
                    <span class="invalid-feedback" v-show="errors.has('state')">{{ errors.first('state') }}</span>
                </div>
                <div class="form-group">
                    <label  class="col-form-label">Address:</label>
                    <textarea v-model="address" name="address" placeholder="Enter your address" v-validate="'required'" required class="form-control" :class="{ 'is-invalid': errors.has('address') }"></textarea>
                    <span class="invalid-feedback" v-show="errors.has('address')">{{ errors.first('address') }}</span>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" :disabled="loading"> <i class="fa fa fa-circle-o-notch fa-spin mr-2" v-if="loading"></i> Save Information</button>
            </div>
        </div>
      </form>
    </div>
</div>
</template>

<script>
import axios from 'axios'
// eslint-disable-next-line
import DatePicker from 'vue2-datepicker'
export default {
  name: 'contact-modal',
  data () {
    return {
      wasValidated: false,
      loading: false,
      address: '',
      date: '',
      state: '',
      errorMessage: null,
      hasError: false
    }
  },
  components: {
    DatePicker
  },
  methods: {
    validateBeforeSubmit (e) {
      e.preventDefault()
      this.$validator.validateAll().then((result) => {
        this.wasValidated = true
        this.loading = true
        if (result) {
          let data = {
            address: this.address,
            state: this.state,
            date: this.date
          }
          console.log('now sending')
          return axios.post('/api/user/personalinfo/save', data).then((res) => {
            if (res.status === 200) {
              this.loading = false
              // Fetch the user.
              this.$store.dispatch('auth/fetchUser')
              this.$toastr.s(res.data.message, 'Information saved successfully')
              // Redirect home.
              this.$router.go(this.$router.currentRoute)
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

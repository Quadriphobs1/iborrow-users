<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <div class="alert alert-warning" role="alert">
          <h4 class="alert-heading">Welcome back {{name}}!</h4>
          <p>You have successfully created account on iBorrow, however, to make things official, we need to confirm your account, please check your email address for the confirmation code.</p>
          <hr>
          <button data-toggle="modal" data-target="#activationModal" type="button" class="btn btn-primary btn-sm">Click to enter code</button>
      </div>
      <activate-account-modal></activate-account-modal>
    </div>
  </div>
</div>
</template>

<script>
import ActivateAccountModal from './ActivateAccountModal'
export default {
  name: 'activate-account',
  props: {
    name: {
      type: String
    }
  },
  components: {
    ActivateAccountModal
  }
}
</script>

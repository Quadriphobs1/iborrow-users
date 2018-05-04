<template>
  <div class="col-xl-12 d-lg-flex justify-content-center flex-wrap align-items-center">
    <div class="login-form">
        <h4 class="text-uppercase text-purple text-center mb-3">Forgot Password</h4>
        <p>Before resetting your password, please make sure you have looked into the conditions below</p>
        <ul>
          <li>You do not have your caps lock on when inputing your password</li>
          <li>You are using correct email or username for your account</li>
        </ul>
        <forgot-password-form></forgot-password-form>
    </div>

    <video-container minheight="620px"></video-container>
  </div>
</template>
<script>
import VideoContainer from '../VideoContainer'
import ForgotPasswordForm from './ForgotPasswordForm'
export default {
  name: 'forgot-password',
  components: {
    VideoContainer,
    ForgotPasswordForm
  },
  metaInfo () {
    return {
      title: 'Forgot Password'
    }
  }
}
</script>

<template>
  <div class="col-xl-12 d-lg-flex justify-content-center flex-wrap align-items-center">
    <div class="login-form">
        <h4 class="text-uppercase text-purple text-center mb-5">Login</h4>
        <login-form></login-form>
    </div>

    <video-container></video-container>
  </div>
</template>
<script>
import VideoContainer from './VideoContainer'
import LoginForm from './LoginForm'
export default {
  name: 'login',
  components: {
    VideoContainer,
    LoginForm
  }
}
</script>

<template>
  <div class="col-xl-12 d-lg-flex justify-content-center flex-wrap align-items-center">
    <div class="login-form">
        <h4 class="text-uppercase text-purple text-center mb-5">Forgot Password</h4>
        <form action="#">
            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email or username">
            </div>

            <div class="form-group clearfix">
                <button type="submit" class="btn btn-purple">RESET PASSWORD</button>
            </div>

            <div class="form-divider"></div>
            <div class="text-center mt-4">
              Remember password? <router-link :to="{ name: 'auth.login' }" tag="a" class="btn-link text-capitalize f12">proceed to login</router-link>
            </div>
        </form>
    </div>

    <video-container></video-container>
  </div>
</template>
<script>
import VideoContainer from '../VideoContainer'
export default {
  name: 'forgot-password',
  components: {
    VideoContainer
  }
}
</script>

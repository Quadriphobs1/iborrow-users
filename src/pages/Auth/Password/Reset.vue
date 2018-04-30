<template>
  <div class="col-xl-12 d-lg-flex justify-content-center flex-wrap align-items-center">
    <div class="login-form">
        <h4 class="text-uppercase text-purple text-center mb-5">Reset Password {{$route.params.token}}</h4>
        <form action="#">
            <div class="form-group">
              <input type="email" class="form-control"  placeholder="Enter email or username">
            </div>
            <div class="form-group mb-4">
              <input type="password" class="form-control" placeholder="Enter new password">
            </div>
            <div class="form-group mb-4">
              <input type="password" class="form-control" placeholder="Retype password">
            </div>

            <div class="form-group clearfix">
                <button type="submit" class="btn btn-purple">SAVE PASSWORD</button>
            </div>

            <div class="form-divider"></div>
            <div class="text-center mt-4">
              <router-link :to="{ name: 'auth.register' }" tag="a" class="btn-link text-capitalize f12">Create an Account</router-link>
            </div>
        </form>
    </div>

    <video-container></video-container>
  </div>
</template>
<script>
import VideoContainer from '../VideoContainer'
export default {
  name: 'reset-password',
  components: {
    VideoContainer
  }
}
</script>

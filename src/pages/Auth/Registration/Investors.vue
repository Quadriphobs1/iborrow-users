<template>
  <div class="col-xl-12 d-lg-flex justify-content-center flex-wrap align-items-center">
    <div class="login-form">
        <h4 class="text-uppercase text-purple text-center mb-5">Create an account</h4>
        <form action="#" class="row needs-validation" novalidate>
            <div class="form-group col-md-6">
                <input type="text" class="form-control" required placeholder="Enter firstname">
            </div>
            <div class="form-group col-md-6">
                <input type="text" class="form-control" placeholder="Enter lastname" required>
            </div>
            <div class="form-group col-12">
                <input type="email" class="form-control" placeholder="Enter email" required>
                <div class="invalid-tooltip">
                    Enter a valid email address
                </div>
            </div>
            <div class="form-group mb-4 col-12">
                <input type="password" class="form-control" placeholder="Enter password">
                <div class="invalid-tooltip">
                    Enter a valid password
                </div>
            </div>

            <div class="custom-control custom-checkbox my-1 mr-sm-2 position-relative col-12">
                <span style="position: absolute; top: 8px; left: 15;">
                    <input type="checkbox" class="custom-control-input" id="customControlInline">
                    <label class="custom-control-label" for="customControlInline" style="padding-left: 25px">I agree to the terms</label>
                </span>
                <button type="submit" class="btn btn-purple float-right">SingUp</button>
            </div>

            <div class="form-divider col-12"></div>
            
            <div class="text-center mt-2 col-12">
              Already have an account ? <router-link :to="{ name: 'auth.login' }" tag="a" class="btn-link text-capitalize f12">Proceed to login</router-link>
            </div>
        </form>
    </div>

    <video-container></video-container>
  </div>
</template>
<script>
import VideoContainer from '../VideoContainer'
export default {
  name: 'investor-registration',
  components: {
    VideoContainer
  }
}
</script>

<template>
  <div class="col-xl-12 d-lg-flex justify-content-center flex-wrap align-items-center">
    <div class="login-form">
        <h4 class="text-uppercase text-purple text-center mb-5">Create an account</h4>
        <investors-form ></investors-form>
    </div>

    <video-container minheight="620px"></video-container>
  </div>
</template>
<script>
import VideoContainer from '../VideoContainer'
import InvestorsForm from './InvestorsForm'
export default {
  name: 'investor-registration',
  components: {
    VideoContainer,
    InvestorsForm
  }
}
</script>

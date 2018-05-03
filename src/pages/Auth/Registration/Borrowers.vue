<template>
  <div class="col-xl-12 d-lg-flex justify-content-center flex-wrap align-items-center">
    <div class="login-form">
        <h4 class="text-uppercase text-purple text-center mb-5">Create an account</h4>
        <borrower-form></borrower-form>
    </div>

    <video-container minheight="620px"></video-container>
  </div>
</template>
<script>
import BorrowerForm from './BorrowersForm'
import VideoContainer from '../VideoContainer'
export default {
  name: 'borrower-registration',
  components: {
    VideoContainer,
    BorrowerForm
  }
}
</script>

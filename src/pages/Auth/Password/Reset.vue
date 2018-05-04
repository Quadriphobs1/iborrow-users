<template>
  <div class="col-xl-12 d-lg-flex justify-content-center flex-wrap align-items-center">
    <div class="login-form">
        <h4 class="text-uppercase text-purple text-center mb-5">Reset Password</h4>
        <div v-if="verifying">
          <reset-password-form v-if="verified"></reset-password-form>
          <div class="text-center" v-else>
            <img src="@/assets/img/padlock.png" alt="Token Error">
            <h3>Token Error</h3>
            <p>There is an error with your password reset token, this may happen if the reset token has expired or is broken.</p>
            <router-link :to="{ name: 'auth.password.forgot' }" tags="a" class="btn btn-purple btn-fluid">Send new token</router-link>
          </div>
        </div>
  
        <content-loader
          :height="360"
          :width="400"
          :speed="2"
          primaryColor="#f3f3f3"
          secondaryColor="#ccc"
          v-else
        >
          <rect x="0" y="8" rx="10" ry="10" width="400" height="40" />
          <rect x="0" y="68" rx="5" ry="5" width="400" height="40" />
          <rect x="0" y="128" rx="5" ry="5" width="400" height="40" />
          <rect x="0" y="208" rx="5" ry="5" width="150" height="40" />
        </content-loader>
    </div>

    <video-container minheight="620px"></video-container>
  </div>
</template>
<script>
// TODO: check if the token is correct, if yes display the rest form if not display an option for the user to try generate a new token
import { ContentLoader } from 'vue-content-loader'
import ResetPasswordForm from './ResetPasswordForm'
import VideoContainer from '../VideoContainer'
import axios from 'axios'
export default {
  name: 'reset-password',
  metaInfo () {
    return { title: 'Reset Password' }
  },
  data () {
    return {
      verifying: false,
      verified: false,
      token: this.$route.params.token
    }
  },
  components: {
    VideoContainer,
    ResetPasswordForm,
    ContentLoader
  },
  mounted () {
    this.verifyToken()
  },
  methods: {
    verifyToken () {
      this.verifying = true
      return axios.get('/api/auth/reset/' + this.token).then((res) => {
        if (res.status === 200) {
          this.verified = true
        }
      }).catch((err) => {
        // TODO: Fix error catch at this stage for 400
        if (err) {
          this.verified = false
        }
      })
    }
  }
}
</script>

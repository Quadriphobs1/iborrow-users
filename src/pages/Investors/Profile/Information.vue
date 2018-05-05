<template>
  <div class="card card-shadow mb-4 ">
      <div class="card-body">
          <div class="text-center">
              <profile-image :image="profileImage" :loading="loadingImage"></profile-image>
              <h5 class="text-uppercase mb-0">
                <content-loader
                  :height="25"
                  :width="100"
                  :speed="2"
                  primaryColor="#f3f3f3"
                  secondaryColor="#ccc"
                >
                  <rect x="0" y="0" rx="5" ry="5" width="100" height="10" />
                </content-loader>
              </h5>
              <p class="text-muted mb-0">Sr. Marketing Executive </p>
              <table class="table table-hover text-left table-striped">
                <tr>
                  <td>Phone Number</td>
                  <td>0909090909090</td>
                </tr>
                <tr>
                  <td>Email Address</td>
                  <td>myemail.com</td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>Abuja</td>
                </tr>
                <tr>
                  <td>Region</td>
                  <td>Abuja</td>
                </tr>
              </table>
          </div>

      </div>
  </div>
</template>

<script>
  import { ContentLoader } from 'vue-content-loader'
  import ProfileImage from './ProfileImage'
  export default {
    name: 'profile-information',
    components: {
      ProfileImage,
      ContentLoader
    },
    mounted () {
      this.fetchProfileImage()
    },
    data () {
      return {
        loadingImage: false,
        profileImage: ''
      }
    },
    methods: {
      async fetchProfileImage () {
        await this.$store.dispatch('auth/fetchUser')
        this.profileImage = `${process.env.API_URL}/${this.$store.getters['auth/user'].profileImageURL}`
        this.loadingImage = true
      }
    }
  }
</script>


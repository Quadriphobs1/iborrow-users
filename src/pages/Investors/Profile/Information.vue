<template>
  <div class="card card-shadow mb-4 ">
      <div class="card-body">
          <div class="text-center">
              <profile-image :image="profileImage" :loading="loadingImage"></profile-image>
              <div class="flex justify-content-center profile-information">
                <profile-name :name="displayName" :email="email" :loading="loading"></profile-name>
              </div>
              <personal-information :username="username"></personal-information>
          </div>

      </div>
  </div>
</template>

<script>
  import ProfileImage from './ProfileInformation//ProfileImage'
  import ProfileName from './ProfileInformation//Name'
  import PersonalInformation from './ProfileInformation/PersonalInformation.vue'
  export default {
    name: 'profile-information',
    components: {
      ProfileImage,
      ProfileName,
      PersonalInformation
    },
    mounted () {
      this.fetchProfileImage()
    },
    data () {
      return {
        loadingImage: false,
        profileImage: '',
        displayName: '',
        username: '',
        phoneNumber: '',
        state: '',
        email: '',
        loading: false
      }
    },
    methods: {
      async fetchProfileImage () {
        await this.$store.dispatch('auth/fetchUser')
        this.displayName = this.$store.getters['auth/user'].displayName
        this.email = this.$store.getters['auth/user'].email
        this.username = this.$store.getters['auth/user'].username
        this.phoneNumber = this.$store.getters['auth/user'].username

        this.profileImage = `${process.env.API_URL}/${this.$store.getters['auth/user'].profileImageURL}`
        this.loadingImage = true
        this.loading = true
      }
    }
  }
</script>


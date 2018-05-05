<template>
  <div class="user-thumb">
      <img class="rounded-circle" v-auth-image="profileImage" alt="profile image" v-if="loading"/>
      <img class="rounded-circle" src="@/assets/img/avatar/avatar1.jpg" alt="Profile Image" v-else/>
      <span class="d-lg-none">{{displayName}}</span>
  </div>
</template>

<script>
  export default {
    name: 'profile-image',
    data () {
      return {
        loading: false,
        profileImage: null,
        displayName: null
      }
    },
    methods: {
      async fetchUser () {
        // Dispatch an action to fetch the user information in case it doesn't exist before
        await this.$store.dispatch('auth/fetchUser')
        this.displayName = this.$store.getters['auth/user'].displayName
        this.profileImage = `${process.env.API_URL}/${this.$store.getters['auth/user'].profileImageURL}`
        this.loading = true
      }
    },
    mounted () {
      // this.fetchProfileImage()
      this.fetchUser()
    }
  }
</script>

<style scoped>

</style>

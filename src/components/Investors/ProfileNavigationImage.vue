<template>
  <div class="user-thumb">
      <img class="rounded-circle" :src="profileImge" alt="profile image" v-if="loading"/>
      <img class="rounded-circle" src="@/assets/img/avatar/avatar1.jpg" alt="" v-else/>
      <span class="d-lg-none">{{displayName}}</span>
  </div>
</template>

<script>
  export default {
    name: 'profile-image',
    data () {
      return {
        loading: false,
        profileImge: null,
        displayName: null
      }
    },
    methods: {
      async fetchUser () {
        await this.$store.dispatch('auth/fetchUser')
        this.displayName = this.$store.getters['auth/user'].displayName
        const userProfileImage = this.$store.getters['auth/user'].profileImageURL
        if (userProfileImage) {
          this.loading = false
          this.profileImge = `${process.env.API_URL}/${userProfileImage}`
        }
      }
    },
    mounted () {
      this.fetchUser()
    }
  }
</script>

<style scoped>

</style>

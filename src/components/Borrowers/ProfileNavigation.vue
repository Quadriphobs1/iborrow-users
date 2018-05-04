<template>
  <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle mr-lg-3" id="userNav" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <profile-image></profile-image>
      </a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userNav">
          <a class="dropdown-item" href="#">My Profile</a>
          <a class="dropdown-item" href="#">Account Settings</a>
          <a class="dropdown-item" href="#">Inbox <span class="badge badge-primary">3</span></a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" @click="logoutUser" >Sign Out</a>
      </div>
  </li>
</template>

<script>
  import ProfileImage from './ProfileNavigationImage'
  export default {
    name: 'profile-navigation',
    components: {
      ProfileImage
    },
    methods: {
      //  Logout the user from the application
      async logoutUser (e) {
        e.preventDefault()
        try {
          this.$toastr.s('Logging out now')
          await this.$store.dispatch('auth/logout')
          this.$router.push({ name: 'landing-page' })
        } catch (err) {
          this.$toastr.e(err.response.data.message)
        }
      }
    }
  }
</script>

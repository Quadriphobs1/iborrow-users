<template>
  <ul class="navbar-nav sidenav-toggler">
      <li class="nav-item text-center">
        <a class="nav-link text-center" @click="logoutUser">
            Sign Out <i class="fa fa-sign-out"></i>
        </a>
      </li>
  </ul>
</template>

<script>
  // TODO: Change what is here to proper items
  export default {
    name: 'foot-navigation',
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

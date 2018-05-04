<template>
  <div class="profile-banner" :style="{ backgroundImage: 'url('+ require('@/assets/img/investors-profile-banner.jpg') +')' }">
      <div class="row ">
          <div class="col-md-6 ml-auto text-lg-right">
              <div class="profile-follower-info col-12">
                  <topbar-highlights caption="Followers" value="20" :loading="loadingFollowers"></topbar-highlights>
                  <topbar-highlights caption="Following" value="120" :loading="loadingFollowings"></topbar-highlights>
                  <topbar-highlights caption="Account Type" :value="roles" :loading="loadingAccountType"></topbar-highlights>
              </div>

              <div class="mt-4">
                  <a href="#" class="btn btn-sm btn-purple btn-pill pl-5 pr-5">Edit Profile</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  import TopbarHighlights from './TopbarHighlights'
  export default {
    name: 'profile-topbar',
    data () {
      return {
        loadingFollowers: true, // default = false
        loadingFollowings: true, // default = false
        loadingAccountType: false,
        roles: null
      }
    },
    computed: {
      userRoles () {
        return this.$store.getters['auth/user']
      }
    },
    components: {
      TopbarHighlights
    },
    mounted () {
      // TODO: Get the number of followers the user has from store
      // TODO: get the number of user following from store
      // Initialize the get roles funtion
      this.getUserRoles()
    },
    methods: {
      async getUserRoles () {
        await this.$store.dispatch('auth/fetchUser')
        this.roles = this.$store.getters['auth/user'].roles
        this.loadingAccountType = true
      }
    }
  }
</script>

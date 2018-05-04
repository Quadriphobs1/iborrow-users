<template>
  <div class="profile-banner" :style="{ backgroundImage: 'url('+ require('@/assets/img/investors-profile-banner.jpg') +')' }">
      <div class="row ">
          <div class="col-md-6 ml-auto text-lg-right">
              <div class="profile-follower-info">
                  <div class="d-inline-block px-3 text-left text-light">
                      <strong class="f14 d-block">9</strong>
                      <p>Follower</p>
                  </div>
                  <div class="d-inline-block px-3 text-left text-light">
                      <strong class="f14 d-block">37</strong>
                      <p>Following</p>
                  </div>
                  <div class="d-inline-block px-3 text-left text-light">
                      <strong class="f14 d-block">{{userRoles.roles}}</strong>
                      <p>Account Type</p>
                  </div>
              </div>

              <div class="mt-4">
                  <a href="#" class="btn btn-sm btn-purple btn-pill pl-5 pr-5">Edit Profile</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'profile-topbar',
    computed: {
      userRoles () {
        return this.$store.getters['auth/user']
      }
    }
  }
</script>

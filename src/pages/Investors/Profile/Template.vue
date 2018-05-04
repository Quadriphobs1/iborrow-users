<template>
<div >
  <topbar />
  <profile-navigation></profile-navigation>

  <div class="container-fluid">

    <div class="row">
        <profile-sidebar></profile-sidebar>
        <div class="col-xl-8 col-md-6">
          <router-view></router-view>
        </div>
    </div>

  </div>

</div>

</template>
<script>
import Topbar from './Topbar'
import ProfileSidebar from './Sidebar'
import ProfileNavigation from './Navigation'
export default {
  name: 'profile-template',
  components: {
    Topbar,
    ProfileSidebar,
    ProfileNavigation
  }
}
</script>

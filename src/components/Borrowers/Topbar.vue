<template>
  <div>
       <nav class="navbar navbar-expand-lg fixed-top navbar-light" id="mainNav">
        <router-link :to="{ name: 'borrowers.home' }" class="navbar-brand" href="#" >
            <img class="pr-3 float-left" src="@/assets/img/logo.png" style="max-height:40px" alt="iBorrow"/>
            <div class="float-left">
                <div>iBorrow </div>
                <span class="page-direction f12 weight300">
                    <span>Borrowers Portal</span>
                </span>
            </div>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
            <sidebar></sidebar>
            <foot-navigation></foot-navigation>
            <portal-navigation></portal-navigation>
            <top-navigation></top-navigation>
        </div>
    </nav>
  </div>
</template>

<script>
  import Sidebar from './Sidebar'
  import TopNavigation from './TopNavigation'
  import PortalNavigation from './PortalNavigation'
  import FootNavigation from '../FootNavigation'
  export default {
    name: 'investors-topbar',
    components: {
      Sidebar,
      TopNavigation,
      PortalNavigation,
      FootNavigation
    }
  }
</script>

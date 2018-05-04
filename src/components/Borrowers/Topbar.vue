<template>
  <div>
       <nav class="navbar navbar-expand-lg fixed-top navbar-light" id="mainNav">
        <a class="navbar-brand" href="#" data-jq-dropdown="#jq-dropdown-1">
            <img class="pr-3 float-left" src="@/assets/img/logo.png" style="max-height:40px" alt="iBorrow"/>
            <div class="float-left">
                <div>iBorrow <i class="fa fa-caret-down pl-2"></i></div>
                <span class="page-direction f12 weight300">
                    <span>Investors Portal</span>
                </span>
            </div>
        </a>
        <mega-menu></mega-menu>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
            <sidebar></sidebar>
            <top-navigation></top-navigation>
        </div>
    </nav>
  </div>
</template>

<script>
  import MegaMenu from './MegaMenu'
  import Sidebar from './Sidebar'
  import TopNavigation from './TopNavigation'
  export default {
    name: 'investors-topbar',
    components: {
      MegaMenu,
      Sidebar,
      TopNavigation
    }
  }
</script>

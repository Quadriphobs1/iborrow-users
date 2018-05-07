<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light" id="mainNav">
        <div class="box-container">
           <!--brand name for responsive-->
           <a class="navbar-brand navbar-brand-responsive" href="#">
               <img class="pr-3 float-left" src="@/assets/img/logo_50px.png"  alt="iBorrow"/>
           </a>
           <!--/brand name for responsive-->

            <!--responsive navigation list toggle-->
            <button class="navbar-toggler navigation-list-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarListResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!--/responsive navigation list toggle-->
            <div class="collapse navbar-collapse" id="navbarResponsive">

                <!--brand name-->
                <a class="navbar-brand navbar-hide-responsive" href="#">
                    <img class="pr-3 float-left" src="@/assets/img/logo_50px.png"  alt="iBorrow"/>
                </a>
                <!--/brand name-->

                <!--header rightside links-->
                <ul class="navbar-nav header-links ml-auto hide-arrow">
                    <li class="nav-item dropdown">
                        <a class="nav-link text-white btn btn-secondary btn-sm mr-lg-3" >
                            <i class="vl_angle-left"></i>
                            <span >Back to website</span>
                        </a>

                    </li>
                </ul>
                <!--/header rightside links-->
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'onboard-navigation',

  data: () => ({
  })
}
</script>

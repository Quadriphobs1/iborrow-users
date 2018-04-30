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
                    <li class="nav-item dropdown d-none d-md-block">
                        <a class="nav-link dropdown-toggle mr-lg-3" id="userNav" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="user-thumb">
                                <img class="rounded-circle" src="@/assets/img/avatar/avatar1.jpg" alt="user"/>
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userNav">
                          <router-link :to="{ name: 'auth.login' }" tag="a" class="dropdown-item">Proceed to Login</router-link>
                            <a class="dropdown-item" href="#">Forgot Password</a>
                        </div>
                    </li>
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
  name: 'register-navigation',

  data: () => ({
  })
}
</script>

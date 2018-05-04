<template>
  <div id="jq-dropdown-1" class="jq-dropdown">
      <div class="b-mega-menu">
          <div class="card card-shadow">
              <div class="card-header p-2 pl-3">
                  <div class="navbar-brand mt-2">
                      <img class="pr-3 float-left" src="@/assets/img/logo.png"  alt="iBorrow" style="max-height:40px"/>
                      <div class="float-left">
                          <div>iBorrow</div>
                          <span class="page-direction f12 weight300">
                              <span>Borrowers Portal</span>
                          </span>
                      </div>
                  </div>

                  <div class="widget-action-link">
                      <ul class="nav nav-tabs wal-nav-tabs" id="myTab" role="tablist">
                          <li class="nav-item">
                              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i class="fa fa-home"></i></a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" id="analytics-tab" data-toggle="tab" href="#analytics" role="tab" aria-controls="analytics" aria-selected="false"><i class="fa fa-desktop"></i></a>
                          </li>
                      </ul>

                  </div>
              </div>
              <div class="card-body p-0 ">
                  <div class="tab-content" id="myTabContent">
                      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <div class="p-5 m-4 text-center">
                              <i class="fa fa-desktop f50 text-muted mb-4"></i>
                              <p class="mb-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                              <a href="#" class="btn btn-primary">Get Started</a>
                          </div>
                      </div>
                      <div class="tab-pane fade" id="analytics" role="tabpanel" aria-labelledby="analytics-tab">
                          <div class="p-5 m-4 text-center">
                              <i class="fa fa-desktop f50 text-muted mb-4"></i>
                              <p class="mb-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                              <a href="#" class="btn btn-primary">Get Started</a>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'mega-menu'
  }
</script>

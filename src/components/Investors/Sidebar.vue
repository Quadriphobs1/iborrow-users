<template>
  <ul class="navbar-nav left-side-nav" id="accordion">

      <li class="nav-item-search" data-toggle="tooltip" data-placement="right" title="Search">
          <div class="nav-link nav-link-collapse collapsed" data-toggle="collapse">
              <i class="vl_search"></i>
              <span class="nav-link-text">
                  <input type="text" class="search-form" placeholder="Search for borrower/business opportunity"/>
              </span>
          </div>
      </li>

      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" data-target="#dashboard">
              <i class="vl_dashboard"></i>
              <span class="nav-link-text">Dashboard </span>
          </a>
          <ul class="sidenav-second-level collapse" id="dashboard" data-parent="#accordion">
              <li> <a href="index-2.html">Dashboard 1</a> </li>
              <li> <a href="dashboard-2.html">Dashboard 2</a></li>
              <li> <a href="dashboard-3.html">Dashboard 3</a></li>
              <li> <a href="dashboard-4.html">Dashboard 4</a></li>
              <li> <a href="dashboard-5.html">Dashboard 5</a></li>
              <li> <a href="dashboard-6.html">Dashboard 6</a></li>
          </ul>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Notifications">
          <a class="nav-link" >
              <i class="vl_alarm-clock"></i>
              <span class="nav-link-text">Notifications </span>
          </a>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="My Profile">
          <a class="nav-link" >
              <i class="vl_user-male"></i>
              <span class="nav-link-text">My Profile </span>
          </a>
      </li>

  </ul>
</template>

<script>
  export default {
    name: 'sidebar'
  }
</script>

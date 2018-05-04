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
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Trending">
          <a class="nav-link " >
              <i class="vl_dashboard"></i>
              <span class="nav-link-text">Trending <span class="badge badge-danger">NEW</span></span>
          </a>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Investments">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" data-target="#investment">
              <i class="vl_globe4"></i>
              <span class="nav-link-text">Investments </span>
          </a>
          <ul class="sidenav-second-level collapse" id="investment" data-parent="#accordion">
              <a class="dropdown-item" href="#">Create Investment Alert</a>
              <a class="dropdown-item" href="#">Borrower Requests</a>
              <a class="dropdown-item" href="#">My Investments</a>
          </ul>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Business Oppotunity">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" data-target="#opporunity">
              <i class="vl_globe4"></i>
              <span class="nav-link-text">Business Opportunity </span>
          </a>
          <ul class="sidenav-second-level collapse" id="opporunity" data-parent="#accordion">
              <a class="dropdown-item" href="#">Trending</a>
              <a class="dropdown-item" href="#">Saved Opportunity</a>
              <a class="dropdown-item" href="#">Sent Requests</a>
              <a class="dropdown-item" href="#">Received Requests</a>
              <a class="dropdown-item" href="#">Create Opportunity</a>
              <a class="dropdown-item" href="#">All Opportunity</a>
          </ul>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Business Oppotunity">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" data-target="#cosultation">
              <i class="vl_globe4"></i>
              <span class="nav-link-text">Consultations </span>
          </a>
          <ul class="sidenav-second-level collapse" id="cosultation" data-parent="#accordion">
              <a class="dropdown-item" href="#">New consultation</a>
              <a class="dropdown-item" href="#">My Consultations</a>
          </ul>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Notifications">
          <a class="nav-link" >
              <i class="vl_alarm-clock"></i>
              <span class="nav-link-text">Notifications <span class="badge badge-primary">2</span></span>
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

<template>
  <ul class="navbar-nav header-links">
      <li class="nav-item ">
          <a class="nav-link mr-lg-2"  href="#" >
              Investments
          </a>
      </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle mr-lg-2" id="reportNav" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Business Opportunity
          </a>
          <div class="dropdown-menu" aria-labelledby="reportNav">
              <a class="dropdown-item" href="#">Trending</a>
              <a class="dropdown-item" href="#">Saved Opportunity</a>
              <a class="dropdown-item" href="#">My Requests</a>
              <a class="dropdown-item" href="#">Create Opportunity</a>
          </div>
      </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle mr-lg-2" id="orderNav" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Consultation
          </a>
          <div class="dropdown-menu" aria-labelledby="orderNav">
              <a class="dropdown-item" href="#">New consultation</a>
              <a class="dropdown-item" href="#">My Consultations</a>
          </div>
      </li>
  </ul>
</template>

<script>
  export default {
    name: 'portal-navigation'
  }
</script>

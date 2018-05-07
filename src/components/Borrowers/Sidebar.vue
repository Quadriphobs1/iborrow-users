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
              <i class="vl_fire-flame"></i>
              <span class="nav-link-text">Trending <span class="badge badge-danger">NEW</span></span>
          </a>
      </li>

      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Borrowers">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" data-target="#borrowers">
              <i class="vl_money"></i>
              <span class="nav-link-text">Investments </span>
          </a>
          <ul class="sidenav-second-level collapse" id="borrowers" data-parent="#accordion">
              <a class="dropdown-item" href="#">Featured Request</a>
              <a class="dropdown-item" href="#">Lending Requests</a>
              <a class="dropdown-item" href="#">Active Transactions</a>
              <a class="dropdown-item" href="#">My Lendings</a>
              <a class="dropdown-item" href="#">All Borrowers</a>
          </ul>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Investments">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" data-target="#investment">
              <i class="vl_rocket1"></i>
              <span class="nav-link-text">Borrowing </span>
          </a>
          <ul class="sidenav-second-level collapse" id="investment" data-parent="#accordion">
              <a class="dropdown-item" href="#">Create Borrowing Alert</a>
              <a class="dropdown-item" href="#">Investors Requests</a>
              <a class="dropdown-item" href="#">My Borrowings</a>
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
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Consultations">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" data-target="#cosultation">
              <i class="vl_question"></i>
              <span class="nav-link-text">Consultations </span>
          </a>
          <ul class="sidenav-second-level collapse" id="cosultation" data-parent="#accordion">
              <a class="dropdown-item" href="#">New consultation</a>
              <a class="dropdown-item" href="#">My Consultations</a>
          </ul>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Transactions">
          <a class="nav-link " >
              <i class="vl_money-bag"></i>
              <span class="nav-link-text">Transactions</span>
          </a>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Messages">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" data-target="#messages">
              <i class="vl_inbox"></i>
              <span class="nav-link-text">Messages </span>
          </a>
          <ul class="sidenav-second-level collapse" id="messages" data-parent="#accordion">
              <a class="dropdown-item" href="#">Inbox</a>
              <a class="dropdown-item" href="#">Sent</a>
          </ul>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Notifications">
          <a class="nav-link" >
              <i class="vl_alarm-clock"></i>
              <span class="nav-link-text">Notifications <span class="badge badge-primary">2</span></span>
          </a>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="My Profile">
          <router-link :to="{ name: 'borrowers.profile' }" class="nav-link" >
              <i class="vl_user-male"></i>
              <span class="nav-link-text">My Profile </span>
          </router-link>
      </li>

  </ul>
</template>

<script>
  export default {
    name: 'sidebar'
  }
</script>

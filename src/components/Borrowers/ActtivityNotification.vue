<template>
  <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle mr-lg-3" id="alertsDropdown" href="#" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <i class="vl_bell"></i>
          <span class="d-lg-none">Notification
              <span class="badge badge-pill badge-warning">5 New</span>
          </span>
          <div class="notification-alarm">
              <span class="wave wave-warning"></span>
              <span class="dot bg-warning"></span>
          </div>
      </a>

      <div class="dropdown-menu dropdown-menu-right header-right-dropdown-width pb-0" aria-labelledby="alertsDropdown">
          <h6 class="dropdown-header weight500">Notification</h6>

          <div class="dropdown-divider mb-0"></div>
          <a class="dropdown-item border-bottom" href="#">
              <span class="text-primary">
              <span class="weight500">
                  <i class="vl_bell weight600 pr-2"></i>Weekly Update</span>
              </span>
              <span class="small float-right text-muted">03:14 AM</span>

              <div class="dropdown-message f12">
                  This week project update report generated. All team members are requested to check the updates
              </div>
          </a>

          <a class="dropdown-item small" href="#">View all notification</a>
      </div>
  </li>
</template>

<script>
  export default {
    name: 'activity-notification'
  }
</script>

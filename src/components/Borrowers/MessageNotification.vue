<template>
  <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle mr-lg-3" id="messagesDropdown" href="#" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <i class="vl_chat-bubble"></i>
          <span class="d-lg-none">Messages
              <span class="badge badge-pill badge-primary">9 New</span>
          </span>
          <div class="notification-alarm">
              <span class="wave wave-danger"></span>
              <span class="dot"></span>
          </div>
      </a>

      <div class="dropdown-menu dropdown-menu-right header-right-dropdown-width pb-0" aria-labelledby="messagesDropdown">
          <h6 class="dropdown-header weight500 ">Messages</h6>
          <div class="dropdown-divider mb-0"></div>
          <a class="dropdown-item border-bottom msg-unread" href="#">
              <div class="float-left notificaton-thumb">
                  <img class="rounded-circle" src="assets/img/avatar/avatar4.jpg" alt=""/>
              </div>
              <span class="weight500">Andrew Flinton</span>
              <span class="small float-right text-muted">08:30 AM</span>

              <div class="dropdown-message">
                  I hope that you will be there in time. See you then
              </div>
          </a>
          <a class="dropdown-item small" href="#">View all messages</a>
      </div>
  </li>
</template>

<script>
  export default {
    name: 'message-notification'
  }
</script>

<template>
  <ul class="navbar-nav header-links ml-auto hide-arrow">
      <message-notification></message-notification>
      <actitivity-notification></actitivity-notification>
      <profile-navigation></profile-navigation>
  </ul>
</template>

<script>
  import MessageNotification from './MessageNotification'
  import ProfileNavigation from './ProfileNavigation'
  import ActitivityNotification from './ActtivityNotification'
  export default {
    name: 'top-navigation',
    components: {
      MessageNotification,
      ActitivityNotification,
      ProfileNavigation
    }
  }
</script>

<template>
  <ul class="navbar-nav sidenav-toggler">
      <li class="nav-item">
          <router-link :to="{ name: 'investors.profile' }"  tags="a" class="nav-link d-flex flex-row align-items-center" >
            <div class="user-thumb mr-2">
                <img class="rounded-circle" src="@/assets/img/avatar/avatar1.jpg" alt="" style="max-height:40px;" />
            </div>
            <p>{{userDisplayName.displayName}}</p>

          </router-link>
      </li>
  </ul>
</template>

<script>
  export default {
    name: 'foot-navigation',
    computed: {
      userDisplayName () {
        return this.$store.getters['auth/user']
      }
    }
  }
</script>

<template>
  <ul class="navbar-nav sidenav-toggler">
      <li class="nav-item">
          <a class="nav-link d-flex flex-row align-items-center" >
            <div class="user-thumb mr-2">
                <img class="rounded-circle" src="@/assets/img/avatar/avatar1.jpg" alt="" style="max-height:40px;" />
            </div>
            <p>{{userDisplayName.displayName}}</p>

          </a>
      </li>
  </ul>
</template>

<script>
  export default {
    name: 'foot-navigation',
    data () {
      return {
        name: null
      }
    },
    computed: {
      userDisplayName () {
        return this.$store.getters['auth/user']
      }
    },
    mounted () {
      console.log(this.userDisplayName)
    }
  }
</script>

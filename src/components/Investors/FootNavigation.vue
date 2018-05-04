<template>
  <ul class="navbar-nav sidenav-toggler">
      <li class="nav-item">
          <router-link :to="{ name: 'investors.profile' }"  tags="a" class="nav-link d-flex flex-row align-items-center" >
            <div class="user-thumb mr-2">
                <img class="rounded-circle" src="@/assets/img/avatar/avatar1.jpg" alt="" style="max-height:40px;" />
            </div>
            <p v-if="loading">{{name}}</p>
            <content-loader
              :height="25"
              :width="100"
              :speed="2"
              primaryColor="#f3f3f3"
              secondaryColor="#ccc"
              v-else
            >
              <rect x="0" y="0" rx="5" ry="5" width="100" height="10" />
            </content-loader>

          </router-link>
      </li>
  </ul>
</template>

<script>
  import { ContentLoader } from 'vue-content-loader'
  export default {
    name: 'foot-navigation',
    data () {
      return {
        name: null,
        loading: false
      }
    },
    methods: {
      async getDisplayName () {
        await this.$store.dispatch('auth/fetchUser')
        this.name = this.$store.getters['auth/user'].displayName
        this.loading = true
      }
    },
    mounted () {
      this.getDisplayName()
    },
    components: {
      ContentLoader
    }
  }
</script>

<template>
  <div v-if="loading">
      <h5 class="text-uppercase mb-0" >{{name}}</h5>
      <p class="text-muted mb-0">{{email}}</p>
  </div>
  <content-loader
    :height="15"
    :width="50"
    :speed="2"
    primaryColor="#f3f3f3"
    secondaryColor="#ccc"
    v-else
  >
    <rect x="0" y="0" rx="3" ry="3" width="50" height="5" />
    <rect x="0" y="8" rx="3" ry="3" width="50" height="5" />
  </content-loader>
</template>

<script>
  import { ContentLoader } from 'vue-content-loader'
  export default {
    name: 'profile-information-name',
    components: {
      ContentLoader
    },
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
    }
  }
</script>

<template>
  <div class="mt-4 mb-3">
      <div v-if="loading">
        <img class="rounded-circle" :src="image" width="85" alt="Profile Image"/>
      </div>

      <div v-else  class="profile-image-loader">
        <content-loader
          :height="10"
          :width="10"
          :speed="2"
          primaryColor="#f3f3f3"
          secondaryColor="#ccc"
        >
          <circle cx="5" cy="5" r="5" />
        </content-loader>
      </div>
  </div>
</template>

<script>
  import { ContentLoader } from 'vue-content-loader'
  export default {
    name: 'profile-image',
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      image: {
        type: String,
        required: true
      }
    },
    components: {
      ContentLoader
    }
  }
</script>

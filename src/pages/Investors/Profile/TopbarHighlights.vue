<template>
  <div class="d-inline-block px-1 text-left text-light col-3">
      <div v-if="loading">
        <strong class="f14 d-block text-capitalize">{{value}}</strong>
        <p>{{caption}}</p>
      </div>

      <div v-else>
        <content-loader
          :height="25"
          :width="100"
          :speed="2"
          primaryColor="#f3f3f3"
          secondaryColor="#ccc"
        >
          <rect x="0" y="0" rx="5" ry="5" width="100" height="10" />
          <rect x="0" y="15" rx="5" ry="5" width="100" height="10" />
        </content-loader>
      </div>

  </div>
</template>

<script>
  import { ContentLoader } from 'vue-content-loader'
  export default {
    name: 'topbar-highlight',
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      caption: {
        type: String,
        required: true
      },
      value: {
        required: true
      }
    },
    components: {
      ContentLoader
    }
  }
</script>

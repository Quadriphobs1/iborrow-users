<template>
  <transition name="page" mode="out-in">
    <div id="app">
      <loading ref="loading"></loading>
      <router-view/>
      <p>dashboard</p>
    </div>
  </transition>
</template>

<script>
import Loading from '@/components/Loading'
export default {
  name: 'dashboard',

  data: () => ({
  }),
  metaInfo () {
    return {
      title: 'iBorrow',
      titleTemplate: '%s · iBorrow',
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      bodyAttrs: { class: 'no-transition' },
      noscript: [ { innerHTML: 'This website requires JavaScript.' } ]
    }
  },
  components: {
    Loading
  },
  mounted () {
    this.$loading = this.$refs.loading
  }
}
</script>

<template>
  <transition name="page" mode="out-in">
    <div id="app">
      <loading ref="loading"></loading>
      <onboard-navigation></onboard-navigation>
      <router-view/>

      <main-footer></main-footer>
    </div>
  </transition>
</template>

<script>
import Loading from '@/components/Loading'
import OnboardNavigation from '@/components/OnboardNavigation'
import MainFooter from '@/components/MainFooter'
export default {
  name: 'onboard',

  data: () => ({
  }),
  metaInfo () {
    return {
      title: 'Onboard',
      titleTemplate: '%s · iBorrow',
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      bodyAttrs: { class: 'fixed-nav top-nav' },
      noscript: [ { innerHTML: 'This website requires JavaScript.' } ]
    }
  },
  components: {
    Loading,
    OnboardNavigation,
    MainFooter
  },
  mounted () {
    this.$loading = this.$refs.loading
  }
}
</script>

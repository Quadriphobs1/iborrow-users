<template>
  <transition name="page" mode="out-in">
    <div id="app">
      <loading ref="loading"></loading>
      <register-navigation></register-navigation>
      <router-view/>

      <main-footer></main-footer>
    </div>
  </transition>
</template>

<script>
import Loading from '@/components/Loading'
import RegisterNavigation from '@/components/RegisterNavigation'
import MainFooter from '@/components/MainFooter'
export default {
  name: 'register',

  data: () => ({
  }),
  metaInfo () {
    return {
      title: 'Become a member',
      titleTemplate: '%s · iBorrow',
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      bodyAttrs: { class: 'fixed-nav top-nav' },
      noscript: [ { innerHTML: 'This website requires JavaScript.' } ]
    }
  },
  components: {
    Loading,
    RegisterNavigation,
    MainFooter
  },
  mounted () {
    this.$loading = this.$refs.loading
  }
}
</script>

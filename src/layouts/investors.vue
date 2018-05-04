<template>
  <transition name="page" mode="out-in">
    <div id="app">
      <loading ref="loading"></loading>
      <topbar></topbar>
      <div class="content-wrapper cont-wrapper">
        <router-view/>
        <main-footer></main-footer>
      </div>
    </div>
  </transition>
</template>

<script>
import Loading from '@/components/Loading'
import Topbar from '@/components/Investors/Topbar'
import MainFooter from '@/components/MainFooter'
export default {
  name: 'investors',

  data: () => ({
  }),
  metaInfo () {
    return {
      title: 'iBorrow',
      titleTemplate: '%s · iBorrow',
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      bodyAttrs: { class: 'fixed-nav' },
      noscript: [ { innerHTML: 'This website requires JavaScript.' } ]
    }
  },
  components: {
    Loading,
    Topbar,
    MainFooter
  },
  mounted () {
    this.$loading = this.$refs.loading
  }
}
</script>

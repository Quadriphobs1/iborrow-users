<template>
<div >
  <activate-notification v-if="accountActivated" :name="name"></activate-notification>
  <router-view></router-view>
</div>
</template>
<script>
import ActivateNotification from '@/components/Investors/ActivateNotification'
export default {
  name: 'investors-dashboard',
  components: {
    ActivateNotification
  },
  data () {
    return {
      accountActivated: false,
      name: null
    }
  },
  methods: {
    // Check if the user account is activated, if o display the notification for the user to activate account
    async fetchActivationStatus () {
      await this.$store.dispatch('auth/fetchUser')
      const activationStatus = this.$store.getters['auth/user'].verified
      if (!activationStatus) {
        this.accountActivated = true
        this.name = this.$store.getters['auth/user'].displayName
      }
    }
  },
  mounted () {
    this.fetchActivationStatus()
  }

}
</script>

<template>
  <div class="content-wrapper">
    <section class="section-box">
      <div class="container">
        <div class="row d-flex justify-content-center text-center align-items-center">

          <div class="col-md-9 col-lg-7 ">
            <h1 class="text-center">Welcome back Quadri</h1>
            <p>Your account is now active on iBorrow, now let's make things official, let's know more about you so we can serve you better on iBorrow. </p>
            <h3>Got through the following step</h3>
            <step-action v-if="loaded" :region="preferedRegion" :personalInformation="personalInformation" :phoneNumber="phoneNumber"></step-action>
            <div class="card card-shadow mb-4" v-else>
              <div class="card-body">

                <content-loader
                  :height="80"
                  :width="450"
                  :speed="2"
                  primaryColor="#f3f3f3"
                  secondaryColor="#ccc"

                >
                  <rect x="80" y="15" rx="4" ry="4" width="250" height="6.4" />
                  <rect x="80" y="35" rx="3" ry="3" width="200" height="6.4" />
                  <rect x="80" y="55" rx="3" ry="3" width="150" height="6.4" />
                  <circle cx="36" cy="40" r="36" />
                </content-loader>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
  import { ContentLoader } from 'vue-content-loader'
  import StepAction from './StepAction'
  export default {
    name: 'onboard-step-one',
    data () {
      return {
        loaded: false,
        addedAddress: false,
        preferedRegion: false,
        personalInformation: false,
        phoneNumber: false
      }
    },
    components: {
      ContentLoader,
      StepAction
    },
    mounted () {
      this.getUserInformation()
    },
    methods: {
      async getUserInformation () {
        await this.$store.dispatch('auth/fetchUser')
        const contactInformation = this.$store.getters['auth/user'].contactInformation

        if (contactInformation.region) {
          this.preferedRegion = true
        }

        function isEmpty (obj) {
          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              return false
            }
          }
          return true
        }
        if (isEmpty(contactInformation.personalInformation)) {
          this.personalInformation = true
        }
        console.log(contactInformation.personalInformation)

        if (contactInformation.verifiedPhone && contactInformation.phoneNumber) {
          this.phoneNumber = true
        }
        this.loaded = true
      }
    }
  }
</script>

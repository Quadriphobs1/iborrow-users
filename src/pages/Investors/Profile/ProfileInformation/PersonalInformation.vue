<template>
  <div>
    <table class="table table-hover text-left table-striped">
      <tr>
        <td>Username</td>
        <td class="text-primary">@{{username}}</td>
      </tr>
      <tr>
        <td>Phone Number</td>
        <td>0909090909090</td>
      </tr>
      <tr>
        <td>State</td>
        <td>Abuja</td>
      </tr>
      <tr>
        <td>Region</td>
        <td>Abuja</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import { ContentLoader } from 'vue-content-loader'
  export default {
    name: 'personal-information',
    components: {
      ContentLoader
    },
    props: {
      username: {
        type: String
      },
      phoneNumber: {
        type: String
      }
    }
  }
</script>

<template>
  <div class="col-xl-4 col-md-6 profile-info-position">
      <profile-information></profile-information>
      <profile-activities></profile-activities>
  </div>
</template>

<script>
  import ProfileActivities from './Activities'
  import ProfileInformation from './Information'
  export default {
    name: 'profile-sidebar',
    components: {
      ProfileActivities,
      ProfileInformation
    }
  }
</script>

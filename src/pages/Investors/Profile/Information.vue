<template>
  <div class="card card-shadow mb-4 ">
      <div class="card-body">
          <div class="text-center">
              <profile-image></profile-image>
              <h5 class="text-uppercase mb-0">Jane Doe</h5>
              <p class="text-muted mb-0">Sr. Marketing Executive </p>
              <div class="rattings mb-4">
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star-o text-warning"></i>
              </div>
              <table class="table table-hover text-left table-striped">
                <tr>
                  <td>Phone Number</td>
                  <td>0909090909090</td>
                </tr>
                <tr>
                  <td>Email Address</td>
                  <td>myemail.com</td>
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

      </div>
  </div>
</template>

<script>
  import ProfileImage from './ProfileImage'
  export default {
    name: 'profile-information',
    components: {
      ProfileImage
    }
  }
</script>


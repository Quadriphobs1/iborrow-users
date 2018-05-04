<template>
  <div class="col-xl-4 col-md-6 profile-info-position">
      <div class="card card-shadow mb-4 ">
          <div class="card-body">
              <div class="text-center">
                  <div class="mt-4 mb-3">
                      <img class="rounded-circle" src="assets/img/avatar/avatar-large3.jpg" width="85" alt=""/>
                  </div>
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
      <profile-activities></profile-activities>
  </div>
</template>

<script>
  import ProfileActivities from './Activities'
  export default {
    name: 'profile-sidebar',
    components: {
      ProfileActivities
    }
  }
</script>

<template>
<div class="error-position">
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2 text-center ">
                <img class="img-fluid" src="@/assets/img/400.svg" alt="Error"/>
                <p class="text-muted f18 mt-4 mb-5">Ooops! Something went wrong. There is an error with your registration, this may happen due to some of the reason below.</p>
                <ul class="text-left">
                  <li>You are experiencing internet issue.</li>
                  <li>Your registration information is not correct</li>
                  <li>You registration was cancelled</li>
                  <li>Your registration was not successful</li>
                </ul>
                <div class="alert alert-secondary text-left" role="alert">
                    If you think this an issue, please send a message to <a href="mailto:support@iborrow.com" class="alert-link">support@iborrow.com</a> to address your issue.<br/>
                    Note: In many occasion this doesn't mean your registration was not successful, if you got a confirmation email for your registration, you can proceed to login to your acount and proceed with the relevant step.
                </div>
                <router-link :to="{ name: 'auth.login' }" tag="a" class="btn btn-purple btn-pill" >Proceed to login</router-link>
                <br>
                <br>
                <br>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'registration-error-page'

}
</script>

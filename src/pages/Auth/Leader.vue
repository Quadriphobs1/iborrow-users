<template>
<section class="section-box">
    <div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-sm-10 col-lg-6 text-center">
            <h1 >Let's Start The Journey!</h1>
            <p>Change the way you operate your business. Thanks to iBorrow, you can now get enough focus on yur business and have capital to fund your business.</p>
            <router-link :to="{name:'auth.register.borrowers'}" class="btn btn-primary " tag="a">Become a borrower</router-link>
        </div>
    </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'leader',

  data: () => ({
  })
}
</script>

<template>
  <div class="content-wrapper">
    <section class="section-box">
      <div class="container">
        <div class="row d-flex justify-content-center text-center align-items-center">
          <div class="col-md-7">
            <div class="c-hero__img">
              <!-- TODO: Change image used to represen the preview on the registrtaion intro page -->
              <img class="c-hero__laptop img-fluid" src="@/assets/img/hero.png" alt="iBorrow">

              <span class="c-hero__circle1"></span>
              <span class="c-hero__circle2"></span>
              <span class="c-hero__circle3"></span>
              <span class="c-hero__circle4"></span>

              <span class="c-hero__circle5 c-hero__circle--small"></span>
              <span class="c-hero__circle6 c-hero__circle--small"></span>
              <span class="c-hero__circle7 c-hero__circle--small"></span>
              <span class="c-hero__circle8 c-hero__circle--small"></span>
            </div>
            
          </div>
          <div class="col-md-7">
            <h1>iBorrow</h1>
            <p>P2P Lending provides alternative investment option to Investors and affordable P2P loans to Borrowers</p>
          </div>
        </div>
        <div class="row d-flex justify-content-center align-items-center mt-5">
          <div class="col-lg-4 col-md-5 mb-3">
            <article class="card car-shadow card-animated card-borderless">
              <div class="card-body">
                <div class="box-image-sm d-flex justify-content-center align-items-center">
                  <img src="@/assets/img/icon/investor.png" />
                </div>
                <h2>Investors</h2>
                <p>A pixel-perfect design based on modern design trends with great attention to small details for better user experience.</p>
                <router-link :to="{ name: 'auth.register.investors' }" tag="a" class="btn btn-primary ">Become an investor</router-link>
              </div>
            </article>
          </div>
          <div class="col-lg-4 col-md-5 mb-3">
            <article class="card car-shadow card-animated card-borderless">
              <div class="card-body">
                <div class="box-image-sm d-flex justify-content-center align-items-center">
                  <img src="@/assets/img/icon/investor.png" />
                </div>
                <h2>Borrower</h2>
                <p>A pixel-perfect design based on modern design trends with great attention to small details for better user experience.</p>
                <router-link :to="{name:'auth.register.borrowers'}" class="btn btn-primary " tag="a">Become a borrower</router-link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <mini-caption></mini-caption>
    <leader></leader>
  </div>
</template>
<script>
import MiniCaption from './MiniCaption'
import Leader from './Leader'
export default {
  name: 'register',
  components: {
    MiniCaption,
    Leader
  }
}
</script>

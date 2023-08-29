<template>
  <main>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
      <div class="col-md-6 p-lg-5 mx-auto my-5">
        <h1 class="display-3 fw-bold">Your teachers have been grading you</h1>
        <h2 class="fw-normal text-muted mb-3">Its time you grade them</h2>
        <div class="d-flex gap-3 justify-content-center lead fw-normal">
          <a class="icon-link" href="/teachers">
            Lets go <svg class="bi">
              <use xlink:href="#chevron-right" />
            </svg>
          </a>
          <a class="icon-link" href="/contact">
            Contact Us
            <svg class="bi">
              <use xlink:href="#chevron-right" />
            </svg>
          </a>
        </div>
      </div>

    </div>

    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div class="my-3 py-3">
          <h2 class="display-5">Just got your schedule?</h2>
          <p class="lead"><strong>Check</strong> how others feel about your teachers or professors!</p>
        </div>
        <div class="bg-body-tertiary shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
          <div style="padding: 50px"> </div>
          <h1 class="display-1 fw-bold text text-dark">Check</h1>
        </div>
      </div>
      <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div class="my-3 p-3">
          <h2 class="display-5">Have a teacher your feel strongly about?</h2>
          <p class="lead"><strong>Share</strong> your thoughts with the world! </p>
        </div>
        <div class="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
          <div style="padding: 50px"> </div>
          <h1 class="display-1 fw-bold text text-light">Share</h1>
        </div>
      </div>
    </div>

    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div class="my-3 p-3">
          <h2 class="display-5">You're a teacher?</h2>
          <p class="lead"><strong>See</strong> what students have to say about you and improve your teaching!</p>
        </div>
        <div class="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
          <div style="padding: 50px"> </div>
          <h1 class="display-1 fw-bold text text-light">See</h1>
        </div>
      </div>
      <div class="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div class="my-3 py-3">
          <h2 class="display-5">You're an administrator?</h2>
          <p class="lead"><strong>Find</strong> out which of your teachers are preforming well!</p>
        </div>
        <div class="bg-body-tertiary shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
          <div style="padding: 50px"> </div>
          <h1 class="display-1 fw-bold text text-dark">Find</h1>
        </div>
      </div>
    </div>


  </main>
</template>

<script>


export default {
  name: 'HomeView',
  components: {

  }
}
</script>
<style scoped>
.container {
  max-width: 960px;
}

.icon-link>.bi {
  width: .75em;
  height: .75em;
}

/*
 * Custom translucent site header
 */

.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}

.site-header a {
  color: #8e8e8e;
  transition: color .15s ease-in-out;
}

.site-header a:hover {
  color: #fff;
  text-decoration: none;
}

/*
 * Dummy devices (replace them with your own or something else entirely!)
 */

.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  transform: rotate(30deg);
}

.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, .1);
  border-radius: 5px;
}

.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}


/*
 * Extra utilities
 */

.flex-equal>* {
  flex: 1;
}

@media (min-width: 768px) {
  .flex-md-equal>* {
    flex: 1;
  }
}
</style>
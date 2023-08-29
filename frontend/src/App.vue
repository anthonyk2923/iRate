<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-liwarnght bg-success shadow-lg p-1 ">
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/logo.png" width="50" height="50" class="d-inline-block align-top m-1" alt="">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home <span class="sr-only "></span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/teachers">Teachers</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact Us</router-link>
        </li>
      </ul>
    </div>
    <span class="navbar-text"><a href="https://github.com/anthonyk2923/irate" target="_blank" rel="noopener noreferrer"
        class="nav-link nav-item text-dark">View our code</a></span>
    <a href="https://github.com/anthonyk2923/irate" target="_blank" rel="noopener noreferrer"
      class="nav-link nav-item text-dark">
      <img src="@/assets/github.png" width="30" height="30" class="d-inline-block align-top m-2"
        alt="View our code github logo"></a>
  </nav>
  <router-view />
</template>

<script>

</script>
<style></style>


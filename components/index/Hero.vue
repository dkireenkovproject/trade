<template>
  <section class="hero hero__bg">
    <div class="container">
      <div class="hero__wrap">
      <p class="hero__descr">
      Mark Trade Company is a direct importer of fruits and vegetables from Egypt, South Africa, Chile, Argentina and China</p>
      <p class="hero__descr">Our company is an importer and is registered at customs posts in countries such as Germany, Italy, Spain, the Czech Republic.</p>
      <p class="hero__descr">We have our own funds to service this volume of imported goods.</p>
    </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.hero {
  position: relative;
  &__bg {
    background-image: url('/img/header-logo.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 500px;
  }
  &__wrap {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-30%, -50%);
    max-width: 600px;
    width: 100%;
  }
  &__descr {
    margin-bottom: 15px;
    color:#69cc8c;
font-size: 18px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
&:last-child {
  margin-bottom: 0;
}
  }
}
</style>
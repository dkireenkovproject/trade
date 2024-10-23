<template>
  <section class="header">
    <div class="container">
      <div class="header__wrap">
      <div class="header__contect"><NuxtLink class="header__logo-link" to="/"><img class="header__logo" src="/img/logo.png"><h1 class="header__title">Mark Trade</h1></NuxtLink></div>
      <nav class="header__nav">
        <ul class="list-reset header__list"><li class="header__item"><a class="header__link" href="mailto:contact@mail.com">Contact1@marktrade.com</a></li><li class="header__item"><a class="header__link" href="mailto:contact@mail.com">Contact2@marktrade.com</a></li></ul></nav>
    </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.header {
  padding: 20px 0 20px 0;
  &__logo-link {
    display: flex;
    align-items: center; 
    text-decoration: none;
  }
  &__title {
    color:#0F3C1F;
font-size: 30px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__list {
    display: flex;
    gap: 30px;
  }
  &__link {
    color:#0F3C1F;
font-size: 20px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
text-decoration: none;
  }
}
</style>
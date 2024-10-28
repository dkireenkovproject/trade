<template>
  <section class="header">
    <div class="container">
      <div class="header__wrap">
      <div class="header__contect"><NuxtLink class="header__logo-link" to="/"><img class="header__logo" src="/img/logo.png"><h1 class="header__title">Mark Trade Company L.L.C-FZ</h1></NuxtLink></div>
      <nav class="header__nav">
        <ul class="list-reset header__list"><li class="header__item"><NuxtLink to="/" class="header__link">Home</NuxtLink></li><li class="header__item"><NuxtLink to="/about" class="header__link">About</NuxtLink></li><li class="header__item"><NuxtLink to="/contacts" class="header__link">Contacts</NuxtLink></li></ul></nav>
    </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.header {
  padding: 50px 0 50px 0;
  @media (max-width: 690px) {
    padding: 30px 0 30px 0;
  }
  &__logo-link {
    display: flex;
    align-items: center; 
    text-decoration: none;
   }
  &__logo {
    @media (max-width: 690px) {
    height: 70px;
    width: 60px;
  }
}
  &__title {
    color:#0F3C1F;
font-size: 30px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
@media (max-width: 690px) {
  font-size: 20px;
  text-align: center;
   }
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 798px) {
    flex-direction: column;
    gap: 20px;
   }
  }
  &__list {
    display: flex;
    gap: 50px;
    @media (max-width: 372px) {
    gap: 30px;
  }
  }
  &__link {
    position: relative;
    color:#0F3C1F;
font-size: 30px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
text-decoration: none;
    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #0F3C1F;
      transition: width 0.3s ease-in-out;
      transform: scale(0);
      transition: all 0.3s ease-in-out;
    }
    &:hover::after {
      transform: scale(1);
    }
    @media (max-width: 690px) {
  font-size: 20px;
   }
  }
}
</style>
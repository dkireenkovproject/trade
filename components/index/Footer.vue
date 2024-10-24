<template>
  <section class="footer">
    <div class="container">
      <div class="footer__wrap">
        <div class="footer__content-1">
          <span class="footer__title">Navigation</span>
          <ul class="list-reset footer__list">
            <li class="footer__item"><NuxtLink class="footer__link" to="/contacts">Contacts</NuxtLink></li>
            <li class="footer__item"><NuxtLink class="footer__link" to="/about">About</NuxtLink></li>
          </ul>
          </div>
        <div class="footer__content-2"> 
          <span class="footer__link">
            Copyright 2024 MarkTrade</span>
        </div>
        <div class="footer__content-3">
          <span class="footer__title">JOIN OUR COMMUNITY</span>
          <ul class="list-reset footer__list-2">
            <li class="footer__item"><a class="footer__link"><img class="footer__logo" src="/img/Facebook.png"></a></li>
            <li class="footer__item"><a class="footer__link"><img class="footer__logo" src="/img/Telegram.png"></a></li>
            <li class="footer__item"><a class="footer__link"><img class="footer__logo" src="/img/Instagram.png"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.footer {
  background: #0F3C1F;
  padding: 60px 0 60px 0;
  &__wrap {
display: grid;
grid-template-columns: repeat(12, 1fr);
width: 100%;
  }
  &__content-1 {
    grid-column: 1 / span 4;
     @media (max-width: 738px) {
    grid-column: 1 / span 12;
    grid-row: 1 / span 1;
    margin-bottom: 30px;
   }
   @media (max-width: 372px) {
    margin-bottom: 20px;
}
  }
  &__content-2 {
    grid-column: 5 / span 2;
    @media (max-width: 1330px) {
    grid-column: 8 / span 5;
   }
   @media (max-width: 738px) {
    grid-column: 1 / span 12;
    grid-row: 2 / span 2;
    margin-bottom: 50px;

   }
  }
  &__content-3 {
    grid-column: 9 / span 4;
   @media (max-width: 1330px) {
    grid-column: 1 / span 12;
    grid-row: 2 / span 2;
   }
   @media (max-width: 738px) {
    grid-column: 1 / span 12;
    grid-row: 3 / span 3;
   }
  }
  &__content-1 {
    display: flex;
    flex-direction: column;
justify-content: center;
@media (max-width: 738px) {
  align-items: center;
   }
   @media (max-width: 520px) {
    align-items: flex-start;
}
  }
  &__content-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 520px) {
      justify-content: flex-start;
}
  }
  &__content-3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 520px) {
      align-items: flex-start;
}
  }
  &__title {
    margin-bottom: 10px;
    color:#fff;
font-size: 30px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
text-decoration: underline;
@media (max-width: 738px) {
  font-size: 20px;
   }
   @media (max-width: 372px) {
  font-size: 18px;
}
  }
  &__link {
    color:#fff;
font-size: 20px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
text-decoration: none;
@media (max-width: 372px) {
  font-size: 18px;
}
  }
  &__list-2 {
    display: flex;
    gap: 7px;
  }
  &__logo {
    @media (max-width: 738px) {
width: 30px;
height: 30px;   }
  }
}
</style>
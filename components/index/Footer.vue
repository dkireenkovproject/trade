<template>
  <section class="footer">
    <div class="container">
      <div class="footer__wrap">
        <div class="footer__content-1">
          <span class="footer__title">CONTACT US</span>
          <ul class="list-reset footer__list">
            <li class="footer__item"><a class="footer__link" href="mailto:contact@mail.com">Contact1@marktrade.com</a></li>
            <li class="footer__item"><a class="footer__link" href="mailto:contact@mail.com">Contact2@marktrade.com</a></li>
          </ul>
          </div>
        <div class="footer__content-2"> 
          <span class="footer__link">
            Copyright 2024 MarkTrade</span>
        </div>
        <div class="footer__content-3">
          <span class="footer__title">JOIN OUR COMMUNITY</span>
          <ul class="list-reset footer__list-2">
            <li class="footer__item"><a class="footer__link" href="mailto:contact@mail.com"><img class="footer__logo" src="/img/Facebook.png"></a></li>
            <li class="footer__item"><a class="footer__link" href="mailto:contact@mail.com"><img class="footer__logo" src="/img/Telegram.png"></a></li>
            <li class="footer__item"><a class="footer__link" href="mailto:contact@mail.com"><img class="footer__logo" src="/img/Instagram.png"></a></li>
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
  }
  &__content-1 {
    grid-column: 1 / span 4;
  }
  &__content-2 {
    grid-column: 6 / span 2;
  }
  &__content-3 {
    grid-column: 10 / span 3;
  }
  &__content-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__content-2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__content-3 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title {
    margin-bottom: 10px;
    color:#fff;
font-size: 30px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
text-decoration: none;
  }
  &__link {
    color:#fff;
font-size: 20px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
text-decoration: none;
  }
  &__list-2 {
    display: flex;
    gap: 7px;
  }
}
</style>
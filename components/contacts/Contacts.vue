<template>
  <section class="contacts contacts__bg">
    <div class="container">
      <h2 class="contacts__title">Contact us</h2>
<div class="contacts__wrap">
  <div class="contacts__content-1">
    <ul class="list-reset contacts__list">
      <li class="contacts__item"><img class="contacts__logo" src="/img/message.png"><a class="contacts__link" href="mailto:">contact1@marktrade.com</a></li>
      <li class="contacts__item"><img class="contacts__logo" src="/img/message.png"><a class="contacts__link" href="mailto:">contact1@marktrade.com</a></li>
      <li class="contacts__item"><img class="contacts__logo" src="/img/mobile.png"><a class="contacts__link" href="tel:">+45 123 456 789</a></li>
      <li class="contacts__item"><img class="contacts__logo" src="/img/mobile.png"><a class="contacts__link" href="tel:">+45 123 456 789</a></li>
    </ul>  
  </div>
</div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.contacts {
  padding-bottom: 100px;
  @media (max-width:676px) {
    padding-bottom: 50px;
}
  &__wrap {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  &__content-1 {
    grid-column: 1 / span 5;
    display: flex;
    flex-direction: column;
    @media (max-width:676px) {
      grid-column: 1 / span 12;
}
  }
  &__title {
    padding-top: 60px;
    margin-bottom: 170px;
    color:#0F3C1F;
font-size: 70px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
@media (max-width: 1024px) {
  font-size: 50px;
  margin-bottom: 70px;
}
@media (max-width:676px) {
  font-size: 25px;
  margin-bottom: 20px;
}
  }
  &__link {
    color:#000000;
font-size: 35px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
text-decoration: none;
@media (max-width: 1308px) {
  font-size: 30px;
}
@media (max-width: 1024px) {
  font-size: 20px;
}
@media (max-width:676px) {
  font-size: 16px;
}
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    
  }
  &__dash {
    border-right: 2px solid #287c45;
  }
  &__logo {
    width: 40px;
    height: 40px;
    @media (max-width: 1024px) {
      width: 30px;
      height: 30px;
}
@media (max-width:676px) {
  width: 20px;
  height: 20px;
}
  }
  &__item {
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width:676px) {
      gap: 10px;
}
  }
  &__bg {
    background-image: url('/img/contacts.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 850px;
    @media (max-width: 1308px) {
      min-height: 750px;
    }
    @media (max-width: 1130px) {
      min-height: 650px;
    }
    @media (max-width: 966px) {
      min-height: 450px;
    }
    @media (max-width:676px) {
      min-height: 250px;
      background-image: url('/img/contacts-1.jpg');
}
  }
}
</style>
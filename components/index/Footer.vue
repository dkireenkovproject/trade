<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrap">
        <nav class="footer__content-1">
          <ul class="list-reset footer__list">
            <li class="footer__item"><NuxtLink class="footer__link" to="/contacts">Contacts</NuxtLink></li>
            <li class="footer__item"><NuxtLink class="footer__link" to="/about">About</NuxtLink></li>
          </ul>
        </nav>
        <div class="footer__content-2"> 
          <p class="footer__link-2">
            &copy; 2024 MarkTrade</p>
        </div>
        <div class="footer__content-3">
          <span class="footer__title">JOIN OUR COMMUNITY</span>
          <ul class="list-reset footer__list-2">
            <li class="footer__item"><a class="footer__link" target="_blank" rel="noopener noreferrer"><img class="footer__logo" src="/img/Facebook.png" alt="Facebook logo"></a></li>
            <li class="footer__item"><a class="footer__link" target="_blank" rel="noopener noreferrer" href="https://t.me/+971585574405"><img class="footer__logo" src="/img/Telegram.png" alt="Telegram logo"></a></li>
            <li class="footer__item"><a class="footer__link" target="_blank" rel="noopener noreferrer"><img class="footer__logo" src="/img/Instagram.png" alt="Instagram logo"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.footer {
  background: #0F3C1F;
  padding: 75px 0 75px 0;
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
font-size: 25px;
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
font-size: 25px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
text-decoration: none;
@media (max-width: 372px) {
  font-size: 18px;
}
  }
&__link-2 {
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
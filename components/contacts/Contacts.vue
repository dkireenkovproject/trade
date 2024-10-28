<template>
  <section class="contacts contacts__bg">
    <div class="container">
      <h2 class="contacts__title">Contact</h2>
<div class="contacts__wrap">
  <div class="contacts__content-1">
    <ul class="list-reset contacts__list">
      <li class="contacts__item"><span class="contacts__text">Company Name</span>
        <span class="contacts__link">Mark Trade Company L.L.C-FZ</span></li>
      <li class="contacts__item"><span class="contacts__text">Company Address</span>
        <span class="contacts__link">Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.</span></li>
      <li class="contacts__item"><span class="contacts__text">Mail</span>
        <div class="contacts__wrap-items"><img class="contacts__logo" src="/img/message.png"><a class="contacts__link" href="mailto:">cpofficer@marktradecompany.com</a></div></li>
        <li class="contacts__item"><span class="contacts__text">Telephone</span>
          <div class="contacts__wrap-items"><img class="contacts__logo" src="/img/mobile.png"><a class="contacts__link" href="tel:+971585574405">+971 58 557 4405</a></div></li>
    </ul>  
  </div>
  <div class="contacts__content-2">
    <h3 class="contacts__subtitle">Your Message</h3>
    <form @submit.prevent="sendForm" id="form" name="form" class="contacts__form" method="POST" >
      <div class="contacts__form-wrap">
        <label class="contacts__form-label" for="name">Name</label>
        <input class="contacts__form-input" type="text" name="name" id="name" placeholder="Your name" required v-model="Yourname" autocomplete="off">
      </div>
      <div class="contacts__form-wrap">
        <label class="contacts__form-label" for="name">E-Mail</label>
        <input class="contacts__form-input" type="email" name="E-Mail" id="E-Mail" placeholder="Your E-Mail" required v-model="Youremail" autocomplete="off">
      </div>
      <div class="contacts__form-wrap">
        <label class="contacts__form-label" for="name">Message</label>
        <textarea class="contacts__form-input-2" name="message" id="message" placeholder="Your message" required v-model="Yourmessage" autocomplete="off"></textarea>
      </div>
    </form>
    <div class="contacts__btn-wrap"><button class="btn-reset contacts__btn" form="form" type="submit">Submit</button></div> 
  </div>
</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const { $api } = useNuxtApp();
const useRepo = repositoryApi($api);
const Yourname = ref('')
const Youremail = ref('')
const Yourmessage = ref('')

const sendForm = async () => {
   const body = {
     name : Yourname.value,
     mail : Youremail.value,
     surname : Yourmessage.value,
     phone: ''
   }
   try {
    await useRepo.sendContactForm(body);
   console.log('Message sent successfully')
     } 
   catch (error) {
    console.error('Error sending message:', error)
   } finally {
    Yourname.value = ''
    Youremail.value = ''
    Yourmessage.value = ''
   }
}
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
    grid-column: 1 / span 6;
    display: flex;
    flex-direction: column;
    @media (max-width: 1198px) {
     margin-bottom: 50px;
     grid-column: 1 / span 8;
     grid-row: 1 / span 1; 
    }
    @media (max-width: 500px) {
      grid-column: 1 / span 12;
    }
  }
  &__content-2 {
    grid-column: 9 / span 4;
    display: flex;
    flex-direction: column;
    @media (max-width: 1198px) {
      grid-column: 1 / span 8;
     grid-row: 2 / span 2; 
    }
    @media (max-width: 1198px) {
      grid-column: 1 / span 10;
     grid-row: 2 / span 2; 
    }
    @media (max-width: 500px) {
      grid-column: 1 / span 12;
     grid-row: 2 / span 2; 
    }
  }
  &__title {
    padding-top: 60px;
    margin-bottom: 70px;
    color:#0F3C1F;
font-size: 70px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
@media (max-width: 700px) {
  margin-bottom: 30px;
  font-size: 40px;
    }
  }
  &__link {
    color:#000000;
font-size: 30px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
text-decoration: none;
@media (max-width: 700px) {
  font-size: 20px;
    }
    @media (max-width: 390px) {
      font-size: 16px;
    }
    @media (max-width: 390px) {
      font-size: 14px;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 25px;
    
  }
  &__dash {
    border-right: 2px solid #287c45;
  }
  &__logo {
    width: 40px;
    height: 40px;
    @media (max-width: 700px) {
      width: 20px;
      height: 20px;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;

  }
  &__bg {
    background-image: url('/img/contacts-1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 850px;
//     @media (max-width: 1308px) {
//       min-height: 750px;
//     }
//     @media (max-width: 1130px) {
//       min-height: 650px;
//     }
//     @media (max-width: 966px) {
//       min-height: 450px;
//     }
//     @media (max-width:676px) {
//       min-height: 250px;
//       background-image: url('/img/contacts-1.jpg');
// }
  }
  &__wrap-items {
    display: flex;
    gap: 5px;
    align-items: center;
//     @media (max-width:676px) {
//       gap: 2px;
// }
  }
  &__text {
    color:#0F3C1F;
font-size: 35px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
text-decoration: none;
@media (max-width: 700px) {
  font-size: 25px;
    }
  }
  &__subtitle {
    margin-bottom: 30px;
    color:#0F3C1F;
font-size: 35px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
text-decoration: none;
@media (max-width: 700px) {
  margin-bottom: 20px;
  font-size: 30px;
    }
  }
  &__form-wrap {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  &__form {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
  &__form-label {
    color:#000000;
font-size: 20px;
font-style: normal;
font-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
text-decoration: none;
@media (max-width: 390px) {
      font-size: 16px;
    }
  }
  &__form-input {
    outline: none;
    width: 100%;
    min-height: 50px;
    padding: 0 10px;
    border: 2px solid #287c45;
  }
  &__form-input-2 {
    outline: none;
    width: 100%;
    min-height: 50px;
    padding: 20px 10px;
    border: 2px solid #287c45;
    background: #ffffff;
    resize: none; 
  }
  &__btn-wrap {
    display: flex;
    justify-content: center;
  }
  &__btn {
    background: #287c45;
    padding: 12px 70px;
    color:#ffffff;
    border-radius: 30px;
    font-size: 20px;
    text-transform: uppercase;
    @media (max-width: 390px) {
      font-size: 16px;
    }
  }
}
</style>
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
    min-height: 750px;
    @media (max-width: 798px) {
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/header-logo.jpg');
      min-height: 450px;
    }
    @media (max-width: 520px) {
      min-height: 350px;
  }
  @media (max-width: 400px) {
      min-height: 300px;
  }
  }
  &__wrap {
    position: absolute;
    top: 50%;
    right: 3%;    // Сдвигаем блок с текстом ближе к левой стороне
    transform: translateY(-50%);
    max-width: 700px;
    width: 90vw;       // Используем 90% ширины экрана
  }
  &__descr {
    width: 100%;
    margin-bottom: 15px;
    text-align: left;   // Выравниваем текст по левому краю
    color:#69cc8c;
    font-size: calc(1.2vw + 12px); // Шрифт адаптивныйfont-family: 'Inter';
font-weight: 400;
letter-spacing: 0.6px;
&:last-child {
  margin-bottom: 0;
}
@media (max-width: 798px) {
  font-weight: 700;
}
  }
}
</style>
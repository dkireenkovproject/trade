<template>
  <section class="about">
    <div class="container">
    <div class="about__wrap">
      <div class="about__content about__bg-1">
        <div class="about__wrap-block">
        <p class="about__descr">In Egypt, we sell this range of goods to international retail chains such as Walmart, cash & carry — Costco Wholesale Corp, Walgreens Boots Alliance, Kroger Co, Lidl and Kaufland
Our company has a weekly requirement for purchasing 30 containers - 40 per week from January 1 to January 31.
The cost price of 1 container of fruit will be from $ 20 to $ 30,000 depending on the purchased item.
We plan to make this purchase with the Arab Republic of Egypt.
Logistics from the port of Alexandria to the port of European ports is 5 days. Customs clearance of cargo is 2 days, and delivery to final unloading is 2 days. Thus, from the moment of loading to the moment of sale of goods and receipt of revenue, the turnover cycle is 14 days...
</p>
<div class="about__link-wrap"><NuxtLink class="about__link" to="/chapter-1">Read more</NuxtLink></div>
</div>
      </div>
      <div class="about__content about__bg-2">
        <div class="about__wrap-block">
        <p class="about__descr"> Since March, we plan to make purchases in South Africa.
Logistics from the Port of Cape Town to the port of St. Petersburg is 21 days.
Our company has financial resources for customs clearance, which is about 30% of the cost of the goods. We will do it ourselves.
The turnover cycle of the requested loan will be 30 days for the first delivery, from the day of loading until the moment of sale of the goods in European countries. For the second, third and subsequent deliveries, the turnover cycle will be 21 days.
A week from 18-20 containers per week in March, April and May. The cost of 1 invoice of Abbot pears will be $ 18-20,000. That is, the need per week in monetary terms will be $ 200-360,000. Consequently, per month $ 1,140,000...
</p>
<div class="about__link-wrap"><NuxtLink class="about__link" to="/chapter-2">Read more</NuxtLink></div>
</div>
      </div>
    </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.about {
  padding: 100px 0;
  background-color: #f4f4f4;

  &__wrap {
    display: flex;
    justify-content: center;
    gap: 50px;
  }
&__wrap-block {
  height: 100%;
  width: 100%;
  display: flex;
 flex-direction: column;
}
  &__content {
    position: relative;
    max-width: 500px;
    min-height: 500px;
    display: inline-block;
    padding: 200px 25px 25px 25px;
    vertical-align: top;
    background-color: #ffffff;
    border-radius: 15px; 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    &::before {
      content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 180px;
  background-size: cover;
    }
  }
  &__bg-1::before {
  background-image: url(/img/bg1.png);
  border-radius: 15px; 
  }
  &__bg-2::before {
  background-image: url(/img/bg3.jpg);
  border-radius: 15px; 
  }

  &__descr {
    margin-bottom: 40px;
    text-align: center;
    color: #0F3C1F;
    font-size: 18px;
    line-height: 1.6;
    font-family: 'Inter';
    font-weight: 400;
    letter-spacing: 0.6px;
    text-decoration: none;
  }

  &__block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    border-radius: 15px;
  }
  &__link {
    color: #ffffff;
    padding: 12px 62px;
    background: #0F3C1F;
    border-radius: 30px;
    font-size: 22px;
    font-family: 'Inter';
    font-weight: 400;
    text-decoration: none;
  }
  &__link-wrap {
    margin-top: auto;
    display: flex;
    justify-content: center;
  }
}
</style>
<template>
  <div>
<IndexHero />
  </div>
</template>

<script lang="ts" setup>
const { $api } = useNuxtApp();
const useRepo = repositoryApi($api);

useHead({
  title: 'Главная страница | Мой Сайт',
  meta: [
  {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Описание главной страницы моего сайта',
        },
  { name: 'description', content: 'Описание главной страницы моего сайта' },
	{ name: 'keywords', content: 'ключевые слова для главной страницы' }
  ]
})
</script>

<style>

</style>
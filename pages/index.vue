<template>
  <div>
<IndexHero />
  </div>
</template>

<script lang="ts" setup>
const { $api } = useNuxtApp();
const useRepo = repositoryApi($api);

useHead({
  title: 'Home page | Mark Trade Company L.L.C-FZ',
  meta: [
  {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Mark Trade Company is a direct importer of fruits and vegetables from Egypt, South Africa, Chile, Argentina and China',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'Home page | Mark Trade',
        },
  { name: 'description', content: 'Mark Trade Company is a direct importer of fruits and vegetables from Egypt, South Africa, Chile, Argentina and China' },
	{ name: 'keywords', content: 'Mark Trade, Egypt, South Africa, Chile, Argentina, China' }
  ]
})
</script>

<style>

</style>
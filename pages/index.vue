<template>
  <div>
<IndexHero />
<IndexAbout />
  </div>
</template>

<script lang="ts" setup>
const { $api } = useNuxtApp();
const useRepo = repositoryApi($api);
</script>

<style>

</style>
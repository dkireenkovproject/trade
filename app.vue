<template>
	<NuxtLayout>
		<transition name="fade">
		<NuxtPage />
		</transition>
	</NuxtLayout>
</template>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
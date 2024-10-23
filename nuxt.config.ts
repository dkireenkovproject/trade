// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: [
    [
			'@nuxtjs/i18n',
			{
				vueI18n: './vueI18n/i18n.config.ts',
				locales: [
					{
						code: 'fr',
						name: 'FR',
						files: ['fr.json'],
					},
					{
						code: 'en',
						name: 'EN',
						files: ['en.json'],
					},
				],
				lazy: true,
				langDir: './vueI18n/lang',
				defaultLocale: 'fr',
			},
		],
  ]
})
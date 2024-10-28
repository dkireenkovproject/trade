export default defineNuxtPlugin({
	setup() {
		const config = useRuntimeConfig()
		const api = $fetch.create({
			baseURL: 'https://marktradecompany-backend2-86d4.twc1.net/',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})

		return {
			provide: {
				api,
			},
		}
	},
})

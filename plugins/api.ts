export default defineNuxtPlugin({
	setup() {
		const config = useRuntimeConfig()
		const api = $fetch.create({
			baseURL: 'https://marktradecompany-backend2-e10e.twc1.net/',
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

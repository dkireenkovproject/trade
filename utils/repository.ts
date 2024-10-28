import type { $Fetch, NitroFetchRequest } from 'nitropack'

// interface Res {
// 	[key: string]: any
// }

interface ContactForm {
	name: string;
	mail: string;
	surname: string;
  }

export const repositoryApi = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
	// async getServiceList(): Promise<Res[]> {
	// 	return fetch<Res[]>('/api/api/profdeluxe/service?type=getList')
	// },

	async sendContactForm(body: { name: string; mail: string; surname: string }): Promise<ContactForm> {
		return fetch<ContactForm>('/mailer', {
		  method: 'POST',
		  body,
		});
	  },
})
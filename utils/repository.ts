import type { $Fetch, NitroFetchRequest } from 'nitropack'

interface Res {
	[key: string]: any
}

export const repositoryApi = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
	async getServiceList(): Promise<Res[]> {
		return fetch<Res[]>('/api/api/profdeluxe/service?type=getList')
	},
})
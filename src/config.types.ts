interface IApi {
	url: string
	authToken: string
	target: string
	lengthId: number
}

export interface IConfig {
	api: IApi
}

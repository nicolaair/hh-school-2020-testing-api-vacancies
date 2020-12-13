interface ITarget {
	main: string[]
	alt: string[]
}

interface IApi {
	url: string
	authToken: string
	target: ITarget
	idLength: number
}

export interface IConfig {
	api: IApi
}

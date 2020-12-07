import { AxiosResponse } from 'axios'

export interface IItem {
	id: number
	name: string
}

export interface IData {
	found: number
	items: IItem[]
	pages: number
	page: number
	per_page: number
}

export interface IResponse extends AxiosResponse {
	data: IData
}

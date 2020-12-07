import Axios, { AxiosRequestConfig } from 'axios'
import { config } from './config'

const instanceConfig: AxiosRequestConfig = {
	baseURL: config.api.url,
	timeout: 3000,
	headers: {
		Authorization: `Bearer ${config.api.authToken}`
	}
}

const instance = Axios.create(instanceConfig)

export const fetchVacancies = async (text: string = '') => {
	return await instance.get('/vacancies', {
		params: {
			text
		}
	})
}

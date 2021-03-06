import { IConfig } from './config.types'

require('dotenv').config()

export const config: IConfig = {
	api: {
		url: process.env['API_URL'] ?? 'https://api.hh.ru',
		authToken: process.env['API_AUTH_TOKEN'] ?? '',
		target: {
			main: ['тестировщик', 'qa'],
			alt: ['разработка', 'данных']
		},
		idLength: 8
	}
}

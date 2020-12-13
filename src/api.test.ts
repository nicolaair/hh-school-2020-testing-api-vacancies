import Axios from 'axios'
import { fetchVacancies } from './api'
import { IResponse } from './api.types'
import { config } from './config'

let initialVacancies: IResponse

beforeAll(async () => {
	const phrase = config.api.target.main.join(' ')

	initialVacancies = await fetchVacancies(phrase)
})

it('Data is not available without a token', async () => {
	const res: IResponse = await Axios.get(config.api.url)

	expect(res.data.found).toBeUndefined
	expect(res.data?.found ?? 0).toEqual(0)
})

it('Success GET response', () => {
	expect(initialVacancies.status).toBe(200)
})

it('Has vacancies', () => {
	expect(initialVacancies.data.found).toBeGreaterThan(0)
})

it('Has vacancies with words throughout the document', async () => {
	const phrase = config.api.target.main.join(' ')
	const vacancies: IResponse = await fetchVacancies(phrase)

	expect(vacancies.data.found).toBeGreaterThan(0)
})

it('Has vacancies with phrase throughout the document', async () => {
	const phrase = `"${config.api.target.main.join(' ')}"`
	const vacancies: IResponse = await fetchVacancies(phrase)

	expect(vacancies.data.found).toBeGreaterThan(0)
})

it('Has vacancies with strict phrase equivalent', async () => {
	const phrase = `!"${config.api.target.main.join(' !')}"`
	const vacancies: IResponse = await fetchVacancies(phrase)

	expect(vacancies.data.found).toBeGreaterThan(0)
})

it('Has vacancies with part of a first word', async () => {
	const [firstWord, secondWord] = config.api.target.main
	const phrase = `${firstWord.slice(0, Math.ceil(firstWord.length/2))}* ${secondWord}`
	const vacancies: IResponse = await fetchVacancies(phrase)

	expect(vacancies.data.found).toBeGreaterThan(0)
})

it('Has vacancies with one of words or phrase', async () => {
	const phrase = config.api.target.main.join(' OR ')
	const vacancies: IResponse = await fetchVacancies(phrase)

	expect(vacancies.data.found).toBeGreaterThan(0)
})

it('Has vacancies with all words or phrase', async () => {
	const phrase = `${config.api.target.main.join(' ')} AND ${config.api.target.alt.join(' ')}`
	const vacancies: IResponse = await fetchVacancies(phrase)

	expect(vacancies.data.found).toBeGreaterThan(0)
})

it('Has vacancies without second word or phrase', async () => {
	const phrase = config.api.target.main.join(' NOT ')
	const vacancies: IResponse = await fetchVacancies(phrase)

	expect(vacancies.data.found).toBeGreaterThan(0)
})

it('Has vacancies with combination of conditions', async () => {
	const phrase = `(${config.api.target.main.join(' AND ')}) AND (${config.api.target.alt.join(' OR ')})`
	const vacancies: IResponse = await fetchVacancies(phrase)

	expect(vacancies.data.found).toBeGreaterThan(0)
})

it('Has vacancies by field search', async () => {
	const phrase = `NAME:(${config.api.target.main.join(' AND ')}) AND (${config.api.target.alt.join(' OR ')})`
	const vacancies: IResponse = await fetchVacancies(phrase)

	expect(vacancies.data.found).toBeGreaterThan(0)
})

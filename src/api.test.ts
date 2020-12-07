import Axios from 'axios'
import { fetchVacancies } from './api'
import { IResponse } from './api.types'
import { config } from './config'

let vacancies: IResponse

beforeAll(async () => {
	vacancies = await fetchVacancies(config.api.target)
})

it('Data is not available without a token', async () => {
	const res: IResponse = await Axios.get(config.api.url);

	expect(res.data.found).toBeUndefined
	expect(res.data?.found ?? 0).toEqual(0)
})

it('GET vacancies', () => {
	expect(vacancies.status).toBe(200)
})

it('Has vacancies', () => {
	expect(vacancies.data.found).toBeGreaterThan(0)
})

it('Text param contain multiple word', () => {

})

it('Search for words throughout the document', () => {

})

it('Search phrases throughout the document', () => {

})

it('With word forms and word fragments', () => {

})

it('Without word forms and word fragments', () => {

})

it('Search by part of a word', () => {

})

it('With synonyms', () => {

})

it('Search for multiple phrases', () => {

})

it('Exclude word', () => {

})

it('Combination of conditions', () => {

})

it('Search by fields', () => {

})

it('Search by field id', () => {

})

it('Search by field name', () => {

})

it('Search by field company_id', () => {

})

it('Search by field company_name', () => {

})

it('Search by field description', () => {

})

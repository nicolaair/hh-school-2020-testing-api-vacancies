import { config } from './config'
import { fetchVacancies } from './api'
import { IResponse } from './api.types'
import { dataItemsToMultilineString } from './utils'

(async () => {
	const res: IResponse = await fetchVacancies(config.api.target.main.join(' '))

	if (res.statusText === 'OK' && res.data.found > 0) {
		const { found, items, pages } = res.data
		const page = ++res.data.page
		const perPage = res.data['per_page']

		const vacancies = dataItemsToMultilineString(items, config.api.idLength)

		console.log(vacancies)
		console.log('—'.repeat(process.stdout.columns))
		console.log(`Finded ${found}, printed ${items.length}, allowed pages ${page}/${pages}, `
			+ `potential pages ${page}/${Math.ceil(found / perPage)}`)
	} else {
		console.log('Something went wrong')
	}
})()

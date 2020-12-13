import { IItem } from './api.types'

export const dataItemsToMultilineString = (items: IItem[], idLength: number = 10): string => {
	return items
		.reduce((result, vacancy) => {
			return `${result}${vacancy.id.toString().padEnd(idLength)} — ${vacancy.name}\n`
		}, '')
		.trim()
}

import { IItem } from './api.types'

export const dataItemsToMultilineString = (items: IItem[], lengthId: number = 10): string => {
	return items
		.reduce((result, vacancy) => {
			return `${result}${vacancy.id.toString().padEnd(lengthId)} — ${vacancy.name}\n`
		}, '')
		.trim()
}

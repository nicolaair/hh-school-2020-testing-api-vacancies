import { dataItemsToMultilineString } from './utils'
import { mockVacancies } from './utils.mock'

it('Success convert array of vacancies to multiline string', () => {
	expect(dataItemsToMultilineString(mockVacancies)).toEqual('1          — Первая вакансия\n2          — Вторая вакансия');
});

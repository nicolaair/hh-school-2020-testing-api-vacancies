import { config } from './config'

it('Has config param url', () => {
	expect(config.api.url).not.toBeUndefined()
})

it('Valid param url', () => {
	expect(config.api.url).toEqual('https://api.hh.ru')
	expect(config.api.url.length).toBeGreaterThan(0)
})

it('Has config param authToken', () => {
	expect(config.api.authToken).not.toBeUndefined()
})

it('Valid param authToken', () => {
	expect(config.api.authToken).toContain('JOIN')
	expect(config.api.authToken.length).toBeGreaterThan(0)
})

it('Has config param target', () => {
	expect(config.api.target).not.toBeUndefined()
})

it('Valid param target', () => {
	expect(config.api.target.main.length).toBeGreaterThan(0)
	expect(config.api.target.alt.length).toBeGreaterThan(0);

	[...config.api.target.main, ...config.api.target.alt].forEach(item => {
		expect(item.length).toBeGreaterThan(0)
		expect(item).not.toMatch(/[@$%^&><\\/|~`]/)
	})
})

it('Param target contain multiple word', async () => {
	const mainPhrase = config.api.target.main.join(' ')
	const altPhrase = config.api.target.alt.join(' ')

	expect(mainPhrase.split(' ').length).toBeGreaterThan(1)
	expect(altPhrase.split(' ').length).toBeGreaterThan(1)
})

it('Has config param idLength', () => {
	expect(config.api.idLength).not.toBeUndefined()
})

it('Valid param url', () => {
	expect(config.api.idLength).toBeGreaterThanOrEqual(8)
})

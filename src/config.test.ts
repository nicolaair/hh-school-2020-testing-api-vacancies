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
	expect(config.api.target).not.toMatch(/[@$%^&><\\/|~`]/)
	expect(config.api.target.length).toBeGreaterThan(0)
})

it('Has config param lengthId', () => {
	expect(config.api.lengthId).not.toBeUndefined()
})

it('Valid param url', () => {
	expect(config.api.lengthId).toBeGreaterThanOrEqual(8)
})

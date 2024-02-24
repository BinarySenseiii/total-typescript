import { Equal, Expect } from '../helpers/type-utils'

const testingFrameworks = {
	vitest: {
		label: 'Vitest',
	},
	jest: {
		label: 'Jest',
	},
	mocha: {
		label: 'Mocha',
	},
}

// keyof will not work on runtime it will work only on types

type TestingFramework = keyof typeof testingFrameworks

type tests = [Expect<Equal<TestingFramework, 'vitest' | 'jest' | 'mocha'>>]

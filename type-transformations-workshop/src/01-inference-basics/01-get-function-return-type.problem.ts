import { Equal, Expect } from '../helpers/type-utils'

const myFunc = (user: string) => {
	return 'hello'
}

/**
 * How do we extract MyFuncReturn from myFunc?
 */

type MyFuncReturn = ReturnType<typeof myFunc>
type myFunc = ReturnType<<T>() => T>

type tests = [Expect<Equal<MyFuncReturn, string>>]

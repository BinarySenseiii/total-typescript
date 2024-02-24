/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

// discriminated union.
type A =
	| {
			type: 'a'
			whatever: string
	  }
	| {
			type: 'b'
			insideB: string
	  }
	| {
			type: 'c'
			c: string
	  }

const extract = (value: A) => {
	if (value.type === 'b') {
		value.insideB
	}
}
// union
type B = 'a' | 'b' | 'c'

// ENUM
enum C {
	A = 'a',
	B = 'b',
	C = 'c',
}

export {}

// Might come in handy!
import {String} from 'ts-toolbelt'
// https://millsp.github.io/ts-toolbelt/modules/string_split.html

import {Equal, Expect} from '../helpers/type-utils'

type Path = 'Users/John/Documents/notes.txt'

type SplitPath = String.Split<Path, '/'>

type tests = [
  Expect<Equal<SplitPath, ['Users', 'John', 'Documents', 'notes.txt']>>,
]

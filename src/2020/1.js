import { splitByNewLine } from '../utils'

// Goal: find the the product of the two entries that
// sum to 2020.
export const part1 = (input) => {
  const entries = splitByNewLine(input).map((str) => Number.parseInt(str, 10))
  for (let i = 0; i < entries.length; i += 1) {
    for (let j = 0; j < entries.length; j += 1) {
      if (i !== j && entries[i] + entries[j] === 2020) {
        return entries[i] * entries[j]
      }
    }
  }
  throw new Error('Something is wrong.')
}

// Goal: find the the product of the three entries that
// sum to 2020.
export const part2 = (input) => {
  const entries = splitByNewLine(input).map((str) => Number.parseInt(str, 10))
  for (let i = 0; i < entries.length; i += 1) {
    for (let j = 0; j < entries.length; j += 1) {
      for (let k = 0; k < entries.length; k += 1) {
        if ((i !== j) !== k && entries[i] + entries[j] + entries[k] === 2020) {
          return entries[i] * entries[j] * entries[k]
        }
      }
    }
  }
  throw new Error('Something is wrong.')
}

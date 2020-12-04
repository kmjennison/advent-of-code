import { splitByNewLine } from '../utils'

// Goal: find the the product of the two entries that
// sum to 2020.
// Answer: 121396
export const part1 = (input) => {
  const entries = splitByNewLine(input).map((str) => Number.parseInt(str, 10))
  for (let i = 0; i < entries.length; i += 1) {
    const diff = 2020 - entries[i]
    const matchIndex = entries.indexOf(diff)
    if (matchIndex > -1 && matchIndex !== i) {
      return entries[i] * diff
    }
  }
  throw new Error('Something is wrong.')
}

// Goal: find the the product of the three entries that
// sum to 2020.
// Answer: 73616634
export const part2 = (input) => {
  const entries = splitByNewLine(input).map((str) => Number.parseInt(str, 10))
  for (let i = 0; i < entries.length; i += 1) {
    for (let j = 0; j < entries.length; j += 1) {
      const diff = 2020 - entries[i] - entries[j]
      const matchIndex = entries.indexOf(diff)
      if (matchIndex > -1 && (matchIndex !== i) !== j) {
        return entries[i] * entries[j] * diff
      }
    }
  }
  throw new Error('Something is wrong.')
}

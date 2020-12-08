import { splitByNewLine } from '../utils'

// Goal: https://adventofcode.com/2020/day/2
// Answer: 396
export const part1 = (input) => {
  return splitByNewLine(input)
    .map((val) => {
      // Split by hyphen, space, and colon.
      const parts = val.split(/-| |:/)
      const minOccurrence = parseInt(parts[0], 10)
      const maxOccurrence = parseInt(parts[1], 10)
      const char = parts[2]
      const password = parts[4]
      const numCharOccurenceInPW = (password.match(new RegExp(char, 'g')) || [])
        .length
      const isValid =
        minOccurrence <= numCharOccurenceInPW &&
        numCharOccurenceInPW <= maxOccurrence
      return isValid
    })
    .reduce((acc, currentPasswordIsValid) => {
      let countSoFar = acc
      const newCount = currentPasswordIsValid ? (countSoFar += 1) : countSoFar
      return newCount
    }, 0)
}

// Goal: https://adventofcode.com/2020/day/2#part2
// Answer: 428
export const part2 = (input) => {
  return splitByNewLine(input)
    .map((val) => {
      // Split by hyphen, space, and colon.
      const parts = val.split(/-| |:/)
      const positionA = parseInt(parts[0], 10) - 1 // problem starts index at one
      const positionB = parseInt(parts[1], 10) - 1 // problem starts index at one
      const char = parts[2]
      const password = parts[4]

      // When adding `true` is treated as `1``. Exactly one must be true.
      const isValid =
        (password[positionA] === char) + (password[positionB] === char) === 1
      return isValid
    })
    .reduce((acc, currentPasswordIsValid) => {
      let countSoFar = acc
      const newCount = currentPasswordIsValid ? (countSoFar += 1) : countSoFar
      return newCount
    }, 0)
}

// Other approaches:
// * use regex to get inputs: new RegExp(/([0-9]+)-([0-9]+) ([a-z]): (.*)/);
// * use a counter rather than `reduce`` to improve efficiency
// * use `[...password].filter()` to count occurrences rather than regex

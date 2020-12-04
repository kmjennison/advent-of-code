/* eslint-disable global-require, no-console */

// To run:
// `yarn run xmas --year 2020 --day 8 --part 2`
// where args are year, day, part.

const fs = require('fs')
const path = require('path')
// eslint-disable-next-line import/no-extraneous-dependencies
const minimist = require('minimist')

// Get the input file contents.
const getInput = ({ year, day }) => {
  const filePath = path.join(
    __dirname,
    '..',
    'input',
    year.toString(),
    `${day}.txt`
  )
  return fs.readFileSync(filePath).toString()
}

// Get the function to run.
const getSolutionFunc = ({ year, day, part }) => {
  const filePath = path.join(
    __dirname,
    '..',
    'src',
    year.toString(),
    day.toString()
  )
  // eslint-disable-next-line import/no-dynamic-require
  const { part1, part2 } = require(filePath)

  if (part === 1) {
    if (!part1) {
      throw new Error('The solution module must provide named export "part1".')
    }
    return part1
  }
  if (part === 2) {
    if (!part2) {
      throw new Error('The solution module must provide named export "part2".')
    }
    return part2
  }
  throw new Error('The "part" input must be either 1 or 2.')
}

const main = async () => {
  const argv = minimist(process.argv.slice(2))
  const { year, day, part } = argv
  if (!(year && day && part)) {
    throw new Error('The year, day, and part flags are required.')
  }
  const input = getInput({ year, day })
  const solutionFunc = getSolutionFunc({ year, day, part })
  const answer = await solutionFunc(input)
  console.log('Answer:')
  console.log(answer)
}

main()

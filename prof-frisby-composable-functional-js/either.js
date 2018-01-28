// This is from the following video less
// https://egghead.io/lessons/javascript-composable-code-branching-with-either

/**
 * Either allows the function composition to continue in the 
 * event of null or undefined value
 */
// Code goes here
const Right = x =>
({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

const Left = x =>
({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})

// Wrap a potentially null value
// This is an Either. Should be called wither
const fromNullable = x =>
  !!x ? Right(x) : Left(null)

const findColor = name =>
  fromNullable({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name])

const res = findColor('xblue')
            .map(c => c.slice(1))
            .map(c => c.toUpperCase())
            .fold(e => 'no color', x => x)

console.log(res)

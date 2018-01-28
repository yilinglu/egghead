const modulo = dvr => dvd => dvd % dvr

const isOdd = modulo(2)

console.log('Is odd: %s', new Boolean(isOdd(3)))
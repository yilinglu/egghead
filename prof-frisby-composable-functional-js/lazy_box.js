const LazyBox = g => ({
    fold: f => f(g()),
    map: f => LazyBox(() => f(g()))
})

const result = LazyBox(()=> ' 64 ')
                .map(x => x.trim())
                .map(x => new Number(x))
                .map(num => num + 1)
                .map( x => String.fromCharCode(x))
                // .fold(x => x.toUpperCase())

console.log(result);
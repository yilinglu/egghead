/**
 * Generator pause at yield keyworld, returns what is to the right of the yield keyword.
 * When it resumes, yield takes the param from the next() call and assign the value of the
 * param to the variable that is situated to the left of yield.
 */

function* createQuoteFetcher() {
  const response = yield fetch('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
  const quote = yield response.json()
  return `${quote.quoteText} —${quote.quoteAuthor}`
}

/**
 * npm install co will get a package that does what this coroutine does.
 * 
 * @param {*} gen 
 */
const coroutine = (gen) => {
  const generator = gen()

  const handle = (result) => {
    if (result.done) return Promise.resolve(result.value)
    return Promise.resolve(result.value)
      .then(res => handle(generator.next(res)))
  }

  return handle(generator.next())
}

const quoteFetcher = coroutine(createQuoteFetcher)
quoteFetcher.then(quote => console.log(quote))

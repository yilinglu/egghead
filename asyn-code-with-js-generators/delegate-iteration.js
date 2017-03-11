function * create4To4Counter(){
  yield 3
  yield 4
}

function* createCounter(){
  yield 1
  yield 2
  // createCounter generator delegates control to create4To4Counter
  yield* create4To4Counter();
  yield 5
}

const counter = createCounter();

// console.log(counter.next());

/**
 * For of loop pasues and resumes a generator automatically,
 * and pass back(catch) the value generator yields.
 * 
 */
for (let i of counter){
  console.log(i);
}
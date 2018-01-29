function* createCounter(){
  yield 1
  yield 2
  yield 3
  yield 4
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
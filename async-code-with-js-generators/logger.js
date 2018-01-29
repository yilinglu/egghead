function* createLogger(){
  console.log('start');
  yield;
  console.log('end');
}

//need to call generator 1+ number of yield keyword times.
const logger = createLogger();
logger.next();
logger.next();
/**
 * Asynchronous in fact, however with a synchronous looking syntax.
 */
function* createHello(){
  try{
    const word = yield 'first';
    console.log('word from resume: ' + word);

  }catch(error){
    console.log('ERROR: ', error + '');
  }
}

const hello = createHello();

console.log(hello.next());
hello.throw('Something went wrong!')
console.log(hello.next('Max'));
console.log(hello.next('Max'));
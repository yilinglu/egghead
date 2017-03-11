function* createHello(){
  const word = yield 'first';
  console.log('word from resume: ' + word);
}

const hello = createHello();

console.log(hello.next());
console.log(hello.next('Max'));
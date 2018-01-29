// const assert = require('assert');
const async = require('./async');

function *demo() {
    var res = yield 10;
    console.log(`response from yield is ${res}`)
    //assert(res===32)
    return res;
}

async(demo)().then( val => console.log(`Generator function finished with value ${val}`));

// let d = demo()
// var resA = d.next();
// console.log(resA);

// var res1 = d.next(11);
// console.log(res1);

// var res2 = d.next(12);
// console.log(res2);
// var res3 = d.next(13);
// console.log(res3);

// var resB = d.next(32);
// console.log(resB);
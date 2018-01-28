export function atoi(str: string){
    if(!str){
        throw new Error('Invalid number');
    }
    const zeroCode = '0'.charCodeAt(0);
    let sign = 1;
    if(str[0] === '-'){
        sign = -1;
        str = str.substr(1);
    }

    let acc = 0;

    for( let i=0; i< str.length; i++) {
        const digit = (str.charAt(i).charCodeAt(0) - zeroCode);
        if(digit < 10 && digit >=0){
            acc = acc * 10 + (str.charAt(i).charCodeAt(0) - zeroCode);
        }
    }
    return acc * sign;
}

console.log(` 123 is ${atoi('123')}`)
console.log(` 1123 is ${atoi('-123')}`)
console.log(` 1123abc is ${atoi('1123')}`)
// console.log(` empty string is ${atoi('')}`)
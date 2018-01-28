import "core-js/shim";
function findAnagram(s1: string, s2: string): boolean{
    console.log('Start...');
    const charCount = new Map<string, number>();
    
    for (const char of s1.split('')) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (const char of s2.split('')) {
        if(!charCount.has(char)){
            console.log('Not an anagram!');
            return false;
        }else{
            let count = charCount.get(char);
            if(count){
                charCount.set(char, count - 1);
            }else{
                return false;
            }
        }            
    }
    return Array.from(charCount.values()).every( val => val == 0);
}

const result = findAnagram('earthy', 'heart');

console.log(`${result ? 'This is anagram.': 'This is not an anagram.'}`);
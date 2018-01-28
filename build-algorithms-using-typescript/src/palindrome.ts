function isAnyPermutationPalindrome(str: string) {
    let unmatched = new Set<string>();

    str.split('').forEach(
        (ch: string) => {
            if (unmatched.has(ch)){
                unmatched.delete(ch)
            } else {
                unmatched.add(ch);
            }
        }
    );

    return unmatched.size <= 1;
}

const result = isAnyPermutationPalindrome('civic');
console.log(`'civic' ${result? 'is' : 'is not'} palindrome.`);
const r2 = isAnyPermutationPalindrome('native');
console.log(`'native' ${r2? 'is' : 'is not'} palindrome.`);


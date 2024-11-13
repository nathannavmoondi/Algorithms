// Write function that returns the # of vowels in a string
// vowels are a e i o u

// eg: vowels('Hi there') = 3
// vowels('Why?') == 0

function test1(str) {

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let s of str){
        for (let c of vowels)
         if (c == s) count++;
    }

    return count;
}

function test2(str){
    let count = 0;

    const checker = "aeiou";

    for (let char of str.toLowerCase())
    {
        if (checker.includes(char)) {
            count++;
        }

    }

    return count;
}

function test3(str){
    let count = 0;

    const matches = str.match(/[aeiou]/gi); //g means don't stop at first match.  i not case insenstive
    // returns array of matches or null if none

    count = matches ? matches.length: 0;

    return count;

}

console.log(test1('Hi there'));
console.log(test1('Man'));
console.log(test1('Why?'));

console.log(test2('Hi there'));
console.log(test2('Man'));
console.log(test2('Why?'));


console.log(test3('Hi there'));
console.log(test3('Man'));
console.log(test3('Why?'));
//console.log(test3('apple'));

module.exports = test1;
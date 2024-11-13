//given a string, returns true if string is palindrome or false if not.

//p are strings that form the same word if it is reversed.
//eg: abba = true, cat = false.

function test1(str) {
       
    const reversed = str.split('').reverse().join('');

    if (reversed === str)
        return true;
    else
        return false;
}

function test2(str){

    //if any function in every returns false then every return false

    return str.split('').every( (char, index) => {
       return char === str[str.length - index -1]; // return true or false
    })


}

function test3(str){

   let output = str.split('')
   .reduce((reversed, character) => character + reversed, '');
          
    return output;
}

console.log(test1('abba'));
console.log(test1('cat'));
console.log(test2('abba'));
console.log(test2('cat'));
//console.log(test3('apple'));

module.exports = test1;
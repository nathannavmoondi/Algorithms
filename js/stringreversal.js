//reverse a string.  apple = 'elppa'

function reverse1(str) {
    return str.split('').reverse().join('');
    
    //copies string to an array. then call reverse method on it.
    //then join to join array into a string.
}

function reverse2(str){

    let output = "";

    for(let c of str)
        output = c + output;

    return output;
}

function reverse3(str){

   let output = str.split('')
   .reduce((reversed, character) => character + reversed, '');
          
    return output;
}

function reverse4(str) {
    let reversed = "";
    //abc
    //cba
    for (let i = 0; i < str.length; i++) {

        reversed = str[i] + reversed;
    }
    return reversed;
}

console.log(reverse1('apple'));
console.log(reverse2('apple'));
console.log(reverse3('apple'));
console.log(reverse4('apple'));

module.exports = reverse1;
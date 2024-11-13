// Write a funcion that capitalizes the first letter of each word then returns
// that string

// eg: a short sentence = A Short Sentence

function test1(str) {
     
    let arr = str.split(' ');
    let output = "";

    for(let word of arr)
    {
        word[0] = word[0].toUpperCase();
        output = output + ' ' + word[0].toUpperCase()+ word.slice(1,word.length);
    }

    return output.slice(1, output.length);

}

function test2(str) {
       const words = [];

       for (let word of str.split(' ')){
           words.push(word[0].toUpperCase() + word.slice(1));
       }

       return words.join(' ');
}

function test3(str) {
    var output = str[0].toUpperCase();

    for (let i = 1; i< str.length; i++){
        if (str[i-1] === ' ')
            output += str[i].toUpperCase();
        else
            output += str[i];
    }
    return output;

}

console.log(test1('a short sentence'));
console.log(test1('look, it is working!'));

console.log(test2('a short sentence'));
console.log(test2('look, it is working!'));

console.log(test3('a short sentence'));
console.log(test3('look, it is working!'));

//console.log(test3('apple'));

module.exports = test1;
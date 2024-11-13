//given a string, return the character that is most commonly used in the string

//maxchar('aabbccccd') = c
//maxchar('apple 12311111') == 1


function test1(str) {
     const charMap = {};
     let max = 0;
     let maxChar = '';
     
     for(let char of str){ //build character map        
        charMap[char] = charMap[char] +1 || 1; //if null
     }

     for( let char in charMap) //Use i to iterate cuz we are using an object.
     {
         if (charMap[char] > max){
             max = charMap[char];
             maxChar = char;
         }
     }

     return  maxChar;

     console.log(charMap);

}

function test2(n) {
       

}

console.log(test1('aabbccccd'));

console.log(test1('apple 12311111'));

//console.log(test3('apple'));

module.exports = test1;
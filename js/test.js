//REACTO

//repeat the question, write out examples , describe your approaches, code, test, optimize
///https://www.youtube.com/watch?v=DIR_rxusO8Q&ab_channel=FullstackAcademy
//TIP: (black box, input gets what output, look at arguments)
//TIP2: iterative solutions, recursive solution? 
//TIP3: write pseudocode
//TIP4: explain runtime complexity, brute force approach. optimization.
//TIP5: don't know answer, ask questions, talk,. don't be silent in room.  awkward.

// write a function that accepts a positive number n
// the fn shoudl console log a step shape with n levels using the # character
// eg:

//steps(2)
// '# '
// '##'

//steps(3)
// '#  ' 2 
// '## ' 1
// '###' 0

function solution1(arr, n){

 return 0;
}

function buildMap(arr){
  let map = {};

  for(let num of arr){

    if (map[num] != undefined)
    {
        map[num] = map[num] +1;
    }
    else
    map[num] = 1;
  }
  return map;
}


console.log(solution1()); //return 0
console.log(solution1( )); //return 1


module.exports = solution1;

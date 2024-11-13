// We have a range of #'s starting at A to B.
// K is an integer that can be evenly divided into a number
// contained in A and B. 

// The solutionis to return the number of times K can go into a number.

// A <= i <= B
// example: given three numbers: (6, 11, 2) your function should return 3.
// because there are 3 numbers divisible by 2 within the range.
// ie: 6, 8, 10.

// values are 6, 7, 8, 9, 10, 11.


function solution1(num){

    //convert to binary
    //from 1 to n
    //if 0, increase gap
    //if 1, zero gap

    
    return maxgap;
 
}

buildMap = (str)=> {

    let obj = {};
    for (let c of str){

        if (obj[c])
            obj[c] = obj[c] + 1;
        else
            obj[c] = 1;    
    }

    return obj;

}

console.log(solution1(1041));

module.exports = solution1;

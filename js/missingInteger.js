// I need to "Find the minimal positive integer not occurring in a given sequence. "
//   A[0] = 1    
//   A[1] = 3    
//   A[2] = 6
//   A[3] = 4    
//   A[4] = 1    
//   A[5] = 2, the function should return 5.

// Assume that:

//         N is an integer within the range [1..100,000];
//         each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

function solution1(arr){

    //find lowest number
    //go through to end, find first # missing

    let lowest = 999;
    let missing = -1;

    for (let num of arr)
    {
        
        if ((num < lowest) || (lowest == -1)) {          
            lowest = num;
        }
    }

    
    for (let i = lowest; i<arr.length; i++)
    {
        if (!arr.includes(i)){        
        
         missing = i;
         break;
        }
    }

    return missing;
    
 

}

console.log(solution1([1, 3, 6, 4, 1, 2]));


module.exports = solution1;

// A non-empty array A consisting of N integers is given. 
//The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

// For example, array A such that:

//   A[0] = -3
//   A[1] = 1
//   A[2] = 2
//   A[3] = -2
//   A[4] = 5
//   A[5] = 6
// contains the following example triplets:

// (0, 1, 2), product is −3 * 1 * 2 = −6
// (1, 2, 4), product is 1 * 2 * 5 = 10
// (2, 4, 5), product is 2 * 5 * 6 = 60
// Your goal is to find the maximal product of any triplet.

// Write a function:

// class Solution { public int solution(int[] A); }

// that, given a non-empty array A, returns the value of the maximal product of any triplet.

// For example, given array A such that:

//   A[0] = -3
//   A[1] = 1
//   A[2] = 2
//   A[3] = -2
//   A[4] = 5
//   A[5] = 6
// the function should return 60, as the product of triplet (2, 4, 5) is maximal.



function solution1(arr, n){

    // make sure meets formula P < Q < R < N
    //get p, q, r
    //compare
    //get sum

    let  maxsum = 0;

    for (let p = 0; p<n; p++)
    {
        for (let q = 0; q<n; q++){
            for (let r = 0; r<n; r++){

                  if( (arr[p] > 0) && (arr[q] > arr[p]) && (arr[r] > arr[p]) && (arr[r] < n))
                  {
                        let max = arr[p] * arr[q] * arr[r];

                        if (max > maxsum)
                        maxsum = max;
                  }

                console.log(p,q,r);

            }
        }
    }
 return maxsum;
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


console.log(solution1([-3, 1, 2, -2, 5, 6], 6)); //return 6-


module.exports = solution1;
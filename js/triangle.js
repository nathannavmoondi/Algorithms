// A zero-indexed array A consisting of N integers is given.
// A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].

// Write a function:

// int solution(vector<int> &A);  
// that, given a zero-indexed array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

// For example, given array A such that:
// A[0] = 10, A[1] = 2, A[2] = 5, A[3] = 1, A[4] = 8, A[5] = 20 Triplet (0, 2, 4) is triangular, the function should return 1.

// Given array A such that:
// A[0] = 10, A[1] = 50, A[2] = 5, A[3] = 1
// function should return 0.



function solution1(arr, n){

    //(P, Q, R) is triangular if 0 ≤ P < Q < R < N

    ///and 


// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].

    let  maxsum = 0;

    for (let p = 0; p<n; p++)
    {
        for (let q = 0; q<n; q++){
            for (let r = 0; r<n; r++){

                  if ( (arr[p] > 0) && (arr[q] > arr[p]) && (arr[r] > arr[q]) && (arr[r] < n))
                  {
                   let pass = true;
                   

                   if (arr[p] + arr[q] <= arr[r])
                    pass =false;

                   if (arr[q] + arr[r] <= arr[p])
                    pass =false;
                   
                   if (arr[r] + arr[p] <= arr[q])
                    pass =false;
                   
                    return 1;

                  }

                

            }
        }
    }
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


console.log(solution1([10, 50, 5, 1], 4)); //return 0
console.log(solution1([10, 2, 5, 1,8,20],6 )); //return 1


module.exports = solution1;

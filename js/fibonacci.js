// print out the nth entry in the fibonacci series
// a fib series is an ordering of numbers where
// each number is the sum of the preceding two

//eg: [0,1,1,2,3, 5, 8, 13, 21, 34]
// is first 10 entries of fib series.

// fib(4) == 3.

function test1(n) {
    let arr = [0,1];
    //arr[0] = 0;
    //arr[1] = 1;

    for (let i = 2; i <= n; i++)
    {
        arr[i] = arr[i-1] + arr[i-2] // or push i.
    }
    return arr; //arr[arr.length-1];
}

console.log(test1(8))

console.log(test1(4))
module.exports = test1;
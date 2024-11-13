//Please write a function in PHP that takes an array of integers as an argument, 
//and efficiently returns the sum of the two largest elements in the array.
// For example, if the array passed in is [3, 17, 8, -20, 0], the return value should be 25. (17 + 8)

function sumOfTwoLargest(arr) {
    if (arr == null || arr.length < 2) {
        throw new Error("Input array must have at least two elements");
    }

    arr.sort((a, b) => b - a);
    return arr[0] + arr[1];
}

console.log(sumOfTwoLargest([3,17,8,-20,0])); //25

module.exports = sumOfTwoLargest;

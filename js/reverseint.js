//given a integer return an integer that is the reverse

//eg 15 = 51, 981 = 189, -15 = -51, -90 = -9

function test1(n) {
       
     let rev = parseInt(n.toString().split('').reverse().join(''));

    let output = "";
    if (n<0)
      n = n * -1;

    output = rev.toString();

    return parseInt(output); //parseint makes -09 to -9.
}

function test2(n) {
       
    let reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n); //*1 or *-1
}

function test3(n) {
    //make String
    let str = "";
    for (let char of n.toString()) {
        if (char != '-')
            str = char + str;
    }
    let i = parseInt(str);
    if (n < 0)
        i = i * -1;
    return i;
}

console.log(test1(15));
console.log(test1(981));
console.log(test1(-15));
console.log(test1(-90));

console.log(test2(15));
console.log(test2(981));
console.log(test2(-15));
console.log(test2(-90));

console.log(test3(-90));

//console.log(test3('apple'));

module.exports = test1;
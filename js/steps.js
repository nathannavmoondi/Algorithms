// write a function that accepts a positive number n
// the fn shoudl console log a step shape with n levels using the # character
// eg:

//steps(2)
// '# '
// '##'

//steps(3)
// '#  '
// '## '
// '###'

function test1(n) {
    for (let row = 0; row < n; row++) {
        let stair = "";

        for (let col = 0; col < n; col++) {
            if (col <= row)
                stair += "#";

            else
                stair += " ";

        }
        console.log(stair);
    }

}

function test2(n, row = 0, stair = ''){
    if (n===row) //past row return
      return;

    if (n === stair.length){ // end of row by looking at stair length.  go to next one. 
        console.log(stair); // print out result
        return test2(n, row+1);
    }

    if (stair.length <= row){ // #'s should match row #.
        stair += '#';
    }
    else{
        stair += ' '; // past row #, add space.
    }
    
    test2(n, row, stair); // call again to add to stair.
}

test1(3);
test2(3);

module.exports = test1;
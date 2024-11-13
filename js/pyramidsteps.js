// Write a function that takes N number
// cl pyramid shape using # character

// pyramid(2)
// ' # '
// '###'

// pyramid(3)
// '  #  '
// ' ### '
// '#####'

function test1(n) {

    
    for (let row = 1; row<=n; row++)
    {
        let spaces = n-row;
        let line = ""; //String(' ', spaces-1);
        for (let i = 0; i < spaces; i++) line += ' ';
        for (let i = spaces; i <= (row+1); i++) line += '#';
        for (let i = 0; i < spaces; i++) line += ' ';
        console.log(line);

    } 
     
}

function test2(n) {

    for (let row = 0; row < n; row++)
    {
        const midpoint = Math.floor((2*n-1)/2);
        let level = "";

        for (let col = 0; col < 2 * n -1; col++){
            if (midpoint - row <= col && midpoint + row >=col){
                level += '#';
            }else{
                level += ' ';
            }
        }
        console.log(level);
    }

}

function test3(n, row = 0, level = ''){

    // instead of col, use level length

    //condition to get out first
    if (row === n)
    {
        return;
    }

    if (level.length === 2 * n -1 ){  // condition #2 see if level length is at max
        console.log(level);
        return test3(n, row+1); // go to next row.
    }

    const midpoint = Math.floor((2 * n - 1) / 2); 

    let add;

    if (midpoint - row <= level.length && midpoint +  row >= level.length) // left or right
    {
        add = '#';
    }else add = ' ';

    test3(n, row, level + add);
}


//console.log(test3('apple'));
test1(3);
test2(3);
test3(3);
module.exports = test1;
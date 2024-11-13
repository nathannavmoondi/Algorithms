// write function that takes N then returns matrix

//eg: matrix(2)
// [[1,2],
// [[4,3]]]

// matrix(3)
// [[1,2,3],
// [8,9,4],
// [7,6,5]]

// matrix(4)
// [[1,2,3,4],
// [12,13,14,5],
// [11,16,15,6],
// [10, 9, 8 ,7]

function test1(n) {
 const results = [];

 for (let i = 0; i < n; i++){
     results.push([]); // results(2) = [[], []]
 }

 let counter = 1;
 let startcol = 0;
 let endcol = n-1;
 let startrow = 0;
 let endrow = n-1;


 while (startcol <= endcol && startrow <= endrow) //outer loop
 {
     //startcol and startrow will keep changing

     //first for loop. generate top row
     for (let c = startcol; c<= endcol; c++)
     {
         results[startrow][c] = counter;
         counter++;
     }
     startrow++;

     //right col
     for (let r = startrow; r <= endrow; r++)
     {
         results[r][endcol] = counter;
         counter++;
     }
     endcol--;

     //bottom row
     for (let i = endcol; i>=startcol; i--)
     {
        results[endrow][i] = counter;
        counter++;
     }
     endrow--;

     // left side
     for (let i = endrow; i>=startrow; i--)
     {
         results[i][startcol] = counter;
         counter++;
     }
     startcol++; //get at middle #

     //all cols end and row are now 1.
     //run again in loop to handle inside box.
     
 } // end while loop

 return results;
}


console.log(test1(2));
console.log(test1(3));
console.log(test1(4));

module.exports = test1;
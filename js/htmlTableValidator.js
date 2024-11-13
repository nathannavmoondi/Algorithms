// var table = document.getElementById("myTable");
// for (let i in table.rows) {
//    let row = table.rows[i]
//    //iterate through rows
//    //rows would be accessed using the "row" variable assigned in the for loop
//    for (let j in row.cells) {
//      let col = row.cells[j]
//      //iterate through columns
//      //columns would be accessed using the "col" variable assigned in the for loop

        //let val = cell.innerText; // your code below
//    }  

// $('#mytab1 tr').each(function(){
//     $(this).find('td').each(function(){
//         //do your stuff, you can use $(this) to get current cell
//     })
// })

// const s = '01-01-1970 00:03:44';
// const d = new Date(s);
//var same = d1.getTime() === d2.getTime();
// var result = new Date(date);
//   result.setDate(result.getDate() + days);
//   return result;

//get table using getelmentbytype
//get lsit of rows
//iterate of cells
//lok at style.background-color = "red"

//take date.  is it empty?  then compare borrowdate + 14, to today's date
//if not, convert to new Date(str) plus setDate(datestrng.getDate() +14)
//compare returned date and see if it's mroe than 14 plus borowdate

//if overdue is set, then check if red is there. if not, see if red is there. set incorret value.

function solution(S) {
    
    //works for all but big numbers. BigInt is what's bewst but not available in codility.

    let num =  parseInt( S, 2 );// write your code in JavaScript (Node.js 8.9.4)

    
    
    let iterations = 0;

    while (num >0){

        if (num % 2 == 0) //divisble by 2
        {
            num = num / 2;
        }
        else
        num = num-1;

        iterations++;
        
    }
    return iterations;
}
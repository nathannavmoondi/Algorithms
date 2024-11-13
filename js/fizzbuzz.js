// write a program that logs the numbers 1 to n. For multiples of 3 print 'fizz'
// instead of the number. for multipels of 5 print buzz.  for #'s multiples 3 and 5 print
// fizz buzz


function test1(n) {
     
     let ctr = 1;
     let out = "";

     while (ctr <= n)
     {
         if (ctr % 3 == 0 && ctr % 5 == 0)
             console.log("fizzbuzz");
         else if (ctr % 5 == 0)
             console.log("buzz");
         else if (ctr % 3 == 0)
             console.log("fizz");
         else
             console.log(ctr.toString());
        ctr++;
        
     }

     return out;



}

function test2(n) {
       
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            console.log("fizzbuzz");
        else if (i % 5 == 0)
            console.log("buzz");
        else if (i % 3 == 0)
            console.log("fizz");
        else
            console.log(i);
    }
    console.log('-----------');
}


console.log(test1(15));
test2(15);



//console.log(test3('apple'));

//module.exports = test1;
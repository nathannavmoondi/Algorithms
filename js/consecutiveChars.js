// Write a function that take a string, s, and an integer, i. Return a string where no character appears more than i times consecutively.
// ex "aaaabbbacccbbbdv", 2 => "aabbaccbbdv"
// "avcd", 1 => "avcd"
// "aaabbbbbaaa", 4 => "aaabbbbaaa"

function foo(str, num)
{
    let lastchar = '';
    let lastamount = 0;

    let output = "";

    for (let c of str){

        if (c == lastchar){
            lastamount++;
            if (lastamount < num)
                output += c;
        } else{
                lastchar = c; 
                output += c;
                lastamount = 0;        

        }
    }

    return output;
}

console.log(foo("aaaabbbbacccbbbdv",2));  //aabbaccbbdv
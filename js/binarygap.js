//a binary gap within a positive integer N is any maximal
// sequence of consecutive zeroes that is surrounded by both ends in the binary
// representation of N.

//for ex: binary 9 has binary rep of 1001 and contains a binary gap of 2.  The number 529
// has gap of 1000010001 and contains two binary gaps: one of length 4 and one of length 3.

//write a function that returns legnth of it's LONGEST binary gap.  The function should
//return 0 if N doesn't contain a binary gap

//ex: N = 1041 should return 5.  Because N has binary rep of 1000001001 and so it's
//longest binary gap is length 5.


function solution1(num){
 //convert to binary
    //from 1 to n
    //if 0, increase gap
    //if 1, zero gap

    let bstr = num.toString(2);

    console.log(bstr);

    let gap = 0;
    let maxgap = 0;
    for (let c of bstr)
    {
        if (c == '0') gap++;
        else{            
            if (gap > maxgap)
            maxgap = gap;
            gap = 0;
        }
    }

    return maxgap; 
}

buildMap = (str)=> {

    let obj = {};
    for (let c of str){

        if (obj[c])
            obj[c] = obj[c] + 1;
        else
            obj[c] = 1;    
    }

    return obj;

}

console.log(solution1(1041));

module.exports = solution1;

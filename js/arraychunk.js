// given an array and chunk size.  divide the array into many sub arrays
// where each subarray is of length size
// eg: chunk([1,2,3,4],2) => [[1,2],[3,4]]
// eg: chunk([1,2,3,4,5],2) => [[1,2],[3,4], [5]]
// eg: chunk([1,2,3,4,5, 6, 7, 8],3) => [[1,2, 3],[4,5,6], [7,8]]


function test1(chunkArr, size) {

    let outer = [];
    let inner = [];
    let output = [];
    let totaloutput = [];
    let count = 0;

    for (let outer of chunkArr)
    {
        for (let inner in outer) //of?
        {
            output[count] = inner;
            count++;
            if (count == size)
            {
                totaloutput.push(output);
                output = [];
                count = 0;
            }
        }      
    }

    return totaloutput;

     
}

function test2(array, size) {
    
    const chunked = [];

    for (let element of array) {
        
        const last = chunked[chunked.length-1];
      
        if (!last || last.length === size){ //1 and 3
            
            //put new chunk in and set. creates new array and puts
            //element into it as well. 
            chunked.push([element]);         
            
        }else{ //2 and 4
            last.push(element); //confusing. basically pushes to chunked as well. 
            //i guess pointer
            
        }        
    }
    return chunked;
}

function test3(array, size) {
    const chunked  = [];

    let index = 0;

    while(index < array.length)
    {
        chunked.push(array.slice(index, index+size));

        index = index + size;
    }
    return chunked;
}

function test4(array, size) {
    //iterate over array
    //grab size
    //add to chunk
    let chunked = [];
    let chunk = [];
    let ctr = 0;
    let ctr2 = 0;
    for (let char of array) {
        chunk.push(char);
        ctr++; ctr2++;
        if (ctr == size || ctr2 == array.length) {
            chunked.push(chunk);
            chunk = [];
            ctr = 0;
        }
    }
    return chunked;
}
//console.log(test1([1,2,3,4],2));
console.log(test2([1,2,3,4],2));
console.log(test2([1,2,3,4,5],2));
console.log(test2([1,2,3,4,5, 6, 7, 8],3));

console.log(test3([1,2,3,4],2));
console.log(test3([1,2,3,4,5],2));
console.log(test3([1, 2, 3, 4, 5, 6, 7, 8], 3));

console.log(test4([1, 2, 3, 4, 5, 6, 7, 8], 3));



//console.log(test3('apple'));

module.exports = test1;
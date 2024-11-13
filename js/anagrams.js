//check to see if two strings are anagrams.  one string is an anagram of another if
// if it uses the same characters. Only consider characters, not spaces or punctuaqtion.
// returns true or false if anagrams

// anagrams('rail safety', 'fairy tales') = true
// anagrams('RAIL! SAFETY!', 'fairy tales') = true
// anagrams('Hi there', 'bye there') = false

function test1(s1, s2) {
     
    // \w for regex only matches with letters

    const map1 = buildmap(s1);
    const map2 = buildmap(s2);

    let anagram = true;

    for (let p in map1)
    {
        if (map1[p] != map2[p])
         return false;
    }

    if (Object.keys(map1).length !== Object.keys(map2).length)
        return false;
        
    return true;


}


function test2(s1, s2) { //fix string then sort
       
    const sort1 = cleanString(s1);
    const sort2 = cleanString(s2);

    if (sort1 !== sort2)
        return false;

    return true;
}

function cleanString(str)
{
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

function buildmap(str){
    const map = {}; 

    for (let e of str.replace(/[^\w]/g,'').toLowerCase())
    {
        map[e] = map[e] +1 || 1;
    }
    return map;
}

console.log(test1('rail safety', 'fairy tales'));
console.log(test1('RAIL! SAFETY!', 'fairy tales'));
console.log(test1('Hi there', 'fairy tales'));

console.log(test2('rail safety', 'fairy tales'));
console.log(test2('RAIL! SAFETY!', 'fairy tales'));
console.log(test2('Hi there', 'fairy tales'));

//console.log(test3('apple'));

module.exports = test1;

// node anagrams.js

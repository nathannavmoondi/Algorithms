//     10
//    /  \
//   0   12
//  / |  | \
//-1 5   11 20
//        |   \
//        17   99

//each left is lower then root data, right is higher than root.

//when adding new node where to put it? eg: -20.  answer: left value of -1.

function searchSuggestions(repository, customerQuery) {
    // Write your code here

if (customerQuery.length < 2)
    return null;
    
let filtered = repository.filter( (repo) =>{
    return (repo.indexOf(customerQuery) != -1)
})

return filtered;
}

console.log(searchSuggestions(['mouse', 'mouse man', 'type'], "mo"));

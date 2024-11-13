// 2. Amazon Fresh Promo (example question)

// Amazon Fresh is running a promotion in which customers receive prizes for purchasing a secret combination of
// fruits. The combination will change each day, and the team running the promotion wants to use a code list to
// make it easy to change the combination. The code list contains groups of fruits. Both the order of the groups
// within the code list and the order of the fruits within the groups matter. However, between the groups of fruits,
// any number, and type of fruit is allowable. The term “anything” is used to allow for any type of fruit to appear in
// that location within the group.

// Consider the following secret code list: [[apple, apple], [banana, anything, banana]

// Based on the above secret code list, a customer who made either of the following purchases would win the
// prize:

// orange, apple, apple, banana, orange, banana

// apple, apple, orange, orange, banana, apple, banana, banana

// Write an algorithm to output 1 if the customer is a winner else output 0.

// Input

// The input to the function/method consists of two arguments:

// codeList, a string array of space-separated values representing the order and grouping of specific fruits that
// must be purchased in order to win the prize for the day.

// shoppingCart, a list representing the order in which a customer purchases fruit.

// Output
// Return an integer 1 if the customer is a winner else return 0.

// Note

// ‘anything’ in the codeList represents that any fruit can be ordered in place of ‘anything’ in the group.
// ‘anything’ has to be something, it cannot be “nothing.”

// ‘anything’ must represent one and only one fruit.

// If secret code list is empty then it is assumed that the customer is a winner.

// Examples
// Example 1:

// Input:

// codeList =

// [[apple, apple],

// [banana, anything, banana]

// shoppingCart =

// [orange, apple, apple, banana, orange, banana]

// Output:
// 1

// Explanation:

// codeList contains two groups - [apple, apple] and [banana, anything, banana].

// The second group contains ‘anything’ so any fruit can be ordered in place of ‘anything’ in the shoppingCart.
// The customer is a winner as the customer has added fruits in the order of fruits in the groups and the order of
// groups in the codeList is also maintained in the shoppingCart.
// 

// Example2:
// Input:

// codeList =

// [[apple, apple],

// [banana, anything, banana]]
// shoppingCart =

// [banana, orange, banana, apple, apple]

// Output:
// 0

// Explanation:
// The customer is not a winner as the customer has added the fruits in order of groups but group [banana,
// orange, banana] is not following the group [apple, apple] in the codeList.

// Example3:

// Input:

// codeList =

// [lapple, apple],

// [banana, anything, banana]]

// shoppingCart=

// [apple, banana, apple, banana, orange, banana]

// Output:
// 0

// Explanation:
// The customer is not a winner as the customer has added the fruits in an order which is not following the order
// of fruit names in the first group.

// Example4:

// Input:

// codeList =

// ([apple, apple],

// apple, apple, banana]]
// shoppingCart=

// apple, apple, apple, banana]

// Output:
// 0

// Explanation:
// The customer is not a winner as the first 2 fruits form group 1, all three fruits would form group 2, but can't
// because it would contain all fruits of group 1.

/*
 * Complete the 'foo' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY codeList
 *  2. STRING_ARRAY shoppingCart
 */




let usedcart = 0;

function arraysSame(arr1, arr2)
{
    // console.log('comparing', arr1); 
    // console.log('to', arr2);
    
    if (arr1.length !== arr2.length)
    return false;
    
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] != arr2[i] || (arr2[i] == 'something'))
            return false;
        
    }
    // console.log('found same', arr1, arr2);
    return true;
}

function groupsMatch(group, cartgroup){
    
    //gropu is array of array
    //cartgroup is array 

    let found = false;
    let lastindex = 0;
    for (let item of group){
        //go through array of arrays
        // eg apple, apple
        
        //go through cart, grab X array
        // compare        
        
        //get [apple, apple] 
        //now go throgh cargroup, grab each 2 array and compare til u reach end

        while (found == false && usedcart <cartgroup.length)
        {
            let compare = cartgroup.slice(lastindex, lastindex + item.length);
            
                    
            if (!arraysSame(item, compare))
            {
                lastindex = lastindex + 1; //push search location forward.
                
            }
            else
            {
                console.log('the same found for', item); 
                //found apple, apple - increase last index by 2.
                lastindex = lastindex + compare.length;          
                found = true;
            }
        }
        
        if (!found)
            return false;
    }
    //apple, apple 
    //apple
    return found;
}
function foo(codeList, shoppingCart) {
    let winner = 1;
    
    for (let code of codeList)
    {
        console.log('trying to find', code);
        
        //send as array of arrays for let operation
        if (!groupsMatch([code], shoppingCart)){
         console.log('did not find it');   
            winner = 0;       
        }else
        console.log('found it');            
    }

    return winner;
}

function foo2(codeList, shoppingCart) {
    // Write your code here
    let listIndex = 0;
    let ret = 0;
    let itemInListIndex = 0;
    const numberOfCodeLists = codeList.length;
    shoppingCart.forEach(shoppingCartItem => {
        const currList = codeList[listIndex].split(' ');
        const secretListCurrItem = currList[itemInListIndex];
        if (secretListCurrItem === shoppingCartItem ||
            secretListCurrItem === 'anything') 
        {
            itemInListIndex++;

            if (itemInListIndex === currList.length) {
                itemInListIndex = 0;
                listIndex++;
                if (listIndex === numberOfCodeLists) {
                    ret = 1;
                    return;
                }
            }
        }
        else {
            itemInListIndex = 0;
        }
    });

    return ret;
}

function foo3(codeList, shoppingCart) {
    // [[apple,apple], [banana,anything,banana]]
    
    // [apple, banana, apple, apple, orange, banana, orange, banana]
    // [apple, banana]
    // [apple]
    
    
    let codesIndex = 0,
    cartIndex = 0
    while(codesIndex < codeList.length && cartIndex < shoppingCart.length){
        const codeListItem = codeList[codesIndex].split(' ')
        let codeListItemIndex = 0
        while(codeListItemIndex < codeListItem.length && cartIndex<shoppingCart.length){
            
            if(codeListItem[codeListItemIndex]==='anything' || 
                codeListItem[codeListItemIndex] === shoppingCart[cartIndex]){
                    codeListItemIndex = codeListItemIndex+1
            } else {
                    codeListItemIndex = 0
            }
            cartIndex++
            
        }
        
        if(codeListItemIndex!==codeListItem.length) return 0
        codesIndex++
    }
    if(codeList.length>codesIndex) {
        return 0
    }
    return 1

}

function hasOrder(shoppingCart, index, order) {
    
    for(let i = 0; i < order.length; i++) {
        let currentCart = (shoppingCart[index]) ? shoppingCart[index].includes(order[i]) : false;
        if(index < shoppingCart.length && order[i].includes("anything") || currentCart) {
            index++;
        } else {
            return false;
        }
    }
    
    return true;
        
}

function foo4(codeList, shoppingCart) {
    
    let splitCodeList = codeList.map((eachList) => {
        return eachList.split(' ');
    });
    
    
    let cartIndex = 0;
    let codeIndex = 0;
    
    while(cartIndex < shoppingCart.length && codeIndex < splitCodeList.length) {
        let current = shoppingCart[cartIndex];
        if(splitCodeList[codeIndex][0].includes("anything") || splitCodeList[codeIndex][0].includes(current) && hasOrder(shoppingCart, cartIndex, splitCodeList[codeIndex])) {
            cartIndex += splitCodeList[codeIndex++].length;
        } else {
            cartIndex++;
        }
    }
    
    return codeIndex === codeList.length ? 1 : 0;

}

    console.log(foo([['orange'], ['apple', 'apple'], ['banana', 'apple', 'banana']],
    ['orange', 'apple', 'apple', 'banana', 'apple', 'banana']));


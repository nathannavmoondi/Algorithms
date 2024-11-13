//given the node of a tree, return
//an array where each element is the width
//of the tree at each levle

//eg:  20
//   / | \
//  1   2   3
//  |        |
//   4       5

//answer: [1,3,2]

///https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547238#announcements


class Node{

    constructor(data){
        this.data = data;
        this.children = [];

    }

    add(data){
        this.children.push(new Node(data));
    }

    remove(data){
        //set to all nodes that don't contain this data
        this.children = this.children.filter( (node) => {
                return node.data !== data;
        });
    }

}

function levelWidth(root){ //pass in root node

    //go through each level. insert random 'seperate' into it. eg; 20, S, 
    // have counters array starging value of 0.
    //each time hit S, add counter 1 to counters. each value in counters is the level.
    //when hit S, add to end.
    //when only S, you reached the end.

    const arr = [root, 's']; //first node then then s character.    
    const counters = [0];

    while(arr.length > 1) //more than just S
    { 
        const node = arr.shift(); //next working element. get 1st node and take it OUT.

        if (node === 's'){
            counters.push(0); //add next level
            arr.push('s'); //add s to end
        }
        else{
            //push to end of array it's children
            arr.push(...node.children); //found another level, add nodes to array
            counters[counters.length -1]++; //found a node. add 1.
        }
    }
    return counters;
}



const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);

console.log(levelWidth(root));

module.exports = { levelWidth, Node };
///depth first
//breadth first

//1) create node class.  constructor accepts data and init empty array for storing children

//2) create a tree class.  should have methods for add and remove

//3) implement traverseBFS and traverseDFS on the tree class

//breadth first. down down then up across https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547228#overview
//https://github.com/StephenGrider/AlgoCasts/blob/master/completed_exercises/tree/index.js

//depth first. like ceo, cto, dmo, coo, then vp, etc.

//        5
//       /
// 3, 2, 1  (children)

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
class Tree {
    constructor() {
      this.root = null;
    }
  
    traverseBF(fn) {
      const arr = [this.root]; //set top
      while (arr.length) {
        const node = arr.shift();
  
        arr.push(...node.children);
        fn(node); //take left most, add to output, throw it away
      }
    }
  
    traverseDF(fn) {
      const arr = [this.root];
      while (arr.length) {
        const node = arr.shift();
  
        arr.unshift(...node.children); //same as above but put first.
        fn(node); //take left most, add to output, throw it away
      }
    }
  }

//BF top down
let letters = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('c');
t.root.children[0].add('d');

t.traverseBF(node => {
  letters.push(node.data);
});
console.log('BF', letters); //abcd

//DF across
 letters = [];
const t2 = new Tree();
t2.root = new Node('a');
t2.root.add('b');
t2.root.add('d');
t2.root.children[0].add('c');

t2.traverseDF(node => {
  letters.push(node.data);
});
console.log('DF', letters); //abcd

module.exports = { Tree };
class Node{

    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
    
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        
        this.head = new Node(data, this.head);        

    }

    size() {
        let num = 0;
        let node = this.head;
        while (node){
            num++;
            node = node.next;
        }
        return  num;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        let node = this.head;
        let prev = null;
        if (!this.head)
            return null;
        while (node){   
            prev = node;    
            // if (!node.next)
            //     return node;     
            node = node.next;
        }
        return prev;
    }

    clear(){
        delete this.head;
        //this.head = null;
    }

    removeFirst(){
        if (!this.head)
        return null;        
        this.head = this.head.next;
    }

    removeLast(){
        let node = this.head
        let prev = null;

        while (node){
            prev = node;
            if (node.next.next == null)
                node.next = null;
            node = node.next;
        }

    }

    insertLast(num){
        let node = this.head
        let prev = null;

        while (node){
            prev = node;      
            node = node.next;
        }
        prev.next = new Node(num);
    }

    getAt(index){
        let ctr = 0;
        let node = this.head;
        while (node){
            if (ctr ===index)
            return node;
            ctr++;
            node = node.next;
        }
    }

    removeAt(index){
        let ctr = 0;
        let node = this.head;
        let prev = null;
        while (node){
            
            if (ctr ===index)
            {
                prev.next = node.next;
            }
            prev = node;
            ctr++;
            
            node = node.next;
        }
    }

    insertAt(index, data){

        if (!this.head){
            this.head = new Node(data);
        }

        if (index === 0)
        {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index-1) || this.getLast(); // if at end of chain. 
        const node = new Node(data, previous.next);'t h'

        previous.next = node;
    }

    showAll(){
        let node = this.head
        let prev = null;
        let str = "";

        while (node){
           str += node.data + "\n";
            node = node.next;
        }

        return str;
    }

}

const node = new Node(1);


const node2 = new Node(2, node);

const list = new LinkedList();
list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertFirst(4); // 4,3,2,1.

list.removeFirst();
list.insertLast(9);

console.log(list.showAll());
console.log('get at 1 is', list.getAt(1));
list.removeAt(1);
list.insertAt(1,2);
console.log(list.showAll());
// console.log(list);

// console.log(list.size());
// console.log(list.getLast()); //return 1

// list.removeFirst();
// console.log(list.size());
// list.clear();
// console.log(list.size());
module.exports = { node, LinkedList };
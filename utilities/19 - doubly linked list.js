class Node {
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // push
    push(val){
        const node = new Node(val);
        if(!this.head) this.head = node;
        else {
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;
        this.length++;
        return this;
    }
    // pop
    pop(){
        if(!this.head) return undefined;
        const popedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = popedNode.prev;   
            this.tail.next = null;
            popedNode.prev = null;
        }
        this.length--;
        return popedNode;
    } 
    // shift
    shift(){
        if(!this.head) return undefined;
        const shifted = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = shifted.next;
            this.head.prev = null;
            shifted.next = null;
        }
        this.length--;
        return shifted;
    }
    // unshift
    unshift(val){
        if(!this.head) return this.push(val);
        const node = new Node(val);
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
    // get
    get(index){
        if(this.length < index+1 || index < 0) return undefined;
        if(index === 0) return this.head;
        if(index === this.length -1) return this.tail;
        let current = this.head;
        for(let i = 1; i <= index; i++)
            current = current.next;
        return current;
    }
    // set
    set(index, val){
       const node = this.get(index);
        if(!node) return false;
        node.value = val;
        return true;
    }
    // insert
    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(value);
        if(index === this.length) return !!this.push(value);
        const node = new Node(value);
        const prevNode = this.get(index-1);
        node.next = prevNode.next;
        prevNode.next.prev = node;
        prevNode.next = node;
        node.prev = prevNode;
        return true;
    }
    // remove
    remove(index){
        if(index < 0 || index > this.length-1) return undefined;
        if(index === 0) return this.shift(index);
        if(index === this.length-1) return this.pop(index);
        const node = this.get(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.prev = null;
        node.next = null;
        return node;
    }
    // reverse
    reverse(){
        if(this.length === 0) return null;
        let currentNode = this.head;
        while(currentNode.next){
            const next = currentNode.next;
            [currentNode.next, currentNode.prev] = [currentNode.prev, currentNode.next];
            currentNode = next;
        }
        return this;
    }
}

const dll = new DoublyLinkedList();

dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
dll.push(6);
dll.push(7);
dll.push(8);
dll.push(9);
dll.push(10);



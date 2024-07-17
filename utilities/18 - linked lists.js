class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// const first = new Node("HI");
// first.next = new Node("Node");
// first.next.next = new Node("Three");
// first.next.next.next = new Node("Hello");
// first.next.next.next.next = new Node("World");

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        const node = new Node(value);
        this.length++;
        
        if(!this.head) this.head = node;
        else this.tail.next = node;        
        this.tail = node; 
        return this;
    }
    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    pop(){
        if(this.length === 0) return undefined;
        let current = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else {
            let newTail = current;
            while(current.next){
                newTail = current;
                current = current.next;
            }
            newTail.next = null;
            this.tail = newTail;
       }
        this.length--;
        return current;
    }
    shift(){
        if(this.length === 0) return undefined;
        let current = this.head;
        if(this.length === 1) this.tail = null;
        this.head = current.next ?? null;   
        this.length--;
        return current;
    }
    unshift(value){
        const node = new Node(value);
        node.next = this?.head ?? null;
        this.head = node;
        if(!this.tail)
            this.tail = node;
        this.length++;
        return this;
    }
    get(index){
        if(parseInt(index) != index) throw new Error(`invalid index passed need a positive integer received ${index}`)
        if(index >= this.length || index < 0) return null;
        let current = this.head;
        for(let i = 0; i < index; i++)
            current = current.next;
        return current;
    }
    set(index, value){
        const node = this.get(index);
         if(!node) return false;
        node.val = value;
        return true;
    }
    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === 0) !!this.unshift(value);
        if(index === this.length) !!this.push(value);
        const prev = this.get(index - 1);
        const node = new Node(value);
        node.next = prev.next;
        prev.next = node;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift(index);
        if(index === this.length - 1) return this.pop(index);
        const prevToRemovedItem = this.get(index - 1);
        const removedItem = prevToRemovedItem.next;
        prevToRemovedItem.next = removedItem.next;
        this.length--;
        return removedItem;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    
}

const list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");


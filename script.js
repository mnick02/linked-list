class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
       const newNode = new Node(value);
       this.size++;

       if (this.head === null) {
        this.head = newNode;
        return;
       }

       let current = this.head;
       while (current.nextNode) {
        current = current.nextNode;
       }
       current.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.size++;
    }

    getSize() {
        return this.size;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        while (current.nextNode){
            current = current.nextNode;
        }
        return current;
    }

    at(index) {
        if (index < 0 || !this.head) {
            return null;
        }

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.nextNode;
            count++;
        }

        return current;
    }

    pop() {
        if (!this.head) {
            return null;
        }

        if (!this.head.nextNode) {
            const popped = this.head;
            this.head = null;
            this.size--;
            //retunr popped?
        }

        let current = this.head;
        while(current.nextNode && current.nextNode.nextNode) {
            current = current.nextNode;
        }

        const popped = current.nextNode;
        current.nextNode = null;
        this.size--;
        //return poppped;
    }

    contains(value) {
        let current = this.head;
        while(current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let count = 0;
        while(current) {
            if(current.value === value) {
                return count;
            }
            current = current.nextNode;
            count++;
        }
        return null;
    }

    toString() {
        if (!this.head) {
            return "null";
        }

        let result = "";
        let current = this.head;
        while (current){
            result += `(${current.value}) -> `;
            current = current.nextNode;
        }
        result += "null";
        return result;
    }
}


const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.prepend("fish");
list.pop();
console.log(list.contains("hamster"));
console.log(list.find("snake"));
console.log(list.toString());

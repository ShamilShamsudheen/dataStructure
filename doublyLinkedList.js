class Node {
    constructor (data ,next = null) {
        this.data = data;
        this.next = next;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor (){
        this.head= null;
        this.tail = null;
        this.size =0;
    }
    // insert at First
    insertFirst(data){
       let node = new Node(data,this.head)
       if (!this.head) {
        this.head = node;
        this.tail = node;
       }else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        }
        this.size++;
    }
    // insert at Last
    insertLast(data){
        let node = new Node(data);
        if (this.tail) {
            this.tail.next = node;
        }else {
            this.head = node;
        }
        this.tail = node;
        this.size++;
    }
    
    // insert at index
    insertAt(data,index) {
        if (index > this.size || index < 0){
            return;
        }
        else if (index == 0){
            return this.insertFirst(data);
        }
        else if (index == this.size){
            return this.insertLast(data);
        }else{
        const node = new Node(data);
        let current = this.head;
        let count = 0;
        while(count < index){
            current = current.next;
            count++;

        }
        node.prev = current.prev;
        node.next = current;
        current.prev.next = node;
        current.prev = node;
        this.size++;
    }
    }
                                                   

    // display data
    display(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next;   
        }   
    }
    // display
}

const dl = new DoublyLinkedList()
dl.insertFirst(10)
dl.insertFirst(11)
dl.insertFirst(14)
dl.insertFirst(13)
dl.display()



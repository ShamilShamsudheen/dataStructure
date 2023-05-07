class Node {
    constructor(data,next = null) {
        this.data =data;
        this.next = next;
    }
}

// const n = new Node(100);
// console.log(n)


class linkedList  {
    constructor () {
        this.head = null;
        this.size = 0;
    }
    // insert data first 
    insertFirst (data) {
        
        this.head = new Node(data,this.head)
        
    }
    // insert data last 
    insertLast(data) {
        let node = new Node(data)
        let current;
        // if empty make head
        if(!this.head) {
            this.head = node;
        }else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    // insert at index
    insertAt (data,index) {
        if(index == 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }
        node.next=current;
        previous.next = node;

        this.size++;

    }
    // get at index
    getAt (index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count == index) {
                console.log(current.data)
            }
            current = current.next;
            count++;
        }
        return null;
    }
    // remove at index
    removeAt (index) {
        let current = this.head;
        let count = 0;
        if(index > 0 && index > this.size){
            return;
        }
        let previous;
        if (index == 0) {
            this.head = current.next;
        }else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;                
            }
            previous.next = current.next;
        }
        this.size-- ;
    }
    // replace at index
    replaceAt (data,index) {
        let node = new Node(data)
        let current = this.head;
        let count =0;
        while (current) {
            if (count == index){
                current.data = node.data;
            }
            count++
            current = current.next;
        }
    }
    // clear the linked list 
    clear () {
        this.head =null;
        this.size = 0;
    }
    //  remove Duplicate element 
    removeDuplicate(){
        let current = this.head;
        while (current) {
            
            let Next = current.next;
            while (Next!=null && Next.data == current.data)  {
                Next = Next.next;
            }
            current.next = Next;
            current = Next;
        }   
    }
    // display linked list output 
    printListData () {
        let current = this.head;
        while(current) {
            console.log(current.data)
            current = current.next;
        }
    }
    reverseLinkedList () {
        let current = this.head;
        let Next = null;
        let previous = null;
        while (current) {
            Next = current.next;
            current.next = previous;
            previous = current;
            current = Next;
        }
        this.head = previous;
    }
}

const ll = new linkedList()
ll.insertFirst(10)
ll.insertFirst(200)
ll.insertFirst(200)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)
// ll.insertAt(500,4)
// ll.getAt (3)
// ll.replaceAt(100,2)
ll.reverseLinkedList ()

// ll.clear()
ll.printListData()
console.log("finish")

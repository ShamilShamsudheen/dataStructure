class Node {
    constructor(data,next = null) {
        this.data =data;
        this.next = next;
    }
}
class linkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(data){
    let node = new Node(data);
    let current;
    if(!this.head){
        this.head = node;
        this.tail = node;
    }else {
        current = this.head;
        while(current.next !== this.tail){
            current = current.next;
        }
        this.tail = node;
    }
    this.size++;
    }
    display(){
        let current = this.head;
        while(current !== this.tail){
            console.log(current.data);
            current = current.next;
        }
    }
}
let ll = new linkedList()
ll.append(13)
ll.append(12)
ll.append(12)
ll.append(14)
ll.display()
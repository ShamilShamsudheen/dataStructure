class Node {
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}
class Stack {
    constructor(){
        this.top = null
        this.size=0;
    }
    push(data){
        let node = new Node(data);
        if(this.top == null){
            this.top = node;
        }else{
            node.next = this.top;
            this.top = node;
        
        }
    }
    pop(data){
        if(this.top == null){
            console.log("stack is underflow");
        }else{
            this.top = this.top.next;
        }

    }
    display(){
        while(this.top != null){
            console.log(this.top.data);
            this.top = this.top.next;
        }
        
    }
}
let stack = new Stack()
stack.push(12)
stack.push(11)
stack.push(15)
stack.pop()
stack.display();

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
    }
    enQueue(data){
        let node = new Node(data);
        if(this.rear == null){
            this.front = node;
            this.rear = node;
        }else{
            this.rear.next = node
            this.rear = node;
        }
    }
    deQueue(){
        
        if(this.front == null){
            console.log("queue is empty");
        }else{
           
            this.front = this.front.next
           
        }
    }
    show(){
        let node = this.front;
        while(node != null){
            console.log(node.data);
            node = node.next;
        }
    }
}
let queue = new Queue();
queue.enQueue(12);
queue.enQueue(14);
queue.enQueue(18);
queue.deQueue()
queue.show();
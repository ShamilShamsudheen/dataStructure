
class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.tail = null;
        this.size=0;
    }
    appent(data){
        let node = new Node(data);
        let current;
        if(this.head==null){
            this.head=node;
            
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next=node;
           
        }
        this.size++;
        
    }
    display(){
        let node = this.head;
        while(node){
            console.log(node.data);
            node = node.next;
        }
    }
}
let atl = new linkedList();
let array = [1,2,3,4,5,6]
for(let i = 0; i < array.length;i++){
    atl.appent(array[i]);  
}
// console.log(atl);
atl.display();

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    //set
    insert(data) {
      const newNode = new Node(data);
  
      if (!this.root) {
        this.root = newNode;
        // break;
        // console.log(this)
      }
  
      let currentNode = this.root;
  
      while (true) {
        if (data === currentNode.data) return undefined;
  
        if (data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            // console.log(this)
            break;
            // return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            // console.log(this)
            break;
            // return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
    //get
    contain(data){
      let currentNode = this.root;
      while(currentNode!==null) {
        if(data < currentNode.data){
          currentNode = currentNode.left;
        }else if(data > currentNode.data){
          currentNode = currentNode.right;
        }else{
          return true;
        }
      }
      return false;
    }
    //remove
    remove(data) {
      const parentNode = null;
      // console.log(data,this.root)
      this.removeHelper(data,this.root,parentNode);
    }
    removeHelper(data,currentNode,parentNode){
      while(currentNode!==null){
        if(data < currentNode.data){
          // console.log(data,currentNode.data,parentNode);
          parentNode = currentNode;
          // console.log(data,currentNode.data,parentNode);
          currentNode = currentNode.left;
          // console.log(data,currentNode.data,parentNode);
        }else if(data > currentNode.data){
          parentNode = currentNode;
          currentNode = currentNode.right;
        }else{
          if(currentNode.left!==null && currentNode.right!==null){
            currentNode.data = this.getMinValue(currentNode.right);
            this.removeHelper(currentNode.data,currentNode.right,currentNode);
          }else{
            if(parentNode==null){
              if(currentNode.right==null){
                this.root = currentNode.left;
              }else{
                this.root = currentNode.right;
              }
            }else{
              if(parentNode.left == currentNode){
                if(currentNode.right==null){
                  parentNode.left = currentNode.left;
                }else{
                  parentNode.left = currentNode.right;
                }
              }else{
                if(currentNode.right == null){
                  parentNode.right = currentNode.left;
                }else{
                  parentNode.right = currentNode.right;
                }
              }
            }
          }
          break;
        } 
      }
    }
    getMinValue(currentNode){
      if(currentNode.left == null){
        return currentNode.data;
      }else{
        return this.getMinValue(currentNode.left);
      }
    }
    //print methode 1.in order
    inOrder(){
      console.log("inOrder")
      const values = this.inOrderHelper(this.root);
      console.log(values.join(' '));
    }
    inOrderHelper(node,values =[]){
      if(node !== null){
        this.inOrderHelper(node.left,values);
        // console.log(node.data);
        values.push(node.data);
        this.inOrderHelper(node.right,values);
      }return values;
    }
    //2.pre order
    preOrder(){
      console.log("preOrder")
      const values = this.preOrderHelper(this.root);
      console.log(values.join(' '));
    }
    preOrderHelper(node,values =[]){
      if(node !== null){
        // console.log(node.data);
        values.push(node.data);
        this.preOrderHelper(node.left,values);
        this.preOrderHelper(node.right,values);
      }return values;
    }
    //post order
    postOrder(){
      console.log("postOrder")
      const values = this.postOrderHelper(this.root);
      console.log(values.join(' '));
    }
    postOrderHelper(node,values =[]){
      if(node !== null){
        this.postOrderHelper(node.left,values);
        this.postOrderHelper(node.right,values);
        // console.log(node.data); 
        values.push(node.data);
      }return values;
    }
    findClosesValue(target){
      let current = this.root;
      let closest = current.data;
      while(current !== null){
        if(Math.abs(target - closest) > Math.abs(target - current.data)){
          closest = current.data;
        }
        if(target < current.data){
          current = current.left;
        }else if(target > current.data){
          current = current.right;
        }else{
          break;
        }
      }
      return closest;
    }
    bfsLevel(){
      const queue =[];
      queue.push(this.root);
      while(queue.length){
        let current = queue.shift();
        console.log(current.data);
        if(current.left){
          queue.push(current.left);
        }
        if(current.right){
          queue.push(current.right);
        }
      }
    }
    
  
  }
let bts = new BinarySearchTree();
bts.insert(10);
bts.insert(30);
bts.insert(59);
bts.insert(17);
bts.insert(7);
bts.insert(5);
// console.log('insert completed');
// bts.remove(12);
// console.log('remove completed');
// console.log(bts.contain(12));
// console.log('check complete');
// bts.inOrder();
// bts.postOrder();
// bts.preOrder();
bts.bfsLevel();
// console.log(bts.findClosesValue(12));
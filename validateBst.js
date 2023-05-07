class treeNode {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}
let root = new treeNode(5);
root.left = new treeNode(3);
root.right = new treeNode(7);
root.left.left = new treeNode(2);
root.left.right = new treeNode(4);
root.right.left = new treeNode(6);
root.right.right = new treeNode(8);

function bstVallidate(root,min,max){
    if(root === null){
        return true;
    }
    if((root.data <= min || root.data >= max)){
        return false;
    }
    return bstVallidate(root.left,min,root.data) && bstVallidate(root.right,root.data,max)
}
console.log((bstVallidate(root,-Infinity,Infinity)));
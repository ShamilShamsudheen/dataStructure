class minHeap {
    constructor(){
        this.heap = new Array();
    }
   
    minHeap(arr){
        this.buildHeap(arr);
    }
    buildHeap(arr){
        this.heap = arr;
        for(let i = this.parent(this.heap.length-1); i>=0; i--){
            this.swiftDown(i);
        }
    }
    swiftDown(currentIdx){
        let endIdx = this.heap.length-1;
        let leftIdx = this.leftChild(currentIdx);
        while(leftIdx <= endIdx){
            let rightIdx = this.rightChild(currentIdx);
            let idxToShift;
            if(rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]){
                idxToShift = rightIdx;
            }else{
                idxToShift = leftIdx;
            }
            if(this.heap[currentIdx] > this.heap[idxToShift]){
                this.swap(this.heap,currentIdx,idxToShift);
                currentIdx = idxToShift;
                leftIdx = this.leftChild(currentIdx);
            }else{
                return;
            }
        }
    }
    swiftUp(currentIdx){
        let parentIdx = this.parent(currentIdx);
        while(currentIdx > 0 && this.heap[parentIdx] > this.heap[currentIdx]){
            this.swap(this.heap,parentIdx,currentIdx);
            currentIdx = parentIdx;
            parentIdx = this.parent(currentIdx);
        }
    }
    peak(){
        return this.heap[0];
    }
    remove(){
        this.swap(heap,0,this.heap.length-1);
        this.heap.pop();
        this.swiftDown(0);
    }
    insert(data){
        this.heap.push(data);
        this.swiftUp(this.heap.length-1);
    }
    parent(i){
        return Math.floor((i-1)/2);
    }
    leftChild(i){
        return (i*2)+1;
    }
    rightChild(i){
        return (i*2)+2;
    }
    swap(arr,i,j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    display(){
        for(let i=0;i<this.heap.length;i++){
            console.log(this.heap[i]);
        }
    }
}
let arr = [8,3,7,4,5,9];
let heapArr = new minHeap();
heapArr.insert(8)
heapArr.insert(3)
heapArr.insert(7)
heapArr.insert(4)
heapArr.insert(5)
heapArr.insert(9)
heapArr.insert(1)
heapArr.minHeap(arr);
heapArr.display()
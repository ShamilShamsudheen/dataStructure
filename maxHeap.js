class maxHeap{
    constructor(){
        this.heap = new Array;
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
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        // console.log(arr,i,j)
    }
    display(){
        for(let i=0;i<this.heap.length;i++){
            console.log(this.heap[i]);
        }
    }
    maxHeap(arr){
        this.buildHeap(arr);
    }
    buildHeap(arr){
        this.heap = arr;
        for(let i= this.parent(this.heap.length-1);i>=0;i--){
            this.shiftDown(i,this.heap.lenght-1);
        }
    }
    shiftDown(currentIdx,endIdx){
        // let endIdx = this.heap.length-1;
        let leftIdx = this.leftChild(currentIdx);
        while(leftIdx <= endIdx){
            let rightIdx = this.rightChild(currentIdx);
            let idxToShift;
            if(rightIdx <= endIdx && this.heap[rightIdx] > this.heap[leftIdx]){
                idxToShift = rightIdx;
            }else{
                idxToShift = leftIdx;
            }
            if(this.heap[idxToShift]> this.heap[currentIdx]){
                this.swap(this.heap , idxToShift , currentIdx);
                currentIdx = idxToShift;
                leftIdx = this.leftChild(currentIdx);
            }else{
                return;
            }
        }
    }
    insert(data){
        this.heap.push(data);
        this.shiftUp(this.heap.length-1);
    }
    shiftUp(currentIdx){
        let parentIdx = this.parent(currentIdx);
        while(currentIdx >0 && this.heap[parentIdx] < this.heap[currentIdx]){
            this.swap(this.heap , parentIdx , currentIdx);
            currentIdx = parentIdx;
            parentIdx = this.parent(currentIdx);
        }
    }
    remove(){
        this.swap(this.heap, 0, this.heap.length-1);
        this.heap.pop();
        this.shiftUp(this.length-1);
    }
    heapSort () {
        for(let i=this.heap.length-1;i>=0;i--){
            this.sort(this.heap,0,i);
            this.shiftDown(0,i-1);
        }
        console.log(this.heap);
    }
    sort(arr,i,j){
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        console.log(arr,i,j);
    }
       
}
let arr = [8,3,7,4,5,9];
let heapArr = new maxHeap();
heapArr.maxHeap(arr);
// heapArr.insert(8);   
// heapArr.insert(3);
// heapArr.insert(4);
// heapArr.insert(5);
// heapArr.insert(9);
heapArr.heapSort();
// heapArr.display()

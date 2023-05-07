// bubble sorting:
function bubbleSorting(arr){
    for (let i=0;i<arr.length;i++) {
        for (let j=i+1;j<arr.length;j++) {
            if(arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }return arr;
}
let arr = [2,5,6,3,1,10,7,0];
console.log("bubbleSorting");
console.log(bubbleSorting(arr));

// insertion Sorting

function insertionSort(arr){
    for(let i=0;i<arr.length;i++) {
        let current = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
     }return arr;
}
console.log("insertionSort");
console.log(insertionSort(arr));

// selection Sorting

function selectionSort(arrS){
    for(let i=0;i<arrS.length;i++) {
        let minIndex = i;
        for (let j=i+1;j<arrS.length;j++) {
            if (arrS[j] < arrS[minIndex]){
                minIndex = j;
            }
            let temp = arrS[i];
            arrS[i] = arrS[minIndex];
            arrS[minIndex] = temp;
        }
    }return arrS;
}
let arrS = [2,5,6,3,1,10,7,0];
console.log("selectionSort");
console.log(selectionSort(arr));  

//quicksorting   
function quickSort(array){
    endIdx = array.length-1;
    quickSorting(array,0,endIdx);
    return array;
}

function quickSorting(array,startIdx,endIdx){
    if(startIdx>=endIdx){
        return array;
    }
   let pivotIdx = startIdx;
   let leftIdx = startIdx+1;
   let rightIdx = endIdx;
   while(leftIdx<=rightIdx){
    if(array[leftIdx]>array[pivotIdx] && array[rightIdx]<array[pivotIdx]){
        const temp = array[leftIdx];
        array[leftIdx] = array[rightIdx];
        array[rightIdx] = temp;
        leftIdx++;rightIdx--;
    }
    if(array[rightIdx]>array[pivotIdx]){
        rightIdx--;
    }if(array[leftIdx]<array[pivotIdx]){
        leftIdx++;
    }
   }
   swap(array,pivotIdx,rightIdx);
   quickSorting(array,startIdx,rightIdx-1);
   quickSorting(array,rightIdx+1,endIdx)

}

function swap(array,pivotIdx,rightIdx){
    const temp = array[pivotIdx];
    array[pivotIdx] = array[rightIdx];
    array[rightIdx] = temp;
    return array;
}
let array =[32,14,16,2,21,62,4,25,11]

console.log("quickSort");
console.log(quickSort(array));

//merge sorting

function mergeSort(array){
    if(array.length<=1){
        return array;
    }
    let mid = parseInt(array.length/2);
    let firstHalf = array.slice(0,mid);
    let secondHalf = array.slice(mid);
    return join(mergeSort(firstHalf),mergeSort(secondHalf))
    
}
function join(firstHalf,secondHalf){
    let result = [];
    let i=0;let j=0;
    while(j<secondHalf.length && i<firstHalf.length){
        if(firstHalf[i]<=secondHalf[j]){
            result.push(firstHalf[i++]);
        }else{  
            result.push(secondHalf[j++]);
        }
    }while(i<firstHalf.length){
        result.push(firstHalf[i++]);
    }
    while(j<secondHalf.length){
        result.push(secondHalf[j++]);
    }
    return result;
    
}
let arrayM = [32,14,16,2,21,62,4,25,11]
console.log("mergeSort");
console.log(mergeSort(arrayM));


function factorial(n){
    if(n<=1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5));

function display(n){
    if(n<=1){
        return;
    }else{
        display(n-1);
        console.log(n);
        display(n-1);
    }
}
display(3); 
function fibanocci(n){
    if(n<=1){
        return n;
    }else{
       return fibanocci(n-1)+fibanocci(n-2); 
    }
    
}
function  printListData(n){
    for(var i=0; i<n; i++){
        console.log(fibanocci(i));
    }
}
printListData(7)

function biSearch(arr,target,start,end){
    const mid = Math.floor((start + end) / 2);
    if(arr[mid] == target){
        return mid;
    }else if(arr[mid]<target){
        return biSearch(arr,target,start,end =mid-1)
    }else if(arr[mid]>target){
        return biSearch(arr,target,start=mid+1,end)
    }else{
        return -1;
    }
}
let arr = [1,2,3,4,5,6,7];
let index = biSearch(arr,4,0,arr.length);
console.log(index);
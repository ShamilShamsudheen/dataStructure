function biSearch(arr, target){
    let start =0;
    let end =arr.length-1;
    while(start<=end){
        const mid = start +(end-start)/2;
        if(arr[mid]==target){
            return mid;
        }else if(arr[mid]<target){
            start = mid+1;
        }else if(arr[mid]>target){
            end = mid-1;
        }
    } 
}
let arr =[1,2,3,4,5,6,7,8]
function biSearch(array, data){
    let start = 0;
    let end = array.length-1;
   
    
    while(start<=end){
        const mid = parseInt(start + ( (end - start) / 2));
        if(array[mid] > data){
            end = mid - 1;
        }else if(array[mid] < data){
            start = mid + 1;
        }else if(array[mid] == data){
            return mid;
        }
    }
}
let array = [1,2,3,4,5,6,7,8,9,10];


console.log(biSearch(array,6));

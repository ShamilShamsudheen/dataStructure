// arr = [2,1,4,3,15,5,3]
// let largest =0;
// let second =0;
// for(let i=1; i<arr.length; i++){
//     if(arr[i] > arr[i-1]){
//         second = largest;
//         largest = i;
//     }
// }console.log((2*arr[second]<=arr[largest]) ? largest :-1);
// class treiNode {
//     constructor(){
//         this.children = {}
//         this.end = false;
//     }
// }
// class trie{
//     constructor(){
//         this.root = new treiNode();
//     }
//     insert(word){
//         for(let i=0; i<word.length; i++){
//             let char = word[i];
//             if(!this.children[char]){
//                 this.children[char] = new treiNode();
//             }
//             this.children = this.children[char];
//         }
//         this.end = true;
//     }
// }
function hello(nums) {
    let arr=[]
    for(let i=0;i<=nums.length-1;i++){
        for(j=i+1;j<=nums.length;j++){
            if(nums[i]==nums[j]){
                nums.splice(nums[i],1)
                arr.push(nums[i])
            }
        }
    }
    return nums
};
var removeDuplicates = hello([0,0,1,1,1,2,2,3,3,4])
console.log(removeDuplicates);
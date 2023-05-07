// let arr = [1,2,3,4,5,6]

// let num = 5


// for(let i=0;i<num;i++){
//     let last = arr[arr.length-1]
//     for(let j=arr.length-1;j>0;j--){
//         arr[j]= arr[j-1]
//     }
//     arr[0]=last
// }
// console.log(arr);
function longestCommonPrefix(strs) {
    if (!strs.length) {
      return '';
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        console.log(strs[i].indexOf(prefix) )
      while (strs[i].indexOf(prefix) !== 0) {
        
        prefix = prefix.substring(0, prefix.length - 1);
        if (!prefix.length) {
          return '';
        }
      }
    }
    return prefix;
  }
console.log(longestCommonPrefix(['derfgb ', 'dertyu', 'derfghjk', 'dertyu']));  
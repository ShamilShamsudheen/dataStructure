let array = [6, 1, 6, 3, 4, 56, 7, 8,0, 6]
let target = 6;
const nonTargetArray = array.filter((item)=>item !== target)
const targetArray = array.filter((item)=>item == target)
const resultArray = nonTargetArray.concat(targetArray)
console.log (resultArray)
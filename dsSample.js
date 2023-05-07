// let array = [6,5,4,3,9,8,0]
// let target = 10;
//  let result = function(array, target) {
//     let match = []
//     for (let i = 0; i < array.length;i++) {
//         let num = target - array[i];
//         if(match.includes(num)){
//             console.log(array[i],num)
//         }else{
//             match.push(array[i]);;
//         }
//     }
//  }
// result(array, target)


// let array = [6, 1, 6, 3, 4, 56, 7, 8,0, 6]
// let target = 6;
// const nonTargetArray = array.filter((item)=>item !== target)
// const targetArray = array.filter((item)=>item == target)
// const resultArray = nonTargetArray.concat(targetArray)
// console.log (resultArray)



class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class linkedList{
    constructor(){
        this.head = null;
    }

    // add list 
    addValue(value){
        const data = new Node(value);
        if  (this.head === null){ //indicate current linked list is empty
            this.head = data;
        }else{
            let current = this.head;
            while (current !== null){
                current = current.next;
            }
            current.next = data;
        }
    }
}

const list = new linkedList()
list.addValue(12)
console.log(list.head)

function stringAscii(string,key){
    let newKey = key % 26;
    let charArray = string.split(',')
    // return charArray
    for (let i = 0; i < string.length;i++){
        const letterPosition = string.charCodeAt(i) + newKey;
        if (letterPosition <= 122) {
            charArray[i] = String.fromCharCode(letterPosition)
        }else {
            charArray[i] = String.fromCharCode(96+letterPosition%122);
        }
        
        
    }return charArray.join('');

}
console.log("message convertion")
console.log(stringAscii('basim',3))

function string(str){
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
   }return result; 
}
console.log("messge reverse conversion")
console.log(string('basim'));

function stringCount(str){
    let count =1;
    let result =[]
    for (let i = 1; i < str.length; i++) {
        while(str[i-1]==str[i]){
            count++;i++;

        }
        console.log(`${count}${str[i-1]}`);
        count = 1;
    }
    return result;
}
console.log("string count")
stringCount('AAABBEEVVYYCCC');
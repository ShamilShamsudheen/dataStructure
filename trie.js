// class trieNode{
//     constructor(){
//         this.children = {};
//         this.end = false;
//     }
// }
// class trie{
//     constructor(){
//         this.root = new trieNode();
//     }
//     insert (word){
//         let currentNode = this.root;
//         for(let i = 0; i < word.length; i++){
//             let char = word[i];
//             if(!(char in currentNode.children)){
//                 currentNode.children[char] = new trieNode();
//             }
//             currentNode = currentNode.children[char];
//         }
//         currentNode.end = true;
//     }
//     search (word){
//         let currentNode = this.root;
//         for(let i = 0; i < word.length; i++){
//             let char = word[i];
//             if(!(char in currentNode.children)){
//                 return false;
//             }
//             currentNode = currentNode.children[char];
//         }
//         return true;
//     }

// }
// let trieTree = new trie();
// trieTree.insert('diyouf');
// trieTree.insert('shamil');
// trieTree.insert('basim');
// trieTree.insert('shiyas');
// trieTree.insert('liyan');
// console.log(trieTree.search('sha'));
// // console.log(trieTree.display());
// class sufixNode{
//     constructor(){
//         this.children = {};
//         this.end = false;
//     }
// }
// class sufix{
//     constructor(){
//         this.root = new sufixNode();
//     }
//     insert(word){
//         // let currentNode = this.root;
//         for(let i = 0;i< word.length; i++) {
//             this.sufixInsert(word,i);
//         }
//     }
//     sufixInsert(word,index){
//         let currentNode = this.root;
//         for(let i = index; i < word.length; i++){
//             let char = word[i];
//             if(!(char in currentNode.children)){
//                 currentNode.children[char] = new sufixNode();
//             }
//             currentNode = currentNode.children[char];
//         }
//         currentNode.end = true;
//         // console.log(this.root);
//     }
//     sufixSearch(word){
//         let currentNode = this.root;
//         for(let i = 0; i<word.length; i++){
//             let char = word[i];
//             if(!(char in currentNode.children)){
//                 return false;
//             }
//             currentNode = currentNode.children[char];
//         }
//         return true;
//     }
// }
// let sufixWord = new sufix();
// sufixWord.insert('shamil');
// console.log(sufixWord.sufixSearch('ami'));

// class Node{
//     constructor(){
//         this.child = {};
//         this.end = false;
//     }
// }

// class TRIE{
//     constructor(){
//         this.root = new Node();
//     }

//     prefix(word){
//         let currentNode = this.root

//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!(char in currentNode.child)){

//                 currentNode.child[char] = new Node();
//             }
//             currentNode = currentNode.child[char]
//         }
//         currentNode.end =true;
//     }

//     suffix(word){
//         console.log(word)
//         for(let i=0;i<word.length;i++ ){
//             this.suffixInsert(word,i);
//             // console.log(i)
//         }
//     }
//     suffixInsert(word,index){
//         let currentNode=this.root;

//         for(let i=index;i<word.length;i++){
//             let char = word[i];
//             // console.log(char)
//             if(!(char in currentNode.child)){
//                 currentNode.child[char] = new Node();
//             }
//             currentNode = currentNode.child[char]
//         }
//         currentNode.end = true;
//         // console.log(this.root);
//     }

//     search(word){
//         let currentNode = this.root;
//         for(let i=0;i<word.length;i++){
//             let char = word[i];
//             if(!(char in currentNode.child)){
//                 return false;
//             }
//             currentNode = currentNode.child[char];
//         }
//         return true;
//     }
// }

// let trie = new TRIE()

// trie.suffix('shamil')
// trie.suffix('liyan')
// console.log(trie.search('yan'))


class Node {
    constructor() {
        this.child = {}
        this.end = false
    }
}

class TRIE {
    constructor() {
        this.root = new Node()
    }
    prefix(word) {
        let currentNode = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!(char in currentNode.child)) {
                currentNode.child[char] = new Node()
            }
            currentNode = currentNode.child[char]
        }
        currentNode.end = true
    }
    suffix(word) {
        for (let i = 0; i < word.length; i++) {
            this.suffixInsert(word, i)
        }
    }
    suffixInsert(word, index) {
        let currentNode = this.root
        for (let i = index; i < word.length; i++) {
            let char = word[i]
            if (!(char in currentNode.child)) {
                currentNode.child[char] = new Node()
            }
            currentNode = currentNode.child[char]
        }
        currentNode.end = true
    }
    search(word) {
        let currentNode = this.root
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (!(char in currentNode.child)) {
                return false
            }
            currentNode = currentNode.child[char]
        }
return true

    }
}

let trie = new TRIE()

trie.suffix('shamil')
trie.suffix('liyan')
console.log(trie.search('abc'))
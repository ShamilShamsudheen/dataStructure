class Node{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let hash = 0;
        for(let i = 0; i < key.length;i++){
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }
    Set(key, value){
        let index = this.hash(key);
        // this.table[index] = value;
        let  bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key, value]];
        }else{
            const sameKeyItem = bucket.find(item => item[0]===key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else {
                bucket.push([key, value]);
            }
        }
    }
    get(key){
        let index = this.hash(key);
        // return this.table[index];
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined;
    }
    
}
let table = new Node();
table.Set('name', 'shamil');
table.Set('name','shamsudheen')
table.Set('age', 30);

console.log(table.get ('name'));

class hashMap { 
    constructor(size){
        this.size = size;
        this.map = new Array(size);
    }
    getHash(key){
        let hash =0;
        for (let i = 0; i < key.length; i++){
            hash = (hash << 5) - hash + key.charCodeAt(i);
            hash |= 0;
           
        }
        return hash % this.size;    
    }
    add(key, value){
        const index = this.getHash(key);
        if(!this.map[index]){
            this.map[index] = [];
        }
        for (let i = 0; i < this.map[index].length; i++){
            if(this.map[index][i][0] === key){
                this.map[index][i][1] = value;
                return;
            }
        }
        this.map[index].push([key, value]);
    }
    get(key){
        const index = this.getHash(key);
        if(!this.map[index]){
            return undefined;
        }
        for(let i = 0; i <this.map[index].length; i++){
            if(this.map[index][i][0] === key){
                return this.map[index][i][1];
            }
        }
    }
    display(){
        
        for (let i = 0; i < this.map[index].length; i++) {
          if (this.map[index][i][0] === key) {
            return this.map[index][i][1];
          }
        }
        return undefined;
      }
}

const myHashMap = new hashMap(5);
myHashMap.add('founder', 'shamil');
myHashMap.add('ceo', 'basim');
myHashMap.add('leadinghead', 'diyouf');
myHashMap.add('techhead', 'shiyas');
myHashMap.add('hr', 'liyan');
console.log(myHashMap.get('leadinghead'));
myHashMap.display()
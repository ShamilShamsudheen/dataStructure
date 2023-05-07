let arr =[1,2,3,5,7]

let s=12

let sum =0
       let cout =0;
       var i=0
       arr.sort()
   
       for(i=0;i<5;i++){
        let j=i;
           while(j<5)
           sum += arr[j]
           if (sum==s){
            console.log(i+" "+j)
            break;
           }
       }

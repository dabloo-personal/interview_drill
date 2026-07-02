let arr = [1, 2, 3, 4, 5, 6]

let rotate =4;
for(let i=0;i<rotate;i++){
    let temp
    for(j=0;j<arr.length;j++){
        if(j==0){
         temp=arr[j]
        }
       if(j>0){
        arr[j-1]=arr[j]
       }
    }
    arr[arr.length-1]=temp 
}

console.log("arr result",arr)
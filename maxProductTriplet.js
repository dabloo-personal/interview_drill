let arr =   [1, -4, 3, -6, 7, 0]

for(let i=0;i<arr.length;i++){
    for(j=1;j<arr.length;j++){
        if(arr[j]<arr[j-1]){
            let temp = arr[j-1]
            arr[j-1]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr)

console.log(arr[arr.length-1]*arr[arr.length-2]*arr[arr.length-3])
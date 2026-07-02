let array = [12, 35, 1, 10, 34, 1,35]


for(let i=0;i<array.length-1;i++){
    for(let j=i+1;j<array.length-1;j++){
        if(array[i]>array[j]){
            let temp = array[i]
            array[i]=array[j]
            array[j]=temp
        }
    }
}

for(let i=array.length-1;i>0;i--){
    console.log(array)
    for(j=i-1;j>0;j--){
        if(array[j]<array[i]){
            console.log("second largest",array[j])
            return
        }
    }
}

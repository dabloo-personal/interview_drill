let arr = [1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0]

let result = [0,0];

if(arr.length==0){
console.log("count ",0)
}
else if (arr.length==1){
console.log("count",1)
}
else{
   count =1;
for(let i=1;i<arr.length;i++){
  if(arr[i]===arr[i-1]){
    count++
  }
  else{
    if(count>result[0]){
        result[0]=count;
        result[1]=arr[i-1];
    }
 count=1
  }
   if(count>result[0]){
        result[0]=count;
        result[1]=arr[i-1];
    }

}

console.log("result",result) 
}
("result",result)
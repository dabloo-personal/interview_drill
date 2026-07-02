let arr = [12, 35, 1, 10, 34, 1,35]
let n
if(arr.length%2===0){
  let temp ;
  let low =0;
  let high=arr.length-1
   n=arr.length/2
  for(let i=low ;i<n;i++){
    temp = arr[low]
    arr[low]=arr[high]
    arr[high]=temp
    low++;
    high--
  }
  console.log("even",arr)
}
else{
  n=(arr.length-1)/2
  console.log("array",arr,n)
  let temp ;
  let low =0;
  let high=arr.length-1
for(let i=low;i<n;i++){
    temp = arr[low]
    arr[low]=arr[high]
    arr[high]=temp
    low++;
    high--
}
  console.log("odd",arr)
}
let arr = [1,2,3,4,5,6,7,8]
let k = 2;

let n= arr.length

//if arr length % k =0 means n/k round else n/k +1 round 

let round 
if(n%k==0){
    round= n/k
}
else{
    round = (Math.floor(n/k))+1
}
let lengthOfLastRound = n%k;
for(let i=0;i<round;i++){
    let low = k*i
    let high = i*k +(k-1)
    let temp
    console.log("low",low,"high",high)
    console.log(Math.floor((low+high)/2))
    for(let j=low;k%2==0 ? j<=Math.floor((low+high)/2):j<Math.floor((low+high)/2);j++){
        console.log("low-high",low,high)
        temp=arr[low];
        arr[low]=arr[high];
        arr[high]=temp
        low++;
        high--
    }
}
console.log("result array",arr)
let arr = [0, 1, 0, 1, 1, 1,1]

// maxOccureence 

let final_target = [0,0]
let count =1;
let targetIndex =0;

for(let i=1;i<arr.length;i++){
    if(arr[i]!==targetIndex){
        if(count >final_target[1]){
            final_target[0]=targetIndex;
            final_target[1]=count;
        }
        else{
            count=1;
            targetIndex=arr[i];
        }
    }
    count++

}

if(count>final_target[1]){
    final_target[0]=targetIndex;
    final_target[1]=count;
}

console.log("final target",final_target)
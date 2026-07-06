let string = "aabbaa"
let copy ='';
for (let i=string.length-1;i>=0;i--){
 copy=copy+string[i]
}
if(string==copy){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}


let str = "i.like.this.program.very.much" 
let arr=[]
let bag ='';
for(let i=0;i<str.length;i++){
    if(str[i]=='.'){
       arr.push(bag)
        bag=''
    }
    else{
        bag+=str[i]
    }
}
arr.push(bag)
console.log("arr",arr)
let reverseString = arr.reverse().join('.')
console.log("reverse words",reverseString)
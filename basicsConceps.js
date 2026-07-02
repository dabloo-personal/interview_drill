//Question 1 

let obj = {};
obj[{}] = 1;//[object,object]
obj[{}] = 2; //[object,object]
console.log(obj); //outupt - 2 because the when we try to assing the value like this in js then it treat the any value inside the array 
// '{}' as [object ,object ] because of type coerstion soo it console 2;

console.log(NaN === NaN);

//output will be false because in javascript NAN means not a number (invalid number )
//and in js rules Nan is not equal to amything even not equal to itself


console.log("5" - 2);
//3 if "a"-2 = NaN
console.log("3"+3)
// output = 33

console.log(typeof null)
//object

//Shallow copy and deep copy 

    let user = {
  name:"Dabloo",
  address :{
    city:"delhi",
  }
}
// shallo copy example 

// let shallowCopy = {...user}
// shallowCopy.address.city = "bangalore";

// console.log(user.address)


// let copy = JSON.parse(JSON.stringify(user))

// copy.address.city="Mumbai";

// console.log(copy.address.city)
 

let deepCopy = JSON.parse(JSON.stringify(user))
deepCopy.address.city = "bangalore"
console.log("deep copy user ",user.address.city)
const promise = new Promise((resolve, reject) => {
  reject("Order rejected ");
});

promise.then((result) => {
  console.log(result);
}).catch(()=>{
  console.log("error")
})
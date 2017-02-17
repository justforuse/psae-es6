// 示例
// var promise = new Promise(function(resolve, reject){
//     if(1){
//         resolve("you are right");
//     }else{
//         reject("you are wrong");
//     }
// })

// promise.then(res=>console.log(res), err=>console.log(err));

// var promise = new Promise(function(resolve, reject){
//     resolve(1);
// })
// promise.then(res=>console.log("ok"), err=>console.log("error"));

// catch
var promise = new Promise(function (resolve, reject) {
    reject("catch wrong");
})

promise.then().then().catch(err => console.log(err));
//对象简洁表示
// var name = '123';
// var age = 18;
// sayHello : function(){
//         console.log("hello");
//     }
// var sayHello = function(){
//     console.log("hola");
// }
// var p = {
//     name,
//     age,
//     sayHello,
//     get age(){
//         console.log("getting age...");
//         return this.age;
//     }
// }

// console.log(p.age)

// Object.assign
var person = {name:"abc"};
var p1 = {age:18};
var p2 = {country:"china"}

Object.assign(person, p1, p2);
console.log(person);
// 属性名表达式
// let func = "getName";
// class Person{
//     constructor(name, age){
//        this.name = name;
//        this.age = age; 
//     }
//     [func](){
//         console.log("abc");
//     }
// }
// var p = new Person("allen", 18);
// console.log(p)

// getter setter
// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     get info(){
//         console.log("get info...");
//         return `name: ${this.name}, age: ${this.age}`
//     }
//     set info(value){
//         console.log("set info...");

//     }

//     static getHands(){
//         console.log(2);
//     }
//     // get age(){
//     //     console.log("get age");
//     // }
// }

// var a = new Person("allen", 18);
// console.log(a.info);
// a.info = "changed";
// Person.getHands();



// new.target
class Person{
    constructor(){
        console.log(new.target === Person)
    }
    
}
class Student extends Person {
    constructor(){
        super()
    }
}
var s = new Student();
var p = new Person();
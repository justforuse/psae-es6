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

// 继承
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayName(){
//         console.log(`My name is ${this.name}`);
//         return `My name is ${this.name}`;
//     }
// }

// class Student extends Person{
//     constructor(name,age,grade){
//         super(name, age);
//         this.grade = grade;
//     }
//     sayName(){
//         console.log(super.sayName() + ` and my grade is ${this.grade}`);
//     }
// }

// let s = new Student("allen", 18, "senior");
// console.log(s);
// s.sayName();


// 原生构造函数的继承
// class MyArray extends Array{
//     constructor(...args){
// 	super(...args);
//     }
//     func(){
// 	console.log(`length is ${this.length}`);
//     }
// }
// var arr = new MyArray(1,2,3);
// arr.func();


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


class Person{
    static Info(){
        console.log("I’m Class Person");
    }
}
//目前要定义静态属性只有这种写法
Person.hands = 2;
Person.eyes = 2;
var p = new Person();
// Person.Info();
// p.Info();
console.log(Person.hands);
console.log(p.hands);



// new.target
// class Person{
//     constructor(){
//         console.log(new.target === Person)
//     }
    
// }
// class Student extends Person {
//     constructor(){                                                        
//         super()
//     }
// }
// var s = new Student();
// var p = new Person();
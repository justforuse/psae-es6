// 块级作用域
// let a = "a";
// function func() {
//     let a = "aa";

//     if (true) {
//         let a = "aaa";
//     }
//     console.log("inside: ",a);
// }

// func();
// console.log("outside: ", a);

// var aaa a
// let aa a

// 块级作用域
// let a = "outside";
// {
//     let a = "inside";
// }
// console.log(a);

// demo2
// var a = [];
// for (var i = 0; i < 3; i++) {
//     a[i] = function () {
//         return i;
//     };
// }

// console.log(a[1]());



// demo3 暂时性死区
// a3="abc";
// console.log(a3);
// let a3;

// if(1){
//     a3 = 123;
//     console.log(a3);
//     let a3;
// }

// 不允许重复声明
// var a4 = 123;
// let a4 = 456;
// console.log(a4);

// const
// const PI = 3;





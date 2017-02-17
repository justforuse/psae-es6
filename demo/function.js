// function func(x=1,y){
//     console.log(x,y)
// }

// console.log(func.length)

// rest参数
// function func(a, b, ...values) {
//     console.log(a, b, values);
// }

// func(1, 2, 3, 4, 5)

//应用：解构赋值
// var [name, ...others] = ["abc", 18, "china", "beijing"];
// console.log(name, others);

// 应用：字符串
// var str = "hello";
// var arr = [...str];
// console.log(arr);

// 箭头函数
// var func = function(v){
//     return typeof v;
// }

// console.log(func('abc'));

//ES6
// var func = v => typeof v;
// console.log(func(123));

// 多个参数
// var doubleSum = (a, b) => {
//     var a = a * 2;
//     var b = b * 2;
//     return a + b;
// }
// console.log(doubleSum(2, 3));

// this
s2 = 0;
function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function () {
        this.s2++;
    }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => {
    console.log('s2: ', timer.s2);
    console.log(s2);
}, 3100);

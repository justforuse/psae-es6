
// 简单的数组解构
// var [x,y,z] =[1,2,3];

// 交换变量值
// var [a, b] = [1, 2];
// [a, b] = [b, a];
// console.log(a, b);

// 嵌套数组解构赋值
// var [a, [[b], c]] = [1, [[2], 3]];
// console.log(a, b, c);

// 数组解构设置默认值
// var [a, b = 4, c = 3] = [1, 2];
// console.log(a,b,c)

/*Object*/

// 嵌套解构
// var p = {
//     name: 'abc',
//     age: 20,
//     more: [
//         "haha",
//         {
//             info: 'something'
//         }
//     ]
// }

// var {name, age } = p;
// var {name: userName, age: userAge} = p;
// console.log(userName, userAge);

// var {more: [a, {info: b}]} = p;
// console.log(a, b);
// console.log(more);



// 字符串解构
// var [a, b, c] = "abc";
// var {length: len} = "abc";
// console.log(a, b, c);
// console.log(len);

// 函数参数默认值
// function func([x = 1, y = 2]) {
//     console.log(x, y);
// }

// func([4])
// {x=1,y=2} =  {}
// {x,y} = {x:1,y:2}

// 设置默认值的第二种方式
// function func2({x, y} = { x: 1, y: 2 }) {
//     console.log(x, y);
// }

// func2({ x: 3 });


// 函数参数定义
// function func({name, age}){
//     console.log(name, age);
// }

// func({home:'beijing', age:20, name:'abc'});

var res = {
    functionResult: "SUCCESS",
    data: {
        type: "task",
        data: {
            errorCount: 3,
            successCount: 10
        }
    }
}
console.log(res.data.data.successCount);
var {
    data: {
        data: {
            successCount: mySuccessCount,
            errorCount: myErrorCount
        }
    }
} = res;
console.log(mySuccessCount, myErrorCount);


// 模版字符串及多行文本
// var text = "some content";
// var classes = "class1 class2";

// var html1 = "<div class = '" + classes + "'>" +
//         "<p id='p1'>" + text + "</p>" +
//     "</div>"

// var html2 = `
//     <div class="${classes}">
//         <p id="p1">${text}</p>
//     </div>
// `

// console.log(html1);
// console.log(html2);

// console.log('abc'.repeat(2));

// 标签模版
function func(str, v1, v2, v3, v4) {
    console.log(str);
    console.log(v1);
    console.log(v2);
    console.log(v3);
}
// function func2(str, ...values) {
//     var res = "";
//     for (var i = 0; i < str.length; i++) {
//         res += str[i];
//         if (i < values.length) {
//             res += values[i];
//         }
//     }
//     return res + " ,Right!";
// }
let [a, b] = [1, 2];
func`${a} + ${b} = ${a + b}`;
/*
[ '', ' + ', ' = ', '' ]
1
2
3
*/

// console.log(func2`${a} + ${b} = ${a+b}`);
"use strict"

function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [a, a+b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth)
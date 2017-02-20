
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
function func(str, v1, v2){
    console.log(str);
    console.log(v1);
    console.log(v2);
}
let [a, b] = [1, 2];
func`${a} + ${b} = ${a+b}`;
/*
[ '', ' + ', ' = ', '' ]
1
2
*/

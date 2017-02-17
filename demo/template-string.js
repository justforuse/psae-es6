
// 模版字符串及多行文本
var text = "some content";
var classes = "class1 class2";

var html1 = "<div class = '" + classes + "'>" +
        "<p id='p1'>" + text + "</p>" +
    "</div>"

var html2 = `
    <div class="${classes}">
        <p id="p1">${text}</p>
    </div>
`

console.log(html1);
console.log(html2);

console.log('abc'.repeat(2));
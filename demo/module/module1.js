var name = "abc";
var age = 18;
var func = function(){
    console.log("function func");
}
export {
    name,
    age,
    func as myFunc
}
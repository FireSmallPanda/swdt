// 变量提升 https://www.cnblogs.com/guanhuachen/p/6038957.html
fn()
function fn(){
    console.log("声明")
}
fn1()
var fn1 = function(){
    console.log("表达式")
}


// js会把变量的声明提升到上面
var a;
console.log(a);
a='hello world';

// 上下代码相等


var name = "world";
(function () {
if (typeof name == 'undefined') {
var name = 'yang';
console.log('Hello ' + name)
} else {
console.log('Hello ' + name)
}
})()

var name = "world";
(function () {
var name;
if (typeof name == 'undefined') {
var name = 'yang';
console.log('Hello ' + name)
} else {
console.log('Hello ' + name)
}
})()

// 使用let关键字来避免变量提升
var name = "world";
(function () {
if (typeof name == 'undefined') {
let name = 'yang';

console.log('Hello ' + name)
} else {
console.log('Hello ' + name)
}
})()

// 闭包 https://www.cnblogs.com/duanlianjiang/p/5036671.html



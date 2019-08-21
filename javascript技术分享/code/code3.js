// 变量提升 https://www.cnblogs.com/guanhuachen/p/6038957.html
var a='hello world';
var a;
console.log(a); 

// js会把变量的声明提升到上面
var a;
console.log(a);
a='hello world';

// 上下代码相等 同样的比方说


var name = "world";
(function () {
if (typeof name == 'undefined') {
var name = 'yang';
console.log('没有提升 ' + name)
} else {
console.log('提升了 ' + name)
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
// 那么如何来避免变量的提升呢
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

// let所在的块级作用域，在声明代码被运行前，是不会像var那样会被查找到，提前声明，而是运行到了该代码才会被声明执行。


// 闭包 https://www.cnblogs.com/duanlianjiang/p/5036671.html
function self(){
    var _say = "勤能补拙"
}
console.log(_say)
// 闭包实现
function self(){
　　var _say = "勤能补拙"
　　function f2(){
　　　　return _say

　　}
　　return f2;
}
var result = self();
console.log(
    
    ());

// 闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。    　　
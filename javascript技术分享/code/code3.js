// 变量提升 参考文档：https://www.cnblogs.com/guanhuachen/p/6038957.html
var a = 'hello world';
var a;
console.log(a); // hello world

// js会把变量的声明提升到上面
var a;
console.log(a);
a = 'hello world'; // hello world

/**
*变量提升 参考文档：https://blog.csdn.net/webfuchen/article/details/88219401
*/
//变量提示的demo
var scope = "global";
foo();
function foo() {
    console.log(scope);//undefined
    var scope = "local";
    console.log(scope);//local
}

//提升后的代码为
var scope;
function foo() {
    var scope;
    console.log(scope);//undefoned
    scope = "loacl";
    console.log(scope);//local
}
foo();
scope = "global";

/**
 * 变量提升的危害

在开发过程中变量提升，我们随意使用var定义的变量，往往在不经意间，就提升为全局变量。虽然这样我们能够方便的访问变量，但是如果与团队分工合作的前提下，个人定义的变量一旦提升为全局变量，团队中的其他人也采用了同名的变量，那么这两个部分将会想回影响，最终会出现许多难以预料到的问题。

 */
/*
let 阻止变量提升  参考文档：https://blog.csdn.net/qq_40713392/article/details/86683985
1.同一作用域中，声名变量时，不能重复定义。
2.必须先声名，后使用。（暂时性死区）
3.声名的变量不挂载到window对象上。（相当重要）
4.在一对大括号中{}，声名变量时，会产生块级作用域，变量仅在此块级作用域中有效。
比如，for(){}循坏，function(){}，if(){}语句等，都满足。
*/
let a = "hey I am outside";
if(true){
    // 此处存在暂时性死区
    console.log(a);//Uncaught ReferenceError: a is not defined
    let a = "hey I am inside";
}
//let与const不存在变量提升 如果是var 则是 undefined
console.log(a); // Uncaught ReferenceError: a is not defined
console.log(b);// Uncaught ReferenceError: b is not defined
let a = 1;
const b = 2;


//不存在变量提升，因此块级作用域外层无法访问
if(true){
	var bar = "bar";
	let baz = "baz";
	const qux = "qux";
}
console.log(bar);//bar
console.log(baz);//baz is not defined
console.log(qux);//qux is not defined



// 闭包 参考文档：https://www.cnblogs.com/duanlianjiang/p/5036671.html






function self() {
    var _say = "勤能补拙"
}
console.log(_say)
// 闭包实现
function self() {
    var _say = "勤能补拙"
    function f2() {
        return _say

    }
    return f2;
}
var result = self();
console.log(result());

// 闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。    　　
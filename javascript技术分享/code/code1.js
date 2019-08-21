// 4
var a = "string"
a.name = "张三"
console.log(a.name) // 报错

var b = ["a","b"]
b.name = "李四"
console.log(b.name)
console.log(b)
// 5.1
var a = "abc";
console.log(typeof a); // "string"
var b = 123;
console.log(typeof b); // "number"
var c = true;
console.log(typeof c); // "boolean"
var d = null;
console.log(typeof d); // "object"
var f = undefined;
console.log(typeof f); // "undefined"
var g;
console.log(typeof g); // "undefined"
console.log(typeof x); // "undefined"
// 5.2
var a = []
console.log(typeof a);
console.log(a instanceof Array) // true
var b = {}
console.log(b instanceof Object) // true

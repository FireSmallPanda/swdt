// 原型链--------------------------------------
// 构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.sayName = function() { alert(this.name) } 
}
//实例
var person1 = new Person('Zaxlct', 28);
var person2 = new Person('Mick', 23);
// _proto_ 隐式原型(所有的引用类型) prototype 显示原型(所有的函数)
console.log(Person.prototype == person1.__proto__) // true
// 判断 Person 是不是 person1的构造函数
console.log(person1.constructor == Person); // true
// 链
console.log(person1.__proto__.__proto__) // Object {}
console.log(person1.__proto__.__proto__.__proto__) // null

// 原型链实现继承
// 构造函数
function Student(name,age) {
    name = name
    age = age
    this.study = function() {alert("我在学习！") } 
}
Student.prototype = new Person();
var student1 = new Student('zhangsan',15)
student1.sayName()
student1.study()

// 强制类型转换--------------------------------------
var str=123;
var str1='123';
console.log(typeof str);
console.log(typeof str1);
// 显示转换
console.log(typeof String(str));
console.log(typeof Number(str1));

// 隐式转换 字符串拼接 == 运算符 逻辑运算

console.log('11' < 4 ) //输出fals

console.log('0'==0) //true 字符串转数字
console.log(0==false) //true 布尔转数字

console.log(20/'10') //2

// === 用法
console.log(0===false)
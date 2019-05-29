// 原型链
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
console.log(Person.prototype == person1.__proto__)
// 判断 Person 是不是 person1的构造函数
console.log(person1.constructor == Person);
// 链
console.log(person1.__proto__.__proto__) // Object {}
console.log(person1.__proto__.__proto__.__proto__) // null

// Student 的父类是 Person
Student.prototype = new Person();
// 原型链实现继承
// 构造函数
function Student(name,age) {
    Student.prototype.name = name
    this.study = function() {alert("我在学习！") } 
}
var student1 = new Student('zhangsan',15)
student1.sayName()
student1.study()


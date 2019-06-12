// 异步 https://www.cnblogs.com/xubj/p/7940631.html
console.log(100);
 setTimeout(function(){
   console.log(200);
 },1000); //异步执行，非阻塞并不妨碍后续代码执行
 console.log(300);


 // for 嵌套 延时

for (var i = 1; i <= 10; i++) {
  setTimeout(function() { console.log(i) },100);
}
// for 嵌套 有效

for (var i = 1; i <= 10; i++) {
  (function(i){
    setTimeout(console.log(i),100);
  })(i);
}
// 看上去(function(j){})(i)比较神奇，其实很简单，第一个括号定义了一个匿名函数，后一个括号是指调用了这个函数，并传入参数i。当然这个匿名函数接受一个参数，命名为j。



// 补充 数组api
// 遍历
let forEachList = [1,3,1,0,6,9,10,14]
forEachList.forEach(item => console.log(item))
// every
let everyList = [1,3,1,0,6,9,10,14]
let everyFlag = everyList.every(item =>  {
  if(item>5){
    return true
  } 
})
console.log(everyFlag)

// some
let someList = [1,3,1,0,6,9,10,14]
let someFlag = someList.some(item =>  {
  if(item>5){
    return true
  } 
})
console.log(someFlag)


// 排序
let sortList = [1,3,1,0,6,9,10,14]
sortList.sort((a,b) =>  {
  return a - b // 正序
  // return b - a // 倒序
})
console.log(someFlag)

// map 对元素重新组装 形成新数组
let mapList = [1,3,1,0,6,9,10,14]
let mapListNew =  mapList.map( item =>{
  return `<li>${item}</li>`
})
console.log(mapListNew)


// filter 过滤
let filterList = [1,3,1,0,6,9,10,14]
let filterListNew = filterList.filter(item =>  {
  if(item>5){
    return true
  } 
})
console.log(filterListNew)



// 浏览器常用操作
// 获取浏览器信息
console.log(navigator.userAgent)
// 获取浏览器宽高
console.log(screen.width)
console.log(screen.height)

// location用法
console.log(location.href)
console.log(location.protocol)
console.log(location.pathname)
console.log(location.search)
console.log(location.hash)
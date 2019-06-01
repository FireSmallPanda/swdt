// 异步 https://www.cnblogs.com/xubj/p/7940631.html
console.log(100);
 setTimeout(function(){
   console.log(200);
 },1000); //异步执行，非阻塞并不妨碍后续代码执行
 console.log(300);
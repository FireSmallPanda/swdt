var app = require('http').createServer()
var io = require('socket.io')(app);
let PORT = 3000
app.listen(PORT);

var clintCount = 0
io.on('connection', function (socket) {
  // 数量相加
  clintCount ++ 
  socket.nickname = "user" + clintCount
  // 进入
  io.emit("enter",socket.nickname + "come in ")
  // 离开
  socket.on('disconnect', function () {
    io.emit("leave",socket.nickname+" left ")
  });
  // 发送消息
  socket.on('message', function (str) {
    io.emit("message",socket.nickname + " say:\"" + str+"\"")
  });
});
// console open
console.log("websocket server listening on port"+PORT)

var app = require('http').createServer()
var io = require('socket.io')(app);
let PORT = 3000
app.listen(PORT);


io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('send', function (data) {
    console.log("发送："+data);
  });
});
// console open
console.log("websocket server listening on port"+PORT)
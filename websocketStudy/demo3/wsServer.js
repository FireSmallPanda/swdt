var ws = require("nodejs-websocket")
var PORT = 3000
var clintCount = 0
var server = ws.createServer(function(conn){
    console.log("New connection")
    clintCount++
    conn.nickname = 'user'+ clintCount
    braoadcast(conn.nickname + " comes in")
    conn.on("text",function(str){
        console.log("Received"+str)
        braoadcast(conn.nickname + " say:\"" + str+"\"")
       
    })
    conn.on("close",function(code,reason){
        console.log("connection closed")
        braoadcast(conn.nickname + " close")
    })
    conn.on("error",function(err){
        console.log("handle err")
        console.log(err)
    })
}).listen(PORT)
/**
 * 全局发送消息
 * @param {String} str 消息
 */
function braoadcast(str){
    server.connections.forEach(function(connection){
        connection.sendText(str)
    })
}
// console open
console.log("websocket server listening on port"+PORT)
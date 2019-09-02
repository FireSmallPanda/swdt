var ws = require("nodejs-websocket")
var PORT = 3000
var clintCount = 0
var server = ws.createServer(function(conn){
    console.log("New connection")
    clintCount++
    conn.nickname = 'user'+ clintCount
    // 进入对象
    var mes = {}
    mes.type = "enter"
    mes.data = conn.nickname +" in"
    braoadcast(mes)
    conn.on("text",function(str){
        var mes = {}
        mes.type = "message"
        mes.data = conn.nickname + " say:\"" + str+"\""
        braoadcast(mes)
       
    })
    conn.on("close",function(code,reason){
        var mes = {}
        mes.type = "leave"
        mes.data = conn.nickname + " left"
        braoadcast(mes)
    })
    conn.on("error",function(err){
        console.log("handle err")
        console.log(err)
    })
}).listen(PORT)
/**
 * 全局发送消息
 * @param {Object} str 消息对象
 */
function braoadcast(str){
    server.connections.forEach(function(connection){
        // 该方法必须是Stirng
        connection.sendText(JSON.stringify(str)) 
    })
}
// console open
console.log("websocket server listening on port"+PORT)
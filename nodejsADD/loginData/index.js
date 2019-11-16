const http = require('http')
const url = require("url")
const fs = require("fs")
const querystring = require("querystring")
// 用户名数组
let user = {
    admin: 123456
}

http.createServer((req, res) => {
    // 获取数据
    let path, get, post
    if (req.method == 'GET') {
        let { pathname, query } = url.parse(req.url, true)
        path = pathname
        get = query
        complete()
    } else if (req.method == 'POST') {
        let arr = []
        path = req.url
        req.on('data', buffer => {
            arr.push(buffer)

        })
        req.on('end', () => {
            post = querystring.parse(Buffer.concat(arr).toString())
            complete()
        })
    }
    function complete() {
        if (path == '/login') {
            let { username, password } = get
            if (!user[username]) {
                res.writeHead(200, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                res.end(JSON.stringify({ err: 1, msg: '用户名不存在' }))
            } else if (user[username] != password) {
                res.writeHead(200, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                res.end(JSON.stringify({ err: 1, msg: '密码错误' }))
            } else {
                res.end(JSON.stringify({ err: 0}))
            }
    
        } else if (path == '/reg') {
            let { username, password } = post
            if (user[username]) {
                res.writeHead(200, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                res.end(JSON.stringify({ err: 1, msg: '账户已经存在' }))
            } else {
                user[username] = password
                res.end(JSON.stringify({ err: 0, msg: '注册成功' }))
            }
        } else {
            fs.readFile(`www${path}`, (err, data) => {
                console.log('文件读取'+`www${path}`,err)
                if (err) {
                    res.end('404')
                } else {
                    res.end(data)
                }
            })
        }
    }
}).listen(8080)

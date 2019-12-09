var http = require('http');
var url  = require('url');
var fs   = require('fs');
    http.createServer(function(req,res){
        var name=url.parse(req.url,true).query.name;
        res.write(name)
        res.end()
    }).listen(3000,function(){
        console.log('服务启动!!!')
    })
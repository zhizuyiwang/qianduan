var http = require("http")
var path = require("path")
var fs  = require("fs")
var url = require("url")

var server = http.createServer(function(req,res){
	//不处理收藏夹小图标
	if (req.url == "/favicon.ico") {
		return;
	}
	res.writeHead(404,{"Content-type":"text/html;charset=UTF8"});
	console.log("Hello World");
	console.log("你好");
});

server.listen(3000,"127.0.0.1")
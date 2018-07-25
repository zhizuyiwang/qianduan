#Poste请求的用法
##一、基本的post表单请求数据的获取、解析
相比较GET请求，POST请求比较复杂。因为Node.js认为，使用POST请求时，数据量会比较多。为了追求极致的效率，它将数据拆分成为了众多小的数据块(chunk)，然后通过特定的事件，将这些小数据块有序传递给回调函数。
举一个表单提交的例子
先看前段页面表单的样式：<br>
aa.html

	<!DOCTYPE html>
	<html lang="en">
		<head>
		    <meta charset="UTF-8">
		    <title>Title</title>
		</head>
		<body>
		    <form action="http://127.0.0.1/dopost" method="post">
		        <p>
		            姓名：<input type="text" name="name"> </input>
		        </p>
		        <p>
		            性别：
		            <input type="radio" name="sex" value="男">男
		            <input type="radio" name="sex" value="女">女
		        </p>
		        <p>
		            爱好
		            <input type="checkbox" name="hobby" value="睡觉" />睡觉
		            <input type="checkbox" name="hobby" value="足球" />足球
		            <input type="checkbox" name="hobby" value="篮球" />篮球
		        </p>
		        <p>
		            图片
		            <input type="file" name="tupian"/>
		        </p>
		        <p>
		            <input type="submit">
		        </p>
		
		    </form>
		</body>
	</html>

post.js

	var http = require("http")
	var fs = require("fs")
	var path = require("path")
	var url = require("url")
	var queryString = require("querystring")

	http.createServer(function (req,res) {

	    if (req.url == "/dopost" && req.method.toLowerCase() == "post"){
	        var  allData = ""

			//下面是post请求接收的一个公式
        	//node为了追求极致，它是一个小段一个小段接收的。
        	//接受了一小段，可能就给别人去服务了。防止一个过大的表单阻塞了整个进程
	        req.addListener("data",function (chunk) {
	            allData += chunk
	            console.log(chunk)
	        })

			//当post中的请求数据被读取完后回调此方法
	        req.addListener("end",function () {
	            var dataString = allData.toString()
	            console.log(dataString)
	            //将dataString转为一个对象
	            var dataObj = queryString.parse(dataString)
	            console.log(dataObj)
	            console.log(dataObj.name)
	            console.log(dataObj.sex)
	            console.log(dataObj.hobby)
	            res.end("success")
	
	      })
		}
	}).listen(80,"127.0.0.1")

提交的复选框数据在js服务器获取到的是一个数组，注意，提交表单的各个表单元素必须要有name字段，作为解析为对象时的key值
##二、文件上传
●有具体需求，你一定相信，早就有个module在那里静静地等着你了。<br>
● 可以直接使用的第三方module： fomidable<br>
● 只要涉及文件上传，form标签一定要有enctype="multipart/form-data"属性<br>
	`<form action="http://127.0.0.1/dopost" method="post" enctype="multipart/form-data">`

原生写POST处理，比较复杂，要写两个监听，文件上传业务比较难写。所以，用第三方模块：formidable。<br>

formidable的用法：<br>

一个完整的上传图片小实例，包括修改名称：

	var http = require("http")
	var formidable = require("formidable")//文件上传的模块
	var util = require("util")
	var fs = require("fs")
	var sd = require("silly-datetime")//格式化时间的模块
	var path = require("path")

	http.createServer(function (req,res) {
	    if (req.url == "/dopost" && req.method.toLowerCase() == "post") {

	        var form = new formidable.IncomingForm()

	        //设置文件上传的目录路径
	        form.uploadDir = "./static/uploads"

	        form.parse(req, function (err, fields, files) {

	            //所有的文本域、单选项，都在fields存放
	            //所有的文件域，files
	            console.log(fields)
	            console.log(files)
	            console.log(util.inspect({fields: fields,files:files}))

	            //时间，使用了第三方模块，silly-datetime
	            var ttt = sd.format(new Date(), 'YYYYMMDDHHmmss');

	            var ran = parseInt(Math.random() * 89999 + 10000);

	            var extName = path.extname(files.tupian.name);

	            console.log("__dirname",__dirname)//当前js文件所在的绝对路径

	            //执行改名
	            var oldPath = __dirname + "/" + files.tupian.path;

	            //新的路径由三个部分组成：时间戳、随机数、拓展名
	            var newPath = __dirname + "/static/uploads/format/" + ttt + ran + extName;

	            console.log('old',oldPath)
	            console.log('newPath',newPath)

	            //改名
	            fs.rename(oldPath,newPath,function(err){
	                if(err){
	                    throw Error("改名失败");
	                }
	                res.writeHead(200, {'content-type': 'text/html;charset=UTF8'});
	                res.end("成功");
	            });
	
	        })
	    }
	}).listen(80,"127.0.0.1")
	
**注意，这里有一个坑，就是在给文件该名称时， 新名称中有一个新的文件夹： format, ````var newPath = __dirname + "/static/uploads/format/" + ttt + ran + extName;````切记要先把文件夹format手动创建出来后才能改名，否则不会成功。所谓该名称也就是剪切，把原来路径下的文件剪切到新的路径下去**




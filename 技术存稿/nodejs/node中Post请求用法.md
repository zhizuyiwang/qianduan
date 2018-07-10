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







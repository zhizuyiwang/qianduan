##一、nodejs的安装、环境配置
##一、npm的详解，关联cnpm
##一、模块的详解
- 在Node.js中，以模块为单位划分所有功能，并且提供了一个完整的模块加载机制，这时的我们可以将应用程序划分为各个不同的部分。不可能用一个js文件去写全部的业务
- 狭义的说，每一个JavaScript文件都是一个模块；而多个JavaScript文件之间可以相互require，他们共同实现了一个功能，他们整体对外，又称为一个广义上的模块。
-  Node.js中，一个JavaScript文件中定义的变量、函数，都只在这个文件内部有效。当需要从此JS文件外部引用这些变量、函数时，必须使用exports对象进行暴露，使用者要用require()命令引用这个JS文件。
-  一个JavaScript文件，可以向外exports无数个变量、函数。但是require的时候，仅仅需要require这个JS文件一次。使用的它的变量、函数的时候，用点语法即可。所以，无形之中，增加了一个顶层命名空间。

js文件中，可以用exports暴露很多东西，比如函数、变量。<br>
如，foo.js:

	var msg = "你好";
	var info = "呵呵";
	
	function showInfo(){
	    console.log(info);
	}
	
	exports.msg = msg;
	exports.info = info;
	exports.showInfo = showInfo;
在使用者中，只需要require一次。

	var foo = require("./test/foo.js");
相当于增加了顶层变量。所有的函数、变量都要从这个顶层变量走：

	console.log(foo.msg);
	console.log(foo.info);
	foo.showInfo();
Node中，js文件和js文件，就是被一个个exports和require构建成为网状的。
不是靠html文件统一在一起的。

- 可以在一个JavaScript文件中，描述一个类，用module.export = 构造函数名的方式向外暴露一个类。<br>

js文件和js文件之间有两种合作的模式：<br>
1） 某一个js文件中，提供了函数，供别人使用。 只需要暴露函数就行了； exports.msg=msg;<br>
2） 某一个js文件，描述了一个类。   module.exports = People;



##一、用npm安装、升级、删除模块
##二、升级npm和node的方式
[https://www.cnblogs.com/ifannie/p/8995585.html](https://www.cnblogs.com/ifannie/p/8995585.html)
##三、使用PyCharm创建nodeJs项目，并详解目录结构

##四、PyCharm的常用功能
1. 配置NodeJs智能提示
2. 编写方法模板
3. 导入模块
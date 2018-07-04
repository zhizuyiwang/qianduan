###&emsp;&emsp;我们都知道，在典型的面向对象的语言中，它们都有一个标志，如Java，都有类的概念，通过类可以创建多个具有相同方法和属性的对象。Javascript也是面向对象的语言，但它不存在类（Class）的概念，javascript中不是基于'类的'，而是通过构造函数（constructor）和原型链（prototype chains）实现的。ECMA-262把对象定义为："无序属性的集合，其属性可以包含基本值、对象或者函数"<br>
###&emsp;&emsp;但是在ES6中提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板，并通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让原型对象的写法更加清晰、更像面向对象编程的语法。<br>

#<font color="green">一、理解JavScript中的对象</font>



创建自定义对象最简单方式就是创建一个Object的实例，然后再为它添加属性和方法，如：

	var person = new Object();
	person.name = "Tom"
	person.age = 18
	person.job = "student"
	person.sayName = function () {
	    console.log(this.name)
	}

	person.sayName()//打印出Tom
这样就创建一个名为person的对象，并添加了三个属性（name、age、job）和一个方法(sayName)。也可以用对象字面量的语法创建对象

    var person = {
	    name : "Tom",
	    age : 18,
	    job : "student",
	    sayName: function () {
	        console.log(this.name)
	    }
	}
&emsp;&emsp;用这种方式创建的对象和前面的person对象是一样的，都有相同的属性和方法。**注意：这些属性并不只单单体现出所拥有的值，它们在创建时都带有一些特征值，js通过这些特征值来定义它们的行为，也就是说一个对象的属性是key——value对应起来的，value是一个包含多个属性特性的key——value集合**，下面就从属性类型，属性自身带有的特性来分析一下。

##1. 属性类型
&emsp;&emsp;对象的一个属性有各种特征，这些特征是供内部使用的特性，是为了实现JavaScript引擎用的，在JavaScript中不能直接访问它们。为了表示特性是内部值，ECMAScript规范把它们放在了中括号中，如[[Enumerable]]。<br>
ECMAScript中有两种属性：数据属性和访问器属性。



- <font color = "blue">**数据属性**</font>

  &emsp;数据属性包含一个数据值的位置。在这个位置可以读取和写入值。数据属性有4个描述其行为的特性<br>
  &emsp;&emsp;1.[[Configurable]]:表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性，直接在对象上定义的属性，这个特性默认值为true。<br>
  &emsp;&emsp;2.[[Enumerable]]:表示能否通过for-in循环返回属性，直接在对象上定义的属性，此特性值默认为true。<br>
  &emsp;&emsp;3.[[Writable]]：表示能否修改属性的值，直接在对象上定义的属性，此特性值默认为true。<br>
  &emsp;&emsp;4.[[Value]]：包含这个属性的数据值。读取属性值时，从这个位置读；写入属性值时，把新值保存在这个位置，此特性值默认为undefined。如上面的例子创建一个名为name的属性，指定的值是"Tom"，就是把name属性的[[Value]]特性值设置为"Tom"。<br><br>

我们要是想修改属性默认的特性值怎么办？那就得使用ECMAScript5中的一个方法Object.defineProperty()，这个方法接受三个参数：属性所在的对象、属性的名字、一个描述符对象。其中，描述符（descriptor）对象的属性必须是：configurable、enumerable、writable、value。

	


- <font color = "blue">**访问器属性**</font>
##2. 定义多个属性

##3. 读取属性的特性



#<font color="green">二、理解JavScript创建对象的方式</font>
#####&emsp;&emsp;JavaScript创建对象的方式有多种，下面来分别介绍。
##1. 工厂模式
&emsp;&emsp;工厂模式是软件工程领域一种广为人知的设计模式，这种模式抽象了创建具体对象的过程。虽然Object构造函数或对象字面量可以用来创建单个对象，但用同一接口创建很多对象，会产生大量重复代码。为解决这个问题，出现了工厂模式的一种变体，定义一个函数，用函数来封装以特定接口创建对象的细节。如下面的例子：

	function createPerson(name,age,job) {
	    var o = new Object();
	    o.name = name
	    o,age = age
	    o.job = job
	    o.sayName = function () {
	        console.log(this.name)
	    }
	    return o
	}
	
	var person1 = createPerson("Tom",18,"student")
	var person2 = createPerson("Bob",19,"student")
	
	person1.sayName()
	person2.sayName()

函数createPerson（）根据传过来的数据来创建对应的对象，工厂模式虽然解决了创建多个相似对象的问题，但没有解决对象识别问题（怎么知道一个对象的类型），为了解决这个问题，又有一个新模式出现了。
##2. 构造函数模式
我们知道，ECMAScript中的构造函数可以创建特定类型的对象。像Object和Array这样的原生构造函数，在运行时会自动出现在执行环境中。此外还可以创建自定义的构造函数，从而定义自定义对象类型的属性和方法。可以使用构造函数模式将前面的例子重写如下：
	
	function Person(name,age,job) {
	    this.name = name
	    this,age = age
	    this.job = job
	    this.sayName = function () {
	        console.log(this.name)
	    }
	}

	var person1 = new Person("Tom",18,"student")
	var person2 = new Person("Bob",19,"student")
	
	person1.sayName()
	person2.sayName()
Person()函数取代了createPerson()函数，Person()中的代码除了与createPerson()中相同部分外，还存在以下不同之处：
	
1. 没有显示的创建对象
2. 直接将属性和方法赋值给了this对象
3. 没有return语句

&emsp;&emsp;并且函数名Person使用的是大写字母开头，按照惯例，构造函数始终都应该以一个大写字母开头，非构造函数以小写字母开头，主要是为了区别ECMAScript中的其他函数，因为构造函数本身也是函数，只不过可以用来创建对象。<br>
&emsp;&emsp;创建一个Person的实例，必须使用new关键字，以这种方式调用构造函数实际会经历以下四个步骤：

1. 创建一个新对象；
2. 将构造函数的作用域赋给新对象（this就指向了这个新对象）
3. 执行构造函数中的代码（为新对象添加属性）
4. 返回新的对象

上面的例子创建了两个实例person1和person2，这两个对象都有一个constructor（构造函数）属性，该属性指向Person，如：
	
	console.log(person1.constructor==Person)//true
	console.log(person2.constructor==Person)//true
对象的constructor属性最初是用来标识对象类型的，但是检测对象类型，还是instanceof操作符更可靠。创建自定义的构造函数意味着将来可以将它的实例标识为一种特定的类型，这也是构造函数模式胜过工厂模式的地方。
##3. 原型模式
##4. 组合使用构造函数模式和原型模式
##5. 动态原型模式
##6. 寄生构造函数模式
##7. 稳妥构造函数模式
#<font color="green">三、理解JavScript的继承<font>
#<font color="green">四、理解prototype属性，编写类的扩展方法</font>

 
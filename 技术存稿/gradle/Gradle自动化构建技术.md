#开端：Gradle基本概念
##1. 领域特定语言DSL介绍

##2. groovy讲解之groovy初探
groovy介绍

- 是一种基于JVM的敏捷开发语言
- 结合了python、ruby和smalltask的许多强大的特性
- groovy可以与Java完美结合，可以使用java所有库

groovy特性

- 语法上支持动态类型，闭包等新一代语言特性
- 无缝集成所有已经存在的Java类库
- 既支持面向对象编程也支持面向过程编程

##3. 为什么选择groovy及其优势
优势

- 一种更加敏捷的编程语言，语法糖
- 入门非常容易，但功能非常强大
- 既可以作为编程语言，也可以作为脚本语言
- 熟练掌握Java非常容易掌握Groovy


#一、Gradle开发环境的搭建
##1. mac/linux环境下，groovy开发环境搭建
1. 安装好JDK环境
2. 到官网下载好groovySDK，解压到合适的位置
3. 在电脑中配置groovy环境变量
##2. window环境下，groovy开发环境搭建
1. 安装好JDK环境
2. 到官网下载好groovySDK，解压到合适的位置
3. 在电脑中配置groovy环境变量（classpath环境变量）
##2. IntelliJ IDEA开发工具安装及groovy环境配置
#二、Gradle核心语法
##1、groovy基础语法
**变量的类型和声明：**

- groovy中的变量包括变量的类型和变量的定义。
- 变量的类型有基本类型和对象类型，其实都是对象类型，可以说groovy中并不存在基本类型
- 变量的定义包括强类型定义方式和弱类型def定义方式

 **字符串的讲解**

- String：和java一样的通用字符串<br>
1、使用单引号声明字符串：def name1 = '啊\'\'single'。注意\ 表示转义字符 <br>
2、使用三个引号声明字符串： def name2 = ''' jj jjjjkk  '''<br>
3、使用两个引号定义字符串，也被称为可扩展字符串，如：

		def job = "Student"
		def KK = "小明是 ${job}"
		println KK
		println KK.class//class org.codehaus.groovy.runtime.GStringImpl
可以看到只要有扩展表达式的普通Java字符串定义的是Groovy的字符串实现类<br>	
4、区别：**单引号的字符串没有格式，三个单引号定义的字符串有格式**，如：
		
		def name = '''
		    锄禾日当午
		    汗滴禾下锄
		    谁知盘中餐
		    粒粒皆辛苦  '''
		println name
		输出：
			锄禾日当午
			汗滴禾下锄
			谁知盘中餐
			粒粒皆辛苦  
		
	
- GString：就是普通java的String类型的字符串用两个引号加上扩展字符串的类型得到<br>
如

		def job = "Student"
		def KK = "小明是 ${job}"

- 普通java字符串类型和GString类型的字符串互换<br>

	    echo（）函数可以把GString类型转换为String类型
		String类型可以通过String类型转换为Gstring类型
		
 **字符串方法的讲解**<br><br>
String方法的来源：

- java.lang.String
- DefaultGroovyMethods
- StringGroovyMethods：分为普通类型的参数和闭包类型的参数

常见普通类型参数的字符串方法：

1. 字符串填充

			str.center('长度','填充的字符')：以原本str为中心，向两侧填充字符达到指定长度
			str.padLeft('长度','填充的字符'):顾名思义，是在原本str的左侧填充

2. 字符串比较
			
			str1.compareTo(str2):这是普通的Java 字符串比较，比较每一个字符的Unicode的编码值

			使用操作符比较：str1 > str2 :同样是比较两个字符串的每一个的字符的值

3. 索引

			str.getAt(index):获取指定索引的字符
			str[index]:同样获取指定位置上的字符
			str[fromIndex..endIndex]：直接截取指定索引范围内的字符串（包括头和尾）

4. 减法运算

			str.minus(str2):去掉str字符串中的str2内容，并返回
			对应的操作符：str - str2:功能和上面一样

5. 转换为数字类型数据

			str.toInteger(): str转换为int

			str.toDouble(): str 转换为double

6. 其他：

			str.reverse(),反转字符串

			str.capitalize()：首字母大写

			str.isNumber(): 判断str是否是数字类型的字符串	

			
			
			

1.常用三种定义方式<br>
2.新增操作符<br>
3.新增API讲解<br>

 **逻辑控制的讲解**<br><br>
swich..case..语句的用法，判断条件可以是任意类型

		def H = 1.23
		def result
		
		switch (H.class){//此处的条件是任意类型
		    case 'foo':
		        result = 'foo'
		        break
		    case [3,4,5,'inlist']://列表
		        result = 'list'
		        break
		    case 12..30:
		        result = 'range'//范围
		        break
		    case Integer:
		        result = 'Integer'
		        break
		    case BigDecimal:
		        result = 'BigDecimal'
		        break
		    default: result = 'default'
		}
		println result

for循环的用法：

		//对范围的for循环
		def sum = 0
		for (i in 0..9){
		    sum += i
		}
		//对list的for循环
		for (i in [1,2,3,4,5]){sum += i}
		//对Map的for 循环，不需要迭代器循环了，直接取出key
		for (i in ["lili": 1, "luck": 2]){sum += i.value}
		

##2、groovy闭包讲解

###闭包基础知识讲解
1）**闭包概念**<br>
闭包其实就是一段代码块,定义一个闭包clouser

		def clouser = {
		    println '我是闭包'
		}
		clouser()
		clouser.call()

2）**闭包参数**<br>	

带参数的闭包
		
		单个参数：
		def bibao = {String name-> println "我是闭包 ${name}"}
		bibao.call('哈哈哈')
		bibao('呵呵')//打印

		多个参数：
		def bibao = {String name, int age-> println "我是闭包 ${name}，年龄${age}"}
		bibao.call('哈哈哈',14)
		bibao('呵呵',15)

		有一个隐式的参数：it就是隐式参数
		def bibao = {println "我是闭包 ${it}"}
		bibao.call('哈哈哈')
		bibao('呵呵')

3）**闭包返回值**<br>
闭包中一定会有返回值
	
		def bibao = {String name, int age-> println "我是闭包 ${name}，年龄${age}"}
		def result = bibao.call('哈哈哈',14)
		println result//打印出null
		由此可见闭包一定有返回值
###闭包的用法
1）**与基本类型的结合使用**<br>
求指定number的阶乘

			//用来求指定number的阶乘
			int fab(int number){
			    int result = 1
			    1.upto(number,{num -> result *= num})
			    return result
			}

			int fab2(int number){
			    int result = 1
			    number.downto(1){
			        num -> result *= num
			    }
			}

累加求和

		//累加求和
		int call(int number){
		    int result = 0
		    number.times {
		        num -> result += num
		    }
		    return result
		}

2）**与String结合使用**<br>

		String str = 'the 2 and 3 is 5'
		//each的遍历
		String result = str.each {
		    String temp -> print temp.multiply(2)
		}
		print result

		//find：用来查找符合条件的第一个并返回
		println str.find{
		    String s -> s.isNumber()
		}

		//findAll
		def list =  str.findAll{
		    String s -> s.isNumber()
		}
		println list.toListString()

		//any
		def result2 = str.any {
		    String s -> s.isNumber()
		}
		println result2

		//every
		def result3 = str.every {
		    String s -> s.isNumber()
		}
		println result3

		//collection
		def list2 = str.collect {
		    it.toUpperCase()
		}
		println list2.toListString()

3）**与数据结构结合使用**<br>
4）**与文件等结合使用**<br>

###闭包的进阶
1）**闭包关键变量**<br>

1. this
2. owner
3. delegate

		scriptClouser = {
			println "scriptClouser this"+ this//代表包定义处的类
            println "scriptClouser owner" + owner//代表闭包定义处的类或对象
            println "scriptClouser delegate" + delegate//代表任意对象
		}
		
		scripeClouser.call()

2)**闭包的委托策略**

			class Student {
			    String name
			    def pretty = {
			        "My name is ${name}"
			    }
			    String toString(){
			        pretty.call()
			    }
			}

			class Teacher{
			    String name
			}

			def stu = new Student(name: 'Bob')
			def tea = new Teacher(name: "Jim")
			
			println stu.toString()

			//先去委托类中去寻找name属性，如果没有找到，就看委托策略，决定怎么进行
			stu.pretty.delegate = tea//把teacher委托给student
			stu.pretty.resolveStrategy = Closure.DELEGATE_FIRST//设置委托策略
			println stu.toString()
  

##3、groovy数据结构
1）**groovy中列表详解**

1. 列表定义

		def ListArr = new ArrayList()//java的定义方式
		def list = [1,2,3,4]//groovy定义方式
		println list.class//class java.util.ArrayList
		println list.size()
		
		//groovy定义数组
		def array = [12,23,44] as int[]
		int[] array2 = [1,2,3,4]

2. 列表操作

		/**
		 * 列表的添加
		 */
		list.add(6)//在末尾添加
		println list
		list.leftShift(5)//在末尾添加
		println list
		list << 8//在末尾添加
		println list
		/**
		 * 列表的删除操作
		 */
		list.remove(2)//删除指定下标数据
		println list
		
		list.remove((Object)5)//删除指定的元素
		println list
		
		list.removeAt(1)//删除指定下标数据
		println list
		
		def removeResult =  list.removeAll { return it % 2 == 1}//删除满足闭包条件的数据
		println list
		println removeResult
		
		println list - [4,7]//删除公共的数据
		
		
		/**
		 * 列表的排序
		 */
		//数字排序
		def sortList = [6,-3,9,2,-7,1,5]
		Comparator mc = {
		    a,b -> a == b ? 0 :
		        Math.abs(a) < Math.abs(b) ? -1 : 1
		}
		//Collections.sort(sortList,mc)
		println sortList
		
		//sortList.sort()
		
		sortList.sort {a,b ->
		    a == b ? 0 :
		            Math.abs(a) < Math.abs(b) ? 1 : -1
		}
		println sortList
		
		//字符串列表排序
		
		def sortStringList = ['abc','z','Hello','groovy','java']
		
		sortStringList.sort {it -> return it.size()}
		println sortStringList
		
		/**
		 * 查找
		 */
		def findList = [-3,8,6,2,-7,-10,1,-1,5]
		int result = findList.find {return it % 2 == 0}
		println result
		def result1 = findList.findAll {return it % 2 == 0}
		println result1.toListString()
		/**
		 * 列表判断
		 */
		def result2 = findList.any{//只要有一个满足闭包的条件就返回true
		    return it % 2 != 0
		}
		println result2
		
		def result3 = findList.every {//需要所有的元素都要满足条件
		    return  it % 2 != 0
		}
		println result3
		
		/**
		 * 列表的最大最小值，可以通过闭包自定义判断条件
		 */
		
		println findList.min()
		println findList.max()
		
		println findList.min {return Math.abs(it)}
		println findList.max{return  Math.abs(it)}
		
		/**
		 * 统计
		 */
		def num = findList.count {return it  % 2 == 0}//累加偶数
		println num

2）**groovy中映射详解，也就是map**

1. map的定义
		
		//定义map
		def map = new HashMap()//java定义方式
		
		def colors = [red: 'ff0000',
		              green: '00ff00',
		              blue:'0000fff']
		def colors1 = [red: 'ff0000',
		              green: '00ff00',
		              blue:'0000fff'] as HashMap 

		/**
		 * 查找
		 */
		//索引方式
		println colors['red']
		println colors.red
		
		/**
		 * 添加元素
		 */
		colors.yellow = 'ffff00'//如果key存在则是更新操作
		colors.complex = [a:1, b:2]
		println colors.toMapString()

2. map的操作

		/**
		 * 遍历
		 */
		stu.each { def student ->
		    println "the key is ${student.key}, the value is ${student.value}"
		}
		//带索引遍历
		stu.eachWithIndex{ def student ,int index ->
		    println "index is ${index},the key is ${student.key}, the value is ${student.value}"
		}
		stu.each {key, value ->
		    println "the key is ${key}, the value is ${value}"
		}
		stu.eachWithIndex{key, value, index ->
		    println "the key is ${index},the key is ${key}, the value is ${value}"
		}
		
		/**
		 * 查找
		 */
		def entry = stu.find {def student ->
		    return  student.value.score > 64//查找第一个符合闭包条件的元素并返回
		}
		println entry
		
		def entryAll = stu.findAll {def student ->
		    return student.value.score > 64
		}
		println entryAll
		
		/**
		 * 统计，返回的是数量
		 */
		def count = stu.count {def student ->
		    return student.value.score >= 65 &&
		            student.value.sex == 'male'
		}
		println count
		
		/**
		 * 综合查找
		 */
		def names = stu.findAll {def student ->
		    return student.value.score > 64
		}.collect {
		    return it.value.name
		}
		println  names.toListString()
		
		/**
		 * 分组
		 */
		def group = stu.groupBy {def student ->
		    return student.value.score >= 64 ? '及格' : '不及格'
		}
		println group.toMapString()

		/**
		 * 排序，排序后得到的是一个新的map，原来的map不变
		 */
		def sort = stu.sort {def stu1, def stu2 ->
		    Number score1 = stu1.value.score
		    Number score2 = stu2.value.score
		    return score1 == score2 ? 0 : score1 < score2 ? -1 : 1
		}
		println sort.toMapString()
		
	
3）**groovy中范围详解**

1. 范围的定义

		def range = 1..10
		println range.class//class groovy.lang.IntRange
		
		println range[0]
		println range.contains(10)//是否包含某个值
		
		println range.from//第一个元素
		
		println range.to//最后一个元素
2. 范围的操作

		/**
		 * 遍历
		 */
		for (i in range){
		    println i
		}
		
		range.each {
		    println it
		}
		/**
		 * 在switch中的用法
		 */
		def getSwitch (Number number){
		    def result
		    switch (number){
		        case 0..<60:
		            result = '不及格'
		            break
		        case 60..<70:
		            result = '及格'
		            break
		        case 70..<80:
		            result = '良好'
		            break
		        case 80..100:
		            result = '优秀'
		            break
		    }
		    println result
		}
		getSwitch(78)
##4、groovy面向对象
1）**groovy中类、接口的定义和使用**

定义Action接口

		/**
		 * 接口中不允许定义非public的方法
		 */
		interface Action {
		    void eat()
		    void drink()
		    void play()
		}

定义Person类，并实现Action接口

		/**
		 * 1.groovy中默认都是public
		 * 2.无论是直接或屌用get/set最终都是调用get/set
		 */
		class Person implements Action{
		    String name
		    Integer age
		    def increaseAge(Integer years){
		        this.name += years
		    }
		
		    @Override
		    void eat() {
		
		    }
		
		    @Override
		    void drink() {
		
		    }
		
		    @Override
		    void play() {
		
		    }
		}

在groovy脚本中操作Person类：

		def person = new Person(name: "Qndroid", age: 26)
		def person1 = new Person(name: "Bob")
		
		person.name = 'jim'
		person.age = 12
		println "the name is ${person.name},the age is ${person.age}"
		println "the name is ${person.getName()},the age is ${person.getAge()}"
		println "the name is ${person1.getName()},the age is ${person1.age}"
		person.increaseAge(10)

2）**groovy中的元编程**

编写代码所执行的时期，如解释执行的js，编译执行的java,运行时期执行的代码（如反射）

		def person = new Person(name: "Qndroid", age: 26)
		println person.cry(4444,888,["0kkk"])//编译通过,运行时期会找类中是否由此方法，没有的话会以此查看是否重写了methodMissing()方法和invokeMethod（）方法

		//在程序运行时期，给类动态的添加属性和方法

		//动态添加属性
		Person.metaClass.sex = "male"
		def person2 = new Person(name: "Bob", age: 23)
		println person2.sex
		person2.sex = "female"
		println person2.sex

		//动态添加方法,通过一个闭包就能把方法添加到类Person中
		Person.metaClass.sexUpperCase = {
		    -> sex.toUpperCase()
		}
		println person2.sexUpperCase()

		
		//给类动态添加静态方法
		Person.metaClass.static.createPerson = {
		    String name, int age ->
		        new Person(name: name, age: age)
		}
		def person3 = Person.createPerson("renzhiqiang",26)
		println person3.name + " and " + person3.age

**在一个脚本文件中给一个类动态添加属性和方法后只能在本脚本中使用，如果想要全局使用，则设置ExpandoMetaClass.enableGlobally()**<br>

AppalachianManager类：

			class AppalachianManager {

			    static void init(){

			        ExpandoMetaClass.enableGlobally()

			        //为第三方类添加方法
			        Person.metaClass.static.createPerson = {
			            String name, int age ->
			                new Person(name: name, age: age)
			        }
			    }
			}

PersonManager类

			class PersonManager {
			    static Person createPerson(String name, int age){
			        return  Person.createPerson(name, age)
			    }
			}

Entry类

		class Entry {
		    static void main(def args){

		        println '应用启动中。。。'

		        //初始化
		        AppalachianManager.init()
		        println '应用程序初始化完成'

		        def person = PersonManager.createPerson("kkk",25)
		        println "the person name is ${person.name}"
		    }
		}

#三、Gradle高级用法

1. json文件处理及json，model互转
2. xml文件读取和生成
3. 普通文件的读写
4. 网络请求json并转化为实体对象实现
5. 文件下载功能的实现

#四、Gradle核心之Project详解及实战
1. Project类核心作用
2. 核心API讲解
3. Gradle生命周期流程
4. 版本统一管理脚本编写
5. Project类源码解读

#五、Gradle核心之task详解及实战
1. task定义和使用，Task执行流程
2. Task依赖关系与输入输出，Task继承与实现
3. Task修改默认构建流程，Task源码解读
4. 综合实战1：自动化生成版本说明xml文档
5. 综合实战2：自动化实现工程插件更新功能

#六、Gradle核心之其他模块详解及实战
1. 第三方库依赖管理及gradle如何去处理依赖原理解析
2. 工程初始化核心类Setting类作用及自定义
3. 源码管理类SourceSet讲解及实际工作中的妙用
4. 相关源码解读

#七、Gradle核心之自定义plugin实战
1. 插件类Plugin的定义和如何使用第三方插件
2. Gradle如何管理插件的依赖
3. 插件类Plugin源码解读
4. 综合实战：将前面实现的自动化脚本封装为插件供他人使用

#八、Gradle程序修改默认打包流程
1. Android，java工程打包流程讲解
2. 将脚本嵌入到Gradle打包流程中实现我们特有功能
3. 打包流程核心Task图解
4. 综合实战：将前面编写的脚本嵌入到打包流程中

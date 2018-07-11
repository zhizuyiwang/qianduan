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
1、使用单引号声明字符串：def name1 = '啊\'\'single' <br>
2、使用三个引号声明字符串： def name2 = ''' jj jjjjkk  '''<br>
3、使用两个引号定义字符串，也被称为可扩展字符串，如：

		def job = "Student"
		def KK = "小明是 ${job}"
		println KK
		println KK.class//class org.codehaus.groovy.runtime.GStringImpl
可以看到只要有扩展表达式的普通Java字符串定义的是Groovy的字符串实现类
	

4、区别：单引号的字符串没有格式，三个单引号定义的字符串有格式，如：
	
- GString<br>
1.常用三种定义方式<br>
- 
2.新增操作符<br>
3.新增API讲解<br>


##2、groovy闭包讲解
##3、groovy数据结构
##4、groovy面向对象



1. 字符串特殊用法
2. Gradle常见数据结构（list，map,range）使用
3. Gradle面向对象特性

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

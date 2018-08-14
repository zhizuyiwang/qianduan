#1.Object.keys方法之详解

#2. Map()方法
map()是数组的一个方法，它创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。map()里面的处理函数接受三个参数，分别指代当前元素、当前元素的索引、数组本身。<br>
###注意事项：
1. **map()方法按照原始数组元素顺序依次处理元素**
2. **map()不会对空数组进行检测** 
3. **map不会改变原始数组**
4. **map()中的function(currentValue,index,arr) 函数必须要有返回值**

下面我们通过一个示例来理解怎么使用

    var arr1 = [1, 2, 3]

	var arr2 = arr1.map(value => {//value就是arr1数组的元素
        //在这里面写转换元素的逻辑，return语句就是最终的元素值
        let age = value+1
        let name = "小明"
        return `${name}的年龄加一是${age}岁`
    })
	console.log(arr2)

	最后输出：
	[ '小明的年龄加一是2岁', '小明的年龄加一是3岁', '小明的年龄加一是4岁' ]

由此可见map()函数可以转换数组元素为任意类型。<br><br>
下面，看看一些使用map()操作数组的经典例子：<br>
###1.通过map()方法转换数组中所有字符串首字母为大写字母：
思考：

1. 先把数组中对象转换成字符串
2. 截取字符串中首个字符并将其转换成大写字母
3. 截取首字符外的其它字符，并和转换后的首字符合并

		var arr = ['adam', 'LISA','barT',223,"大团长"];
		function toName(x){
		    x=x.toString();//防止数字干扰，提前把对象转换成字符串，toLocaleLowerCase() 只能被字符串调用。
		    x = x.toLocaleLowerCase();// 把整个字符串转换成小写
		    var x1 = x.substr(0,1).toUpperCase();// 截取第一个字符并将其转换成大写字母
		    var x2 = x.substr(1);// 取到从第二个开始到最后的字符串
		    x = x1+x2;
		    return x;
		}
		// 注意这里不带括号
		arr=arr.map(toName);
		console.log(arr);//[ 'Adam', 'Lisa', 'Bart', '223', '大团长' ]

###2.反转字符串
首先需要了解在字符串中使用map，如下面的例子：<br>
在一个 String  上使用 map 方法获取字符串中每个字符所对应的 ASCII 码组成的数组：
		
		
			var map = Array.prototype.map
			var a = map.call("Hello World", function(x) {
			    return x.charCodeAt(0);
			})
			console.log(a)//[ 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100 ]

了解了map函数在字符串中的用法后就很容易反转一个字符串了：

			var str = '12345';

			var zifuchuan = Array.prototype.map.call(str, function(x) {//同时利用了call()方法
			    return x;
			}).reverse().join('');
			console.log(zifuchuan)//54321
###3.一个关于map函数的面试题
	["1", "2", "3"].map(parseInt);  //结果  [1, NaN, NaN

如果想得到[1, 2,3]应该这么做：

		
		function returnInt(element){
		  return parseInt(element,10);
		}
		 
		["1", "2", "3"].map(returnInt);//其结果为[1,2,3]
		

		
 

	



#3.	forEach()方法
<font color='blue'>JS中的forEach()方法只能遍历数组，不能遍历字符串和对象，和$.each()有很多使用上的区别。
array.forEach(funcion(value,index,arr){},thisValue);<br>
value：必须；index：元素下标(可选)；arr：调用方法的数组；thisValue，forEach中，this指代的值<br></font><br>
需要注意的问题：<br>

1. 在forEach循环中不可以使用break和continue
2. break，跳出整个for循环；break没有常规的代替方案，但可以使用异常来结束整个循环，可看下面第二个例子
3. continue，跳出本次循环；可以使用return代替continue
4. return；return false；return true;效果相同，跳出本次，继续下次循环

如下面的例子：<br>
1.去除数组中相同的元素:

		//去除数组中相同的元素
		function unique(array){
			var arr = []
			array.forEach(function(val,key,arrself){

			    //在forEach循环中不可以使用break和continue
			    //break;break没有代替方案
			    //continue;可以使用return代替continue
			    //return;return false;return true;效果相同，跳出本次，继续下次循环

			    arr.push(val)
			    for(var i=0;i < arr.length - 1;i++){
			        if(arr[i]==val){
			            arr.pop();
			            break;
			        }
			    }
			},'123')
			return arr;
		}

		var array=[1,1,2,3,4,4,5,1]
		var newarray = unique(array)
		console.log(newarray)//[1,2,3,4,5]

2.使用异常结束整个数组迭代循环：

		try {
		    var arr = [7,8,9,10]
		    arr.forEach((item,index) => {
		        if (item ===9){
		            throw new Error("出错了")
		        }
		        console.log(item)
		    })
    
		}catch (e) {
		    if(e.message == "出错了"){
		        console.log(e.message)
		    }
		}

		最后打印[7,8]



 
#4. forEach()和map()方法的区别
**forEach(): 针对每一个元素执行提供的函数(executes a provided function once for each array element)。<br><br>
map(): 创建一个新的数组，其中每一个元素由调用数组中的每一个元素执行提供的函数得来(creates a new array with the results of calling a provided function on every element in the calling array)。<br><br>
到底有什么区别呢？forEach()方法不会返回执行结果，而是undefined。也就是说，forEach()会修改原来的数组。而map()方法会得到一个新的数组并返回<br><br>**
如将一个数组的所有元素翻倍，我们可以使用map和forEach来达到目的。<br>

		使用forEach

		let arr = [1, 2, 3, 4, 5];
		let newArr = arr11.forEach((num, index) => {
		    return arr[index] = num * 2;
		});
		console.log(newArr)//undefined，由此证明forEach返回值为undefined
		console.log(arr)，修改了原数组，得到新的数组

使用map来更新数组，不会修改原来数组

		let arr = [1, 2, 3, 4, 5];
		let doubled = arr.map(num => {
		    return num * 2;
		});
		console.log(doubled)//得到新的数组

总结：

1. 能用forEach()做到的，map()同样可以。反过来也是如此。
2. map()会分配内存空间存储新数组并返回，forEach()不会返回数据。
3. forEach()允许callback更改原始数组的元素。map()返回新的数组。
#5.	for...in...和for...of...的用法
###for...in...
for...in...对应于一个对象的每个属性，或一个数组的每个元素，执行一个或多个语句。用来遍历数组和对象，基本用法： for (variable in [object | array]) 参数variable 必选项，是一个变量，它可以是 object 的任一属性名或 array 的任一下标，**注意，当是一个array的下标时，它是字符串类型，并且当是object的属性名时也是字符串。** object, array 可选项。要在其上遍历的对象或数组。<br><br>
说明：在循环的每次迭代前，variable 被赋予 object 的下一个属性或 array 的下一个元素下标。然后可以在循环内的任一语句中使用它，就好像正在使用 object 的该属性或 array 的该元素一样。 当在一个对象上迭代时，没有办法决定或控制把对象的成员赋给 variable 的次序，也就是按照object对象属性的顺序迭代。在数组内将按元素的次序执行迭代，也就是，0、1、2、......<br><br>
遍历对象


		var obj = {
		    1:3,
		    2:4
		}
		for (var i in obj){
		    console.log(typeof i)//String
		    console.log(obj1[i])//依次输出3、4，并且类型是Number
		}
遍历数组

		var arr = [1,2,3,4,5]
		for (i in arr99){
		    console.log(typeof i)//输出的下标全是字符串
			console.log(arr[i])//
		}

###for...of...
for...of...的用法和for...in...类似，不同的是for...of...迭代出来的是value，而for in 迭代出来的是key和下标。

1. 推荐在循环对象属性的时候，使用for...in，在遍历数组的时候的时候使用for...of。
2. for...in循环出的是key，for...of循环出的是value
3. 注意，for...of是ES6新引入的特性，修复了ES5引入的for...in的不足
4. **for...of不能循环普通的对象，需要通过和Object.keys()搭配使用**

先看两者如何遍历数组的

		let aArray = ['a',123,{a:'1',b:'2'}]
		for(index in aArray){
		    console.log(index)//输出值分别为0,1,2，字符串形式的下标
		    console.log(`${aArray[index]}`);//输出a,123,[object Object]
		}
下面来看for of 

		let aArray = ['a',123,{a:'1',b:'2'}]
		for(value of aArray){
		    console.log(value);//输出a，123，{ a: '1', b: '2' }
		}
由此可见for of 直接把对象的value值赋给了变量。

现在再给数组aArray添加一个自定义的属性和方法

			Array.prototype.test = function(){
			    console.log("Hello")
			}
			aArray.name = "Tom"
再次分别遍历，并输出打印key、value的值

			//for in  情况
			for(index in aArray){
			    console.log(index)//输出值分别为0,1,2，name，test
			    console.log(`${aArray[index]}`);//输出a,123,[object Object],Tom，和test方法体
			}
可见，for in会把自定义的属性和方法给遍历到
			

			for(value of aArray){
		    	console.log(value);//输出a，123，{ a: '1', b: '2' }
			}
而for of 并不遍历自定义的属性和方法。<br><br>
下面总结一下：

1. for...of循环不会循环对象的key，只会循环出数组的value，因此for...of不能循环遍历普通对象,对普通对象的属性遍历推荐使用for...in
2. 如果实在想用for...of来遍历普通对象的属性的话，可以通过和Object.keys()搭配使用，先获取对象的所有key的数组，然后遍历。如下面的例子：

			var student={
			    name:'wujunchuan',
			    age:22,
			    locate:{
			        country:'china',
			        city:'xiamen',
			        school:'XMUT'
			    }
			}
			for(var key of Object.keys(student)){
			    //使用Object.keys()方法获取对象key的数组
			    console.log(key+": "+student[key]);
			}
			

#6. for循环的用方法


#7. forEach()、for...in...与for()的区别
1. forEach()函数只能遍历数组，不能遍历对象和字符串。
2. for...in...可以遍历对象，数组和字符串。
3. for可以遍历数组和字符串。
4. 总的来说，for...in...是用来遍历普通对象的。for...of...是用来遍历数组的。forEach也是用来遍历数组的，不同的是for of 可以由break，continue，return来控制。

在遍历数组时最好用原生的for循环，尽量不要用for in循环遍历，具体原因是：<br>
for in 语句对数组对象进行遍历潜在的bug在于：如果原生Array类被其他的js脚本库进行了原型扩展（比如多加一个toJSON方法即Array.prototype.toJSON=xxxx)，那么用for in遍历扩展后的Array对象的逻辑将与遍历原生Array对象的逻辑发生差异。<br>
举个简单的例子，

		var x=[1]; 
			for(var s in x){ 
			alert(s); 
		};  
按常理，如果Array是原生js类，上面语句应该只执行一次alert方法，且s为数组的索引0。但是，如果Array类被扩展了，多了一个toJSON方法，那么上面的语句将执行两次alert，第一次s为索引0，第二次s为方法名'toJSON'。 

如果你设计的代码的逻辑以原生Array类为基准，在某一天你的同事在页面里面引用了一个第三方的JS库，这个库又恰好扩展了Array类，结果将难以想象，很有可能原来的代码逻辑将不再成立。 

关于这种扩展原生JS类的库，很有名的一个就是prototype.js，它给Array类扩展了很多方法诸如toJSON,each等等。


#8.	List()方法
#9. filter:筛选出数组中符合条件的项，组成新的数组
#10. reduce：让数组中的前项和后项做某种运算，并累计最终值
#11. every： 检测数组中的每一项是否符合条件
#12. some： 检测数组中是否有某些项符合条件
#13. JS中的...操作符

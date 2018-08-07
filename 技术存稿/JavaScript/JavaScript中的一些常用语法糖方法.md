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
for...in...对应于一个对象的每个属性，或一个数组的每个元素，执行一个或多个语句。用来遍历数组和对象，基本用法： for (variable in [object | array]) 参数variable 必选项，是一个变量，它可以是 object 的任一属性名或 array 的任一下标，**注意，当是一个array的下标时，它是字符串类型，并且当是object的属性名时也是字符串。** object, array 可选项。要在其上遍历的对象或数组。<br><br>
说明：在循环的每次迭代前，variable 被赋予 object 的下一个属性或 array 的下一个元素下标。然后可以在循环内的任一语句中使用它，就好像正在使用 object 的该属性或 array 的该元素一样。 当在一个对象上迭代时，没有办法决定或控制把对象的成员赋给 variable 的次序，也就是按照object对象属性的顺序迭代。在数组内将按元素的次序执行迭代，也就是，0、1、2、......


		var obj = {
		    1:3,
		    2:4
		}
		for (var i in obj){
		    console.log(typeof i)//String
		    console.log(obj1[i])//依次输出3、4，并且类型是Number
		}


#6. for循环的用方法
#7. forEach()、for...in...与for()的区别
#8.	List()方法
#9. filter:筛选出数组中符合条件的项，组成新的数组
#10. reduce：让数组中的前项和后项做某种运算，并累计最终值
#11. every： 检测数组中的每一项是否符合条件
#12. some： 检测数组中是否有某些项符合条件
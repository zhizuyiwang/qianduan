##1、可以直接在JS文件中写<font color=red>this.变量名，不需要提前声明变量，如果this.变量名</font>存在则取存在的值，如果不存在则是未定义——undefined

##2、js的{}用法
1. 可以当做一个枚举类来使用

		//拼团分享海报类型
		const collagePosterType = {
		  GOODS_CENTER: [1],//商品图在中间
		  GOODS_TOP: [0],//商品图在上方
		  LEFT_ICON: [2, 3] //没有商品图的海报,头像在左边的商品
		}
		collagePosterType.GOODS_CENTER就是数组[1]
2. 可以当做一个大map来使用

		const numMap = {
		  1: '一',
		  2: '二',
		  3: '三',
		  4: '四',
		  5: '五',
		  6: '六',
		  7: '七',
		  8: '八',
		  9: '九',
		  10: '十',
		}
		numMap[1]取的值就是'一'

##3、js判断对象是否为空对象的几种方法
- 1.将json对象转化为json字符串，再判断该字符串是否为"{}"

		var data = {};
		var b = (JSON.stringify(data) == "{}");
		console.log(b);//true
- 2.for in 循环判断
		
		var obj = {};
		var b = function() {
			for(var key in obj) {
				return false;
			}
			return true;
		}
		console.log(b());//true

- 3.Object.getOwnPropertyNames()方法<br>
此方法是使用Object对象的getOwnPropertyNames方法，获取到对象中的属性名，存到一个数组中，返回数组对象，我们可以通过判断数组的length来判断此对象是否为空
注意：此方法不兼容ie8

		var data = {};
		var arr = Object.getOwnPropertyNames(data);
		console.log(arr.length == 0);//true

- 4.使用ES6的Object.keys()方法<br>
与4方法类似，是ES6的新方法, 返回值也是对象中属性名组成的数组

		var data = {};
		var arr = Object.keys(data);
		console.log(arr.length == 0);//true

- 5.jquery的isEmptyObject方法<br>

此方法是jquery将2方法(for in)进行封装，使用时需要依赖jquery

	
		var data = {};
		var b = $.isEmptyObject(data);
		console.log(b);//true


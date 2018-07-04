###判断数组中是否存在某一元素
- 方式一

		//给Array数组添加判断是否存在的某元素的扩展方法
		Array.prototype.contains = function (obj) {
		    var i = this.length
		    while (i--){
		        if (this[i]===obj){
		            return true
		        }
		    }
		    return false
		}

		console.log([1,3,4,"2"].contains("2"))//打印true

		console.log([1,3,4,"2"].contains(2))//打印false
		
- 方式二

		//写一个函数，来判断
		function contains(arr,obj) {
		    var i = arr.length
		    while (i--){
		        if(arr[i] === obj){
		            return true
		        }
		    }
		    return false
		}
		var arr = new Array(1,2,3)

		console.log(contains(arr,2))//打印true

		console.log(contains(arr,4))//打印false
- 方式三

		//使用数组的indexOf方法，返回值是该元素在数组中的位置下标，如果返回-1，说明不存在
		var arr = [1,2,3]

		arr.indexOf(1)//返回0

		arr.indexOf(4)//返回-1
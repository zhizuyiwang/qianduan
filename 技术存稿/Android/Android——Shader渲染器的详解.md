**shader和shape是两个概念，两个东西，shader一般用在自定义view中，设置给画笔；shape是定义在xml中的，作用：XML中定义的几何形状，位置：res/drawable/文件的名称.xml。下面简单介绍一下shape，然后主要详细讲解shader的用法**

#一、Shape 各种属性详解
我们知道，shape是定义在res/drawable/文件的名称.xml的文件中的，是被``<shape></shape>```标签所包含着的。

		使用的方法：

		Java代码中：R.drawable.文件的名称
		XML中：Android:background="@drawable/文件的名称"

#属性：
###1）	```<shape>```形状

		android:shape=["rectangle" | "oval" | "line" | "ring"]

		其中rectagle矩形，oval椭圆，line水平直线，ring环形

###2）```<gradient>```  渐变

		android:startColor  起始颜色
		android:endColor  结束颜色             
		android:angle  渐变角度，0从上到下，90表示从左到右，数值为45的整数倍，默认为0；
		android:type  渐变的样式 liner线性渐变 radial环形渐变（放射形） sweep扫描渐变

###3）```<solid>```  填充
		android:color  填充的颜色

###4）```<stroke>``` 描边
		android:width 描边的宽度
		android:color 描边的颜色
		android:dashWidth 表示'-'横线的宽度
		android:dashGap 表示'-'横线之间的距离
		 
		我们还可以把描边弄成虚线的形式，设置方式为： 
		android:dashWidth="5dp"  
		android:dashGap="3dp"
		其中android:dashWidth表示'-'这样一个横线的宽度，android:dashGap表示之间隔开的距离。

###5）```<corners>``` 圆角
		android:radius  圆角的半径 值越大角越圆
		android:topRightRadius  右上圆角半径
		android:bottomLeftRadius 右下圆角角半径
		android:topLeftRadius 左上圆角半径
		android:bottomRightRadius 左下圆角半径

###6）```<padding>``` 距离
		android:bottom="1.0dip" 底部和内部距离
		android:left="1.0dip" 左边
		android:right="1.0dip" 右边
		android:top="0.0dip" 上面
#layer-list的介绍
其实说到shape就不得不提layer-list，这两个标签通常是一块使用的。layer-list标签可包含多个shape标签，用来表示此xml文件定义的是含有多个几何形状的一个含多层的形状。
#level-list的介绍
还有个标签和layer-list标签和像，就是level-list，level-list用来让同一个ImageView根据条件来显示不同的内容。<br>
我们为了在一个ImageView中显示不同的图片，平时往往会使用：

		if (条件1)
		{ 
		  image.setBackground(R.id.xxx1); 
		}
		else if (条件2)
		{ 
		  image.setBackground(R.id.xxx2); 
		}  
我们还可以用另一个简便的方法实现相同的功能（安卓电池图标的显示就是这样使用）：
	
		首先，在res/drawable下建立一个xml文件，内容如下 	
		<level-list xmlns:android="http://schemas.android.com/apk/res/android">
		    <item android:maxLevel="0" android:drawable="@drawable/battery_0" />
		    <item android:maxLevel="1" android:drawable="@drawable/battery_1" />
		    <item android:maxLevel="2" android:drawable="@drawable/battery_2" />
		    <item android:maxLevel="3" android:drawable="@drawable/battery_3" />
		    <item android:maxLevel="4" android:drawable="@drawable/battery_4" />
		</level-list>


然后，在layout中把image view的src设置成已创建好的xml文件 <br>
程序中变换图片时，只需要使用<br>
imageview.getDrawable().setImageLevel(1);<br>
... <br>
Android会根据level的值自动选择对应的图片,手机显示剩余电量就是用这个方法来显示不同图片的。



#Android绘图基础之Shader

1. Android——Shader渲染器<br>[https://blog.csdn.net/u010386612/article/details/50619798#bitmap](https://blog.csdn.net/u010386612/article/details/50619798#bitmap "Android——Shader渲染器")
2. Android绘图基础之Shader<br>[https://blog.csdn.net/crazy1235/article/details/74011243](https://blog.csdn.net/crazy1235/article/details/74011243 "Android绘图基础之Shader")
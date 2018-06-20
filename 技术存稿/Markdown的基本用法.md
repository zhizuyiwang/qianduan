<font color="blue" size="7"><center>Markdown的基本用法</center></font>

###在写这篇文章时，我就是边学习Markdown的语法边使用的，现在记下来主要的操作语法，加深印象。  
<br/> 
#<font color="red">1.设置标题和设置字体的大小、颜色、字体、粗斜体与背景</font>
<font size="5px" color="blue">**设置标题有两种方式：**</font><br><font size='4'>第一种：通过在文字下方添加“=”和“-”，他们分别表示一级标题和二级标题。<br>第二种：在文字开头加上 “#”，通过“#”数量表示几级标题。（一共只有1~6级标题，1级标题字体最大）,可以在列表前使用标题语法，就如上面我使用的列表1的样式。</font><br><font size="5px" color="blue">**设置字体的大小、颜色、字体、粗斜体：**</font><br><font size="4px">Markdown支持html格式语言，可以通过font标签把文字包裹住，在font中设置字体的颜色、大小和字体，字体大小从1到10分为10个级别，数字越大，字体越大。而<b>字体的加粗与斜体是直接把字体包裹在`*`中，`** **`表示粗体，`* *`表示斜体。也可以用`<b>`标签和`<Strong>`标签表示粗体，`<i>`标签表示斜体</b>如下面的例子</font>


	红色文字：<font color="red" size="3">**红色文字**</font><br /> 
	黑色文字：<font color="black" size="5">*黑色文字*</font><br /> 
	绿色文字：<font color="green" size="7">绿色文字</font><br /> 
	蓝色文字：<font color="blue" size="9">蓝色文字</font><br /> 
	

红色文字：<font color="red" size="3" >**红色文字**</font><br /> 
黑色文字：<font color="black" size="5">*黑色文字*</font><br /> 
绿色文字：<font color="green" size="7">绿色文字</font><br /> 
蓝色文字：<font color="blue" size="9">蓝色文字</font><br /> 
	


<pre name="code" class="c++" > 
　#include &lt;stdio.h> 
　#include &lt;cstring> 
　#include &lt;cstdio&gt; 
　 int main(int argc, char const *argv[])　 
　 { 
　　 int a = 1; 
　　 String str = "abc"; 
　 　scanf("%d", &a); 
　 cout &lt;&lt;"str:"&lt;&lt; str &lt;&lt; endl; 
　　　return 0; 
　　} 
</pre>







5
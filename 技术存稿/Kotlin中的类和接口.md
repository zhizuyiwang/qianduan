###&emsp;&emsp;Kotlin的类和接口与Java的类和接口还是有一点区别的，如，Kotlin的接口可以包含属性声明，并且声明的类默认是final和public的。此外，嵌套的类默认并不是内部类：它们没有包含对其外部类的隐式引用，这种声明很好的解决了Android中用内部类造成的内存泄漏问题
##<font color="green">一、Kotlin中的接口</font>

kotlin的接口与Java8中的相似：它们可以包含抽象方法的定义以及非抽象方法的实现，但它们不能包含任何状态。使用interface关键字声明一个kotlin接口

	interface Clickable{
    	fun click()
	}
声明了一个拥有名为click的单抽象方法的接口，来定义一个类实现此接口

	class Button: Clickable{
    	override fun click() = println("click me!")
	}
kotlin在类名后面使用冒号代替了Java中的extents和implements关键字，和Java一样，一个类可以实现任意多接口，但只能继承一个类。override修饰符用来标注被重写的父类或者接口的属性和方法，与Java不同的是，在Kotlin中使用override修饰符是强制要求的
##<font color="green">二、Kotlin中open、final和abstract等控制继承的修饰符，默认为final</font>
&emsp;&emsp;Java允许创建任意类的子类并重写任意方法，除非显示地使用了final关键字进行标注，这很方便但也造成了一些问题，比如修改了基类，可能会对子类造成不正确的行为。Kotlin为了防止这种问题，**在Kotlin中类和方法默认都是final的。如果允许创建一个类的子类，需要使用open修饰符来标注这个类，此外需要给每一个可以被重写的属性或方法添加open修饰符。如：**

	open class Dog: Animal{//这个类是open的，其他类可以继承它
	    fun eat(){}//这个方法是final的，不能在子类中重写它
	    open fun sleep(){}//可以在子类中重写
	    override fun run(){}//这个函数重写了一个open函数并且它本身同样是open的
		final override fun jiao(){}//显示的把重写成员标注为final
	}
注意，如果重写了一个基类或者接口的成员，重写了的成员同样默认是open的,如果阻止以后的子类再去重写，可以显示的使用final修饰符。<br>
&emsp;&emsp;在Kotlin中,也可以将一个类声明为abstract的，这种类不能被实例化，通常包含一些没有实现且必须在子类重写的抽象成员，**抽象成员始终是open的，不需要显示的使用open修饰符，但非抽象成员并不是默认open的，若有需要，要标注为open**<br>
<table>
    <tr>
        <td>修饰符</td>
        <td>相关成员</td>
		<td>评注</td>
    </tr>
    <tr>
        <td>final</td>
        <td>不能被重写</td>
		<td>类中成员默认使用</td>
    </tr>
    <tr>
      	<td>open</td>
        <td>可以被重写</td>
		<td>需要明确的表明</td>
    </tr>
  	<tr>
      	<td>abstract</td>
        <td>必须被重写</td>
		<td>只能在抽象类中使用；抽象成员不能有实现</td>
    </tr>
	<tr>
      	<td>override</td>
        <td>重写父类或接口中的成员</td>
		<td>如果没有使用final表明，重写的成员默认是开放的</td>
    </tr>
</table>

上表列出了Kotlin中的访问修饰符，**表中的评注适用于类中的修饰符，在接口中，不能使用final、open、或者abstract，接口中的成员始终是open的，不能将其声明为final**

##<font color="green">三、Kotlin中的可见性修饰符，默认为public</font>
&emsp;&emsp;可见性修饰符帮助控制对代码库中声明的访问。通过限制类中实现细节的可见性，可以确保在修改它们时避免破坏依赖这个类的代码的风险。总的来说Kotlin中的可见性修饰符与Java中的类似，同样可以使用public、protected、private修饰符，但是默认的可见性是不一样的：如果省略了修饰符，声明就是public的。<br>
&emsp;&emsp;java中的默认可见性——包私有，在kotlin中并没有使用。Kotlin只把包作为在命名空间里组织代码的一种方式，并没有将其用作可见性控制。在替代方案中，**Kotlin提供一个新的修饰符，internal，表示“只在模块内部可见”。一个模块就是一组一起编译的Kotlin文件，有可能是一个Intellij IDEA模块、一个Eclipse项目、一个Maven或Gradle项目或者一组调用Ant任务进行编译的文件。**<br>
&emsp;&emsp;internal可见性的优势在于它提供了对模块实现细节的真正封装。使用Java时，这种封装很容易被破坏，以为外部代码可以将类定义到与你代码相同的包中，从而得到访问你的包私有声明的权限。<br>
&emsp;&emsp;**另一个区别就是Kotlin允许在顶层声明中使用private可见性，包括类、函数和属性。这些声明就会只在声明它们的文件中可见，这就是另外一种隐藏子系统实现细节的非常有用的方式。**
<table>
    <tr>
        <td>修饰符</td>
        <td>类成员</td>
		<td>顶层声明</td>
    </tr>
    <tr>
        <td>public(默认)</td>
        <td>所有地方可见</td>
		<td>所有地方可见</td>
    </tr>
    <tr>
      	<td>internal</td>
        <td>模块中可见</td>
		<td>模块中可见</td>
    </tr>
  	<tr>
      	<td>protected</td>
        <td>子类中可见</td>
		<td>——</td>
    </tr>
	<tr>
      	<td>private</td>
        <td>类中可见</td>
		<td>文件中可见</td>
    </tr>
</table>
##<font color="green">四、Kotlin中的内部类和嵌套类，默认是嵌套类</font>
&emsp;&emsp;像Java一样，在Kotlin中可以在另一个类中声明一个类。这样做在封装一个辅助类或者把一些代码放到靠近它被使用的地方时非常有用。区别是Kotlin的嵌套类不能访问外部类的实例，除非你特别的做出了声明。<br>
&emsp;&emsp;如，你想定义一个View元素，它的状态是可以序列化的。想要序列化一个视图可能并不容易，但是可以把所有需要的数据复制到另一个辅助类中去。先声明State接口去实现Serializable，用View接口声明可以用来保存视图状态的getCurrentState和restoreState方法，这样就容易多了。<br>


	//声明一个包含可序列化状态的视图

	interface State: Serializable

	interface View{
	    fun getCurrentState(): State
	    fun restoreState(state: State){}
	}
可以很方便的定义一个保存按钮状态的Button类，先看一下在Java中是怎么实现的

	public class Button implements View {
	    @Override
	    public State getCurrentState() {
	        return new ButtonState();
	    }
	
	    @Override
	    public void restoreState(@NotNull State state) {
	
	    }
	    public class ButtonState implements State{}
	}
&emsp;&emsp;先定义了实现State接口的ButtonState类，并且持有Button的特定信息。在getCurrentState方法中，创建了这个类的一个新的实例，在这里需要使用所有需要的数据来初始化ButtonState。当试图序列化声明的按钮状态时，会得到一个java.io.NotSerializableException:Button的异常，这看起来很奇怪，序列化的变量是ButtonState类型的state,并不是Button类型，怎么会出现Button序列化异常？**这是因为在Java中，当在一个类中声明另一个类时。它会默认变成内部类。**在这个例子中的**ButtonState类隐式地存储了它的外部Button类的引用，而Button不是可序列化的，并且它的引用破坏了ButtonState的序列化。要解决这个问题，需要声明ButtonState类是static的，将一个嵌套类声明为static会从这个类中删除包围它的类的隐式引用！**下面来看在Kotlin中的声明

	class Button: View{
	    override fun getCurrentState(): State  = ButtonState()
	    override fun restoreState(state: State) {}      
	    class ButtonState: State{}//这个类与Java中的静态嵌套类类似
	}
&emsp;&emsp;**Kotlin中没有显示修饰符的嵌套类与Java中的static嵌套类是一样的，要把它变成一个内部类来持有一个外部类的引用需要使用inner修饰符。**<br>
&emsp;&emsp;**<font color="red">注意：在Kotlin中引用外部类实例的语法也与Java有所不同，需要使用this@Outer从Inner类去访问Outer类</font>**

	class Outer{
	    inner class Inner{
	        fun getOutterReference(): Outer = this@Outer
	    }
	}

##<font color="green">五、Kotlin中的密封类，定义受限的类继承结构</font>


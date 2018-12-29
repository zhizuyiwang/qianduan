#优化构建速度
1. 加快apk的构建速度，如何把编译时间从130秒降到17秒<br>[https://www.jianshu.com/p/53923d8f241c](https://www.jianshu.com/p/53923d8f241c "加快apk的构建速度，如何把编译时间从130秒降到17秒")
2. Android 优化APP 构建速度的17条建议<br>[https://www.jianshu.com/p/a1cc8f2e0877](https://www.jianshu.com/p/a1cc8f2e0877 "Android 优化APP 构建速度的17条建议")
3. Android Studio项目Gradle构建实践<br>[https://www.jianshu.com/p/ffcb7bba21a2](https://www.jianshu.com/p/ffcb7bba21a2 "Android Studio项目Gradle构建实践")

#sourceCompatibility  vs  targetCompatibility的用法

 		
	对于Android程序员而言，这个targetCompatibility我们不太需要关心，我们程序的向前兼容最直接取决于

	minSdkVersion，所以Android中建议targetCompatibility=sourceCompatibility

1. sourceCompatibility  vs  targetCompatibility的用法<br>[https://www.jianshu.com/p/144b21179a2d](https://www.jianshu.com/p/144b21179a2d "“sourceCompatibility” vs “targetCompatibility”")


#Jack+Jill vs  javac+dx

Jack 工具链，Android中使用Java8有关的工具，google已经弃用掉

1. Google 又弃坑了，Jack+Jill vs. javac+dx<br>[https://zhuanlan.zhihu.com/p/25814519](https://zhuanlan.zhihu.com/p/25814519 "Google 又弃坑了，Jack+Jill vs. javac+dx")

#依赖类型的区别
1. android-apt、annotationProcessor、provided、compile和Gradle 3.X的指令api、implementation<br>[https://www.jianshu.com/p/8ae94b825740](https://www.jianshu.com/p/8ae94b825740 "android-apt、annotationProcessor、provided、compile和Gradle 3.X的指令api、implementation")
#multiDexEnabled的设置(在4.4以前会有问题)
1. multiDexEnabled遇坑简记<br>[https://www.jianshu.com/p/cddfc89ce947](https://www.jianshu.com/p/cddfc89ce947 "multiDexEnabled遇坑简记")
#Android Gradle manifestPlaceholders
1. Android Gradle manifestPlaceholders 的妙用<br>[https://blog.csdn.net/qq_21793463/article/details/52069127](https://blog.csdn.net/qq_21793463/article/details/52069127 "Android Gradle manifestPlaceholders 的妙用")
#Android Gradle productFlavors
1. Gradle中productFlavors使用详解<br>[https://juejin.im/entry/5a586bfaf265da3e2c3808c5](https://juejin.im/entry/5a586bfaf265da3e2c3808c5 "Gradle中productFlavors使用详解")
2. Android Studio：多包名打包<br>[https://blog.csdn.net/u011315960/article/details/73251196](https://blog.csdn.net/u011315960/article/details/73251196 "Android Studio：多包名打包")
3. Android Studio配置Gradle（包括signingConfigs、buildTypes和productFlavors等）<br>[https://blog.csdn.net/qq_26296197/article/details/80045497](https://blog.csdn.net/qq_26296197/article/details/80045497 "Android Studio配置Gradle（包括signingConfigs、buildTypes和productFlavors等）")
4. 官方文档介绍ProductFlavors<br>[https://developer.android.google.cn/studio/build/build-variants](https://developer.android.google.cn/studio/build/build-variants "官方文档介绍ProductFlavors")
5. 
# Gradle常用命令

		android studio希望你能在电脑上不安装gradle的情况下，依然使用gradle管理android项目，因此通过AS创建的每个项目都会内嵌一个gradle wrapper，作用是检查你当前的共工作环境是否安装了创建本项目时所用的gradle版本。

		如果没有，它会自动下载相应的gradle放在~/.gradle/wrapper.目录下。这样当你在你的项目里使用gradle时，可以通过gradlw命令使用当前项目环境的gradle版本，而不受环境变量的影响。



		理解了gradle wrapper的概念，下面一些常用命令也就容易理解了。
		./gradlew -v 版本号
		./gradlew clean 清除9GAG/app目录下的build文件夹
		./gradlew build 检查依赖并编译打包
		这里注意的是 ./gradlew build 命令把debug、release环境的包都打出来，如果正式发布只需要打Release的包，该怎么办呢，下面介绍一个很有用的命令 assemble, 如
		./gradlew assembleDebug 编译并打Debug包
		./gradlew assembleRelease 编译并打Release的包
		除此之外，assemble还可以和productFlavors结合使用，具体在下一篇多渠道打包进一步解释。
		./gradlew installRelease Release模式打包并安装
		./gradlew uninstallRelease 卸载Release模式包


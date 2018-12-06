1. Android Studio 3.0 新功能解析和旧项目适配<br>[https://yifeng.studio/2017/10/31/android-studio-3-0-features-and-adapter/](https://yifeng.studio/2017/10/31/android-studio-3-0-features-and-adapter/ "Android Studio 3.0 新功能解析和旧项目适配")
2. 老项目迁移AndroidStudio3.0带你踩完所有坑~<br>[https://www.jianshu.com/p/7105878fd79c](https://www.jianshu.com/p/7105878fd79c "老项目迁移AndroidStudio3.0带你踩完所有坑~")
3. AndroidStudio3.0 Android Profiler分析器(cpu memory network 分析器)<br>[https://blog.csdn.net/niubitianping/article/details/72617864](https://blog.csdn.net/niubitianping/article/details/72617864 "AndroidStudio3.0 Android Profiler分析器(cpu memory network 分析器)")
4. Android studio 3.x集成butterknife 8.8.1 集成 使用 及集成时错误解决<BR>[https://blog.csdn.net/xuwb123xuwb/article/details/80229798](https://blog.csdn.net/xuwb123xuwb/article/details/80229798 "Android studio 3.x集成butterknife 8.8.1 集成 使用 及集成时错误解决")

#我的总结
1. 支持java8,可以移除jackOptions


		android {
		    ...
		    defaultConfig {
		        ...
		        // Remove this block.
		        jackOptions {
		            enabled true
		            ...
		        }
		    }
		}

2. buildToolsVersion配置可移除<br>
Android Plugin For Gradle 3.0.0 默认自动添加插件所需要用到的最小版本的编译工具。所以，我们不需要再手动在 build.gradle 添加一行 buildToolsVersion 属性的代码。对于旧的项目，可以去掉这行配置，比如：

		android {
		    compileSdkVersion 26
		    // remote buildToolsVersion
		    buildToolsVersion "25.0.2"
		    ...
		}


3. 之前项目中配置了第三方APT插件导致的异常<br>
新版本AS3.0中自带了APT处理插件,和之前配置的第三方的APT插件,所有它们冲突了~,那么移除则异常KO;

		移除步骤：
		1、在项目级别的build.gradle也就是最外层的build.gradle文件中的dependencies节点中,移除
			classpath 'com.neenbedankt.gradle.plugins:android-apt:1.8'	

		2、在应用级别的build.gradle的顶部移除
			apply plugin: 'android-apt'

		3、在应用级别的build.gradle的dependencies节点中,替换所有用apt开头的引依赖为annotationProcessor例如
			//替换之前
			apt "com.jakewharton:butterknife-compiler:$rootProject.ext.globalButterKnifeAptVersion"
			//替换之后
			annotationProcessor "com.jakewharton:butterknife-compiler:$rootProject.ext.globalButterKnifeAptVersion"

4. distributionUrl

		Plugin 3.0.0+ 需要配置 Gradle 的最小版本是 4.1，我们可以通过 File -> Project Structure 
		-> Project 的方式设置 Android Plugin 的版本，或者修改 gradle.properties 文件的内容，添加 distributionUrl 属性：

		distributionUrl=https\://services.gradle.org/distributions/gradle-4.1-all.zip
5. Google’s Maven repository<br>
新版 Android Studio 工具默认使用 Google’s Maven Repository 用于下载依赖 Android Support Library，替代了 Android SDK Manager 的本地依赖方式。所以，需要在工程根目录下的 build.gradle 文件中添加 google() 一行代码：

		
		allprojects {
		    repositories {
		        google()
		    }
		}

6. BuildTool最低版本异常<br>
		
		AS3.0最低支持的BuildTools插件是26.0.2版本
		


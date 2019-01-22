
#keyStore和jks文件的转换及区别
1. keyStore 和.jks的签名的区别<br>[https://blog.csdn.net/wolfking0608/article/details/78888249](https://blog.csdn.net/wolfking0608/article/details/78888249 "keyStore 和.jks的签名的区别")
2. Android Studio生成keystore签名文件<br>[https://blog.csdn.net/anyanyan07/article/details/53493785](https://blog.csdn.net/anyanyan07/article/details/53493785 "Android Studio生成keystore签名文件")
3. Android jks文件签名转换keystore文件签名<br>[https://blog.csdn.net/ONLYMETAGAIN/article/details/78781316](https://blog.csdn.net/ONLYMETAGAIN/article/details/78781316)
4. Android之Keystore文件签名详解<br>[https://notes.doublemine.me/2016-07-03-Android%E4%B9%8BKeystore%E6%96%87%E4%BB%B6%E7%AD%BE%E5%90%8D.html](https://notes.doublemine.me/2016-07-03-Android%E4%B9%8BKeystore%E6%96%87%E4%BB%B6%E7%AD%BE%E5%90%8D.html "Android之Keystore文件签名详解")

#keytool 的命令使用
1. android 命令创建签名文件keystore、修改已有keystore的别名密码、密钥库密码，重新签名APK<br>[https://blog.csdn.net/msn465780/article/details/78111126](https://blog.csdn.net/msn465780/article/details/78111126 "android 命令创建签名文件keystore、修改已有keystore的别名密码、密钥库密码，重新签名APK")
2. 常用的Java Keytool Keystore命令<br>[https://www.chinassl.net/ssltools/keytool-commands.html](https://www.chinassl.net/ssltools/keytool-commands.html "常用的Java Keytool Keystore命令")

#Android的APK Signature Scheme v2签名
1. Android的APK Signature Scheme v2签名及一款基于Java环境的校验工具介绍<br>[http://blog.bihe0832.com/android-v2-signature.html](http://blog.bihe0832.com/android-v2-signature.html "Android的APK Signature Scheme v2签名及一款基于Java环境的校验工具介绍")

# Android Studio 自动签名
1. Android Studio 自动签名构建<br>[https://www.jianshu.com/p/1a248853f383](https://www.jianshu.com/p/1a248853f383 "Android Studio 自动签名")
2. Android手动和自动签名<br>[https://www.jianshu.com/p/7a84953d6a5d](https://www.jianshu.com/p/7a84953d6a5d "Android手动和自动签名")



#下面比较.keyStore和.jks文件的直接转换区别
默认使用的签名文件：

		在开发调试（即手机插上电脑直接运行程序）,默认使用的签名文件是debug.keystory
		1.Debug keystore位置 C:\Users<用户名>.Android\debug.keystore
		2.Debug keystore的密码是：android
		3.Debug keystore的别名：androiddebugkey


所使用的命令：<br>
一、手动生成签名文件

		keytool -genkey -keystore android.keystore  -alias bieming -keyalg RSA -validity 10000
		
		android.keystore：指的是想要生成的签名文件名字（后缀可以使.jks或.keystore）
		bieming ：指的是签名文件的别名
		10000：期限，单位是天
一、查看签名文件的信息

		keytool -v -list -keystore .jks或.keystore文件所在的路径



			
###分理出来的Android包下的debug.keystore签名文件，密码是android
		
		密钥库类型: JKS
		密钥库提供方: SUN
		
		您的密钥库包含 1 个条目
		
		别名: androiddebugkey
		创建日期: 2015-10-30
		条目类型: PrivateKeyEntry
		证书链长度: 1
		证书[1]:
		所有者: CN=Android Debug, O=Android, C=US
		发布者: CN=Android Debug, O=Android, C=US
		序列号: 4c0dbe29
		有效期开始日期: Fri Oct 30 04:15:05 CST 2015, 截止日期: Sun Oct 22 04:15:05 CST
		2045
		证书指纹:
		         MD5: 26:F9:D6:61:3D:7A:B4:CD:81:E6:B8:E3:9B:6A:91:9D
		         SHA1: 89:2B:2B:46:90:7B:26:D3:E7:29:82:9A:FC:E1:54:46:B9:94:74:50
		         SHA256: 50:C5:32:F9:B3:8C:3F:71:09:84:A4:A4:44:54:3A:A4:85:22:36:9C:AA:
		76:83:66:AE:E6:7B:ED:B5:87:13:76
		         签名算法名称: SHA256withRSA
		         版本: 3
		
		扩展:
		
		#1: ObjectId: 2.5.29.14 Criticality=false
		SubjectKeyIdentifier [
		KeyIdentifier [
		0000: D2 92 74 10 3A 9A 2C 23   B4 D3 3F DD 87 0E C1 AC  ..t.:.,#..?.....
		0010: AE F1 46 34                                        ..F4
		]
		]
		
###Android默认的debug.keystore签名

		密钥库类型: JKS
		密钥库提供方: SUN
		
		您的密钥库包含 1 个条目
		
		别名: androiddebugkey
		创建日期: 2018-6-2
		条目类型: PrivateKeyEntry
		证书链长度: 1
		证书[1]:
		所有者: C=US, O=Android, CN=Android Debug
		发布者: C=US, O=Android, CN=Android Debug
		序列号: 1
		有效期开始日期: Sat Jun 02 11:56:15 CST 2018, 截止日期: Mon May 25 11:56:15 CST
		2048
		证书指纹:
		         MD5: 39:2F:81:48:33:E6:D5:D8:EC:55:4A:79:52:1D:4D:63
		         SHA1: 39:41:F7:7C:07:CD:7E:1C:C1:3D:C0:B0:23:91:D4:CD:CE:D1:E7:90
		         SHA256: 10:6D:7F:91:19:43:0C:AC:30:03:3A:96:5A:70:53:B8:12:F9:9B:07:2F:
		77:42:8D:7C:63:25:8C:B3:D8:F2:36
		         签名算法名称: SHA1withRSA
		         版本: 1

		
###Android命令行手动生成.keystore的签名文件
		keytool -genkey -keystore android.keystore  -alias bieming -keyalg RSA -validity 10000
		
		android.keystore：指的是想要生成的签名文件名字
		bieming ：指的是签名文件的别名
		10000：期限，单位是天
		
		
		密钥库类型: JKS
		密钥库提供方: SUN
		
		您的密钥库包含 1 个条目
		
		别名: bieming
		创建日期: 2018-12-20
		条目类型: PrivateKeyEntry
		证书链长度: 1
		证书[1]:
		所有者: CN=e, OU=e, O=e, L=e, ST=e, C=e
		发布者: CN=e, OU=e, O=e, L=e, ST=e, C=e
		序列号: 39e50935
		有效期开始日期: Thu Dec 20 17:33:11 CST 2018, 截止日期: Mon May 07 17:33:11 CST
		2046
		证书指纹:
		         MD5: BE:A9:48:56:D1:09:A2:C8:0E:57:CF:19:75:F0:89:C9
		         SHA1: 60:2B:87:93:02:69:F3:4F:C1:C7:F7:44:2B:6A:A5:FF:CA:FF:97:AF
		         SHA256: 8F:C8:9D:5A:A5:8F:EE:3C:CB:46:67:EF:65:29:A4:C1:C9:7D:18:41:14:
		5D:22:93:E2:19:AA:4A:71:DC:BE:C9
		         签名算法名称: SHA256withRSA
		         版本: 3
		
		扩展:
		
		#1: ObjectId: 2.5.29.14 Criticality=false
		SubjectKeyIdentifier [
		KeyIdentifier [
		0000: 61 FC 4F 7F 38 82 51 52   58 90 B9 0C 20 F0 35 9F  a.O.8.QRX... .5.
		0010: 97 BA C4 4B                                        ...K
		]
		]
		
		
###把手动生成的.keystore签名文件转换成.jks的签名文件得到的信息
		可以看出，签名信息不变
	
		
		密钥库类型: JKS
		密钥库提供方: SUN
		
		您的密钥库包含 1 个条目
		
		别名: bieming
		创建日期: 2018-12-20
		条目类型: PrivateKeyEntry
		证书链长度: 1
		证书[1]:
		所有者: CN=e, OU=e, O=e, L=e, ST=e, C=e
		发布者: CN=e, OU=e, O=e, L=e, ST=e, C=e
		序列号: 39e50935
		有效期开始日期: Thu Dec 20 17:33:11 CST 2018, 截止日期: Mon May 07 17:33:11 CST
		2046
		证书指纹:
		         MD5: BE:A9:48:56:D1:09:A2:C8:0E:57:CF:19:75:F0:89:C9
		         SHA1: 60:2B:87:93:02:69:F3:4F:C1:C7:F7:44:2B:6A:A5:FF:CA:FF:97:AF
		         SHA256: 8F:C8:9D:5A:A5:8F:EE:3C:CB:46:67:EF:65:29:A4:C1:C9:7D:18:41:14:
		5D:22:93:E2:19:AA:4A:71:DC:BE:C9
		         签名算法名称: SHA256withRSA
		         版本: 3
		
		扩展:
		
		#1: ObjectId: 2.5.29.14 Criticality=false
		SubjectKeyIdentifier [
		KeyIdentifier [
		0000: 61 FC 4F 7F 38 82 51 52   58 90 B9 0C 20 F0 35 9F  a.O.8.QRX... .5.
		0010: 97 BA C4 4B                                        ...K
		]
		]
	
###Android命令行手动生成.jks的签名文件
		
		keytool -genkey -keystore android.jks  -alias bieming -keyalg RSA -validity 10000
		
		android.jks：指的是想要生成的签名文件名字
		bieming ：指的是签名文件的别名
		10000：期限，单位是天
		
		
		C:\>keytool -v -list -keystore android.jks
		输入密钥库口令:
		
		密钥库类型: JKS
		密钥库提供方: SUN
		
		您的密钥库包含 1 个条目
		
		别名: bieming
		创建日期: 2018-12-20
		条目类型: PrivateKeyEntry
		证书链长度: 1
		证书[1]:
		所有者: CN=e, OU=e, O=e, L=e, ST=e, C=e
		发布者: CN=e, OU=e, O=e, L=e, ST=e, C=e
		序列号: 3b9c343
		有效期开始日期: Thu Dec 20 17:39:45 CST 2018, 截止日期: Mon May 07 17:39:45 CST
		2046
		证书指纹:
		         MD5: 50:05:3B:07:CB:96:82:B5:59:DE:A0:E8:A2:31:A4:48
		         SHA1: CF:7B:22:1D:91:A4:D8:A8:F0:B2:63:29:04:40:B7:59:F9:D0:1C:D3
		         SHA256: D5:71:EA:DD:F4:BC:3B:08:53:04:61:82:B1:67:F3:5E:29:91:57:E6:38:
		6C:8E:45:31:EC:59:5E:80:47:DC:A7
		         签名算法名称: SHA256withRSA
		         版本: 3
		
		扩展:
		
		#1: ObjectId: 2.5.29.14 Criticality=false
		SubjectKeyIdentifier [
		KeyIdentifier [
		0000: D8 33 E2 48 6E CF E4 50   7F E0 24 14 D6 60 2C EB  .3.Hn..P..$..`,.
		0010: DE 28 B6 4F                                        .(.O
		]
		]
		
		
		
		
###把手动生成的.jks签名文件转换成.keystore的签名文件得到的信息

		可以看出，签名信息不变
		
		密钥库类型: JKS
		密钥库提供方: SUN
		
		您的密钥库包含 1 个条目
		
		别名: bieming
		创建日期: 2018-12-20
		条目类型: PrivateKeyEntry
		证书链长度: 1
		证书[1]:
		所有者: CN=e, OU=e, O=e, L=e, ST=e, C=e
		发布者: CN=e, OU=e, O=e, L=e, ST=e, C=e
		序列号: 3b9c343
		有效期开始日期: Thu Dec 20 17:39:45 CST 2018, 截止日期: Mon May 07 17:39:45 CST
		2046
		证书指纹:
		         MD5: 50:05:3B:07:CB:96:82:B5:59:DE:A0:E8:A2:31:A4:48
		         SHA1: CF:7B:22:1D:91:A4:D8:A8:F0:B2:63:29:04:40:B7:59:F9:D0:1C:D3
		         SHA256: D5:71:EA:DD:F4:BC:3B:08:53:04:61:82:B1:67:F3:5E:29:91:57:E6:38:
		6C:8E:45:31:EC:59:5E:80:47:DC:A7
		         签名算法名称: SHA256withRSA
		         版本: 3
		
		扩展:
		
		#1: ObjectId: 2.5.29.14 Criticality=false
		SubjectKeyIdentifier [
		KeyIdentifier [
		0000: D8 33 E2 48 6E CF E4 50   7F E0 24 14 D6 60 2C EB  .3.Hn..P..$..`,.
		0010: DE 28 B6 4F                                        .(.O
		]
		]


###Android Studio生成的.jks文件签名
		
		
		密钥库类型: JKS
		密钥库提供方: SUN
		
		您的密钥库包含 1 个条目
		
		别名: key0
		创建日期: 2018-12-20
		条目类型: PrivateKeyEntry
		证书链长度: 1
		证书[1]:
		所有者: CN=2, OU=3, O=3, L=3, ST=3, C=3
		发布者: CN=2, OU=3, O=3, L=3, ST=3, C=3
		序列号: eb05648
		有效期开始日期: Thu Dec 20 16:34:12 CST 2018, 截止日期: Mon Dec 14 16:34:12 CST
		2043
		证书指纹:
		         MD5: 61:65:AA:B6:6A:54:97:F3:4F:29:9E:23:ED:1A:01:73
		         SHA1: 92:59:9B:49:6C:1C:A4:94:3D:E3:7B:5E:1D:12:C8:F7:91:B1:55:3B
		         SHA256: 6F:BF:1C:68:BA:B9:DE:2D:52:CF:61:9E:EE:C1:2F:5A:0D:DF:45:8A:AE:
		12:99:18:58:90:25:9F:53:6C:2C:AB
		         签名算法名称: SHA256withRSA
		         版本: 3
		
		扩展:
		
		#1: ObjectId: 2.5.29.14 Criticality=false
		SubjectKeyIdentifier [
		KeyIdentifier [
		0000: E0 05 05 F2 4B 39 15 EC   C5 12 FD D1 56 5B 56 FF  ....K9......V[V.
		0010: 2C 34 47 1F                                        ,4G.
		]
		]
		
		
###Android Studio生成的.jks文件签名转换成.keystore的文件签名得到的信息

		可以看出，签名信息不变
		
		密钥库类型: JKS
		密钥库提供方: SUN
		
		您的密钥库包含 1 个条目
		
		别名: key0
		创建日期: 2018-12-20
		条目类型: PrivateKeyEntry
		证书链长度: 1
		证书[1]:
		所有者: CN=2, OU=3, O=3, L=3, ST=3, C=3
		发布者: CN=2, OU=3, O=3, L=3, ST=3, C=3
		序列号: eb05648
		有效期开始日期: Thu Dec 20 16:34:12 CST 2018, 截止日期: Mon Dec 14 16:34:12 CST
		2043
		证书指纹:
		         MD5: 61:65:AA:B6:6A:54:97:F3:4F:29:9E:23:ED:1A:01:73
		         SHA1: 92:59:9B:49:6C:1C:A4:94:3D:E3:7B:5E:1D:12:C8:F7:91:B1:55:3B
		         SHA256: 6F:BF:1C:68:BA:B9:DE:2D:52:CF:61:9E:EE:C1:2F:5A:0D:DF:45:8A:AE:
		12:99:18:58:90:25:9F:53:6C:2C:AB
		         签名算法名称: SHA256withRSA
		         版本: 3
		
		扩展:
		
		#1: ObjectId: 2.5.29.14 Criticality=false
		SubjectKeyIdentifier [
		KeyIdentifier [
		0000: E0 05 05 F2 4B 39 15 EC   C5 12 FD D1 56 5B 56 FF  ....K9......V[V.
		0010: 2C 34 47 1F                                        ,4G.
		]
		]











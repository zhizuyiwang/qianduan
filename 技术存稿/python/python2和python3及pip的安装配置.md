1. 在同一台电脑上同时安装Python2和Python3<br>[https://blog.csdn.net/u014285884/article/details/70239511](https://blog.csdn.net/u014285884/article/details/70239511 "在同一台电脑上同时安装Python2和Python3")
2. Windows同时安装Python2和Python3<br>[https://www.cnblogs.com/csjd/p/6337907.html](https://www.cnblogs.com/csjd/p/6337907.html "Windows同时安装Python2和Python3")

#遇到的问题
1. 遇到问题： "在cmd里输入pip2或是pip2.7" 出现 “Fatal error in launcher: Unable to create process using '"'” 
解决方法：force reinstall，具体命令如下：

		python2 -m pip install --upgrade pip --force-reinstall

	之后，再使用pip2命令，成功。
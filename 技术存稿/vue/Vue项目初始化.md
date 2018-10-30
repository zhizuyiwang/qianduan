#参考博客
1. 手把手教你使用vue-cli脚手架(图文解析)<br>[https://www.jb51.net/article/127766.htm](https://www.jb51.net/article/127766.htm "手把手教你使用vue-cli脚手架(图文解析)")
2. VUE初学者------------初始化一个vue项目<br>[https://www.cnblogs.com/huihuijiang/p/8252851.html](https://www.cnblogs.com/huihuijiang/p/8252851.html "VUE初学者------------初始化一个vue项目")
#总结
##一、详解vue-cli 脚手架项目中的package.json<br>
使用vue-cli脚手架新建的项目中，含有package.json。package.json是npm的配置文件，里面设定了脚本以及项目依赖的库。 npm run dev 这样的命令就写在package.json里。

	{ 
		 "name": "vue-manage", // 项目名称 
		 "version": "1.0.0", // 版本  
		 "description": "Reimbursement Manage", // 描述  
		 "author": "LXG", // 作者  
		 "private": true, //是否私人项目  
		 "scripts": { 
		  "dev": "node build/dev-server.js", // npm run dev 的 dev，使用node执行 build/dev-server.js 
		  "start": "node build/dev-server.js", // npm run start 跑的是同样的命令 
		  "build": "node build/build.js", // npm run build 跑的是 node build/build.js // 以下脚本为单元测试用到的脚本 
		  // 以下脚本为单元测试用到的脚本 
		  "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run", 
		  "e2e": "node test/e2e/runner.js", 
		  "test": "npm run unit && npm run e2e"
		 }, 
		 "dependencies": { // dependencies 设定的是项目里使用的依赖 
		  "vue": "^2.2.6", 
		  "vue-router": "^2.3.1", 
		  "element-ui": "1.3.1", 
		  "vue-datasource": "1.0.9", 
		  "axios": "^0.15.3", 
		  "vue-core-image-upload": "2.1.5", 
		  "mockjs": "^1.0.1-beta3", 
		  "babel-polyfill": "^6.23.0"
		 }, 
		 "devDependencies": { //devDependencies设定的是开发使用的依赖  
		  "autoprefixer": "^6.7.2", // 是用于给css3属性自动加属性前缀的 
		  "babel-core": "^6.22.1", // babel相关的都是用于处理es6语法的 
		  "babel-loader": "^6.2.10", 
		  "babel-plugin-transform-runtime": "^6.22.0", 
		  "babel-preset-env": "^1.3.2", 
		  "babel-preset-stage-2": "^6.22.0", 
		  "babel-register": "^6.22.0", 
		  "chalk": "^1.1.3", // chalk适用于格式化输出命令行信息的，比如run dev以后的start...  
		  "connect-history-api-fallback": "^1.3.0", 
		  "copy-webpack-plugin": "^4.0.1", 
		  "css-loader": "^0.28.0", // 所有的*-loader都是 webpack的扩展，webpack是把各种资源理解为一个模块，css-loader就是读取css模块的加载器 
		  "eslint": "^3.19.0", // eslint 相关是代码格式化检查工具，开启以后要严格遵照它规定的格式进行开发 (我一般把它关了，为了显示特意加上的) 
		  "eventsource-polyfill": "^0.9.6", 
		  "express": "^4.14.1", // express 用于启动 node http server的服务  
		  "extract-text-webpack-plugin": "^2.0.0", 
		  "file-loader": "^0.11.1", 
		  "friendly-errors-webpack-plugin": "^1.1.3", 
		  "html-webpack-plugin": "^2.28.0", // webpack 里载入和处理html的插件 
		  "http-proxy-middleware": "^0.17.3", // node server 的中间件工具 
		  "webpack-bundle-analyzer": "^2.2.1", 
		  "cross-env": "^4.0.0", // 设定环境变量的工具，NODE_ENV变量跟它有关 
		  "karma": "^1.4.1",  // karma相关的都是单元测试工具 
		  "karma-coverage": "^1.1.1", 
		  "karma-mocha": "^1.3.0", 
		  "karma-phantomjs-launcher": "^1.0.2", 
		  "karma-phantomjs-shim": "^1.4.0", 
		  "karma-sinon-chai": "^1.3.1", 
		  "karma-sourcemap-loader": "^0.3.7", 
		  "karma-spec-reporter": "0.0.30", 
		  "karma-webpack": "^2.0.2", 
		  "lolex": "^1.5.2", 
		  "mocha": "^3.2.0", 
		  "chai": "^3.5.0", 
		  "sinon": "^2.1.0", 
		  "sinon-chai": "^2.8.0", 
		  "inject-loader": "^3.0.0", 
		  "babel-plugin-istanbul": "^4.1.1", 
		  "phantomjs-prebuilt": "^2.1.14", 
		  "chromedriver": "^2.27.2", 
		  "cross-spawn": "^5.0.1", 
		  "nightwatch": "^0.9.12", 
		  "selenium-server": "^3.0.1", // 一个版本检查工具  
		  "semver": "^5.3.0", // selljs是在node里跑shell命令的工具，比如‘rm -rf'  
		  "shelljs": "^0.7.6", 
		  "opn": "^4.0.2", // 跨平台的开启文件或者网页的工具 
		  "optimize-css-assets-webpack-plugin": "^1.3.0", 
		  "ora": "^1.2.0", // 命令行里自动运行的信息提示  
		  "rimraf": "^2.6.0", // 跑shell命令 rm-rf 的工具  
		  "url-loader": "^0.5.8", // 配合webpack的加载器  
		  "vue-loader": "^11.3.4", // 配合webpack的加载器  
		  "vue-style-loader": "^2.0.5", // 配合webpack的加载器  
		  "vue-template-compiler": "^2.2.6", // vue-template-compiler，可能是配合离线版vue  
		  "webpack": "^2.3.3", // webpack相关的用于，把图片，*.vue, *.js, 这些组合成最终的项目，webpack-dev用于跑测试服务器  
		  "webpack-dev-middleware": "^1.10.0", 
		  "webpack-hot-middleware": "^2.18.0", 
		  "webpack-merge": "^4.1.0", 
		  "babel-preset-es2015": "^6.22.0", 
		  "function-bind": "^1.1.0", 
		  "webpack-bundle-analyzer": "^2.2.1"  
		 },  // 项目依赖的引擎版本  
		 "engines": { 
		  "node": ">= 4.0.0", 
		  "npm": ">= 3.0.0"
		 }, 
		 "browserslist": [ 
		  "> 1%", 
		  "last 2 versions", 
		  "not ie <= 8"
		 ] 
		}
	

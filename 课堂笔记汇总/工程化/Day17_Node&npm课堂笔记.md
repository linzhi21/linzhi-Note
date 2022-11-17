# Day17 Node&Npm 课堂笔记

## 回顾

### commonJS 模块规范

#### 模块中暴露数据

```js
// 1. 不暴露数据  引入模块会得到空对象

// 2. 给 moudule.exports 赋值， module.exports 的值就是暴露的数据
module.exports = 100;
module.exports = function() {};
module.exports = {属性1, 属性2};

// 3. 给 module.exports 添加属性
module.exports.属性名 = 值;
module.exports.属性名 = 值;

// 4. exports 的地址与 module.exports 一致，给 exports 添加属性，不能修改 exports 的引用
exports.属性名 = 值;
exports.属性名 = 值;
```

#### 引入模块并使用模块中暴露的数据

```js
const 变量 = require('模块地址')
```

```
1. 模块地址相对路径相对于 JS脚本文件所在的目录，不是命令行打开的目录
2. 自定义模块路径一定是 ./ 或者 ../ 开头的，否则的话会被认为是内置模块或第三方模块
3. 如果路径中没有扩展名（后缀），会依次查找 .js 、.json、目录
4. 模块文件的扩展名
   .js
   .json
   .node
   其他
5. 目录形式的模块
   package.json 中通过 main 属性指定入口文件
   如果没有 package.json 或者 没有指定入口文件以及指定的入口文件不存在，自动查找 index.js 作为入口文件
```

### ES 模块规范

#### 模块中暴露数据

**暴露单个数据 不指定变量的名字**

```js
export default 数据(直接来、变量、表达式);
```

**暴露多个数据 指定变量的名字**

```js
export const 变量1 = 值;
export const 变量2 = 值;
export const 变量3 = 值;
export function 函数名() {}
```

```js
const 变量1 = 值；
const 变量2 = 值；
const 变量3 = 值；
function 函数() {}

export {变量1,变量2，变量3，函数}
```

#### 引入模块并使用模块中暴露的数据

**如果模块使用的是 `export default` 暴露数据：**

```js
import 自定义的变量名 from '目录路径';
```

**如果模块使用 `export `暴露多个数据：**

```js
import {变量1，变量2，变量3，函数} from '目录路径';  // 变量名必须与模块中的变量名一致
import {变量1，变量2 as 别名，变量3} from '目录路径';  // 变量名必须与模块中的变量名一致

// 整体加载 所有暴露的数据会整体加载到一个对象里面,作为对象的属性方法
import  * as 别名 from '模块路径';
```







## 1 关于模块化规范

```
1. CommonJS 规范
	CommonJS 是一种模块化规范，最初提出来是在浏览器以外的地方使用，并且当时命名为 ServerJS，后来为了体现它的广泛性，更名为 CommonJS，也可以简称为 CJS
	Node 是 CommonJS 在服务端一个具有代表性的实现
	Browserify 是 CommonJS 在浏览器端的一种实现
	webpack 具备对 CommonJS 的支持与转换
	
2. AMD 规范
	AMD 主要是应用于浏览器的一种模块化规范,AMD 是 Asynchronous Module Definition（异步模块定义）的缩写，它采用的是异步加载模块，事实上 AMD 的规范早于 CommonJS，但是现在 CommonJS 仍被使用，但 AMD 已经很少用了。
	实现 AMD 规范的库主要是 require.js 和 curl.js

3. CMD 规范
	CMD 也是应用于浏览器的一种模块化规范，CMD 是 Common Module Definition（通用模块定义）的缩写，他也是采用了异步加载模块，但是它将 CommonJS 的优点吸收了过来，这个目前也很少使用了。
	SeaJS 实现了 CMD 规范

4. ES Module 规范
   ES Module 规范是 ES 提出的，是官方的模块化规范。
```



## 2 异常处理语法

### 2.1 throw 主动抛出错误

```js
throw 100;
throw '字符串';
throw new Error('错误信息');
```

```
抛出的错误与程序中的运行错误是一样，都可以终止后面代码的执行，也都可以被 try catch 捕获
```

### 2.2 try catch 结构

```js
try {
 	// 各种语句   
} catch (error) {
    console.log('捕获到错误', error);
}
```

```
1. try 里面的语句一旦出现错误，不会将错误抛出，而是被 catch 捕获，由程序员自己决定如何处理该错误
2. try 里面的错误不影响 try 外面语句的执行
3. try ... catch 结构适合于容易出现异常的操作， 不适用于语法错误。
```





## 3 NPM

### 3.1 NPM 的作用

通过 NPM 可以对 Node 的工具包进行搜索、下载、安装、删除、上传。借助别人写好的包，可以让我们的开发更加方便。

常见的使用场景有以下 3 种：

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。 
- 允许用户将自己编写的包上传到NPM服务器供别人使用。

### 3.2 NPM 操作

```bash
# 查看npm 版本
npm -v

##############################################################
# 初始化 初始化会创建 package.json
npm init


##############################################################
# 安装包	包的信息会添加到 package.json 的依赖信息中
npm install 包名
npm i 包名

# 安装包  包的信息会添加到 package.json 的开发依赖信息中
npm install 包名 --save-dev
npm install 包名 -D
npm i 包名 --save-dev
npm i 包名 -D

# 安装指定版本的包
npm install 包名@版本号
npm i 包名@版本号

# 全局安装
npm install -g 包名
npm i -g 包名


##############################################################
# 移除包
npm uninstall 包名
npm uninstall -g 包名
npm remove 包名
npm remove -g 包名


##############################################################
# 显示已经安装的包
npm list	
npm list -g
npm list -g --depth 0		# 只显示一层，包依赖的包就不再显示


##############################################################
# 显示那些包需要更新
npm outdated
npm outdated -g
# 更新包
npm update 包名			# 本地更新包，会受到 package.json 中 dependices 所设置的版本号的约束 
npm update -g 包名		# 全局更新包，直接更新到最新版


##############################################################
# 强制清除缓存 （使用频率不高）
npm cache clean --force


##############################################################
# 安装依赖 根据 package.json 中的配置安装依赖
npm install
npm i

# 只安装项目的依赖， 开发依赖不安装
npm install --production
npm i --production
```

### 3.3 package.json

```json
{
  "name": "01-project",		// 包名
  "version": "1.0.0",		// 版本
  "description": "",		// 描述信息
  "main": "index.js",	    // 入口文件
  "scripts": {				// 可执行的名
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",				// 作者信息
  "license": "ISC",			// 开源许可
  "dependencies": {			// 依赖信息
     "bootstrap": "^5.1.3",
     "jquery": "^3.6.0"
  }，
  "devDependencies": {		// 开发中的依赖
     "babel": "^6.23.0"
  }
}
```

**版本号信息：**

- "^3.0.0" ：锁定大版本，以后安装包的时候，保证包是3.x.x版本，x默认取最新的。
- "~3.1.x" ：锁定小版本，以后安装包的时候，保证包是3.1.x版本，x默认取最新的。
- "3.1.1" ：锁定完整版本，以后安装包的时候，保证包必须是3.1.1版本。

**package-lock.json 文件**

该文件记录包具体的版本信息，用于锁定版本。



### 3.3 远程仓库与 npm 一起使用 的工作流程

```
前提：
	仓库中将 node_modules 忽略，只同步 package.json

上班第一天：
	1. 从远程仓库克隆到本地
	2. 进入项目目录，运行 npm install 安装依赖
	3. 进行后续开发
	4. 下班之前推送
	
以后上班每一天：	
	1. 从远程仓库拉取
	2. 进入项目目录，运行 npm install 安装依赖 （同事可能会安装了新的依赖）
	3. 进行后续开发
	4. 下班之前推送
```



### 3.4 如何在项目中使用第三方模块（重要）

#### ① 模块的查找过程

```js
require('模块名')
```

```
1. 先确定模块名路径是不是以 ./ 或者 ../ 开头，如果不是就认为是内置模块或者第三方模块
2. 再确定有没有该内置模块，如果有该内置模块直接加载；如果没有该内置模块，判定为第三方模块
3. 第三方模块加载过程：
   ① 先从脚本本就所在的目录中查找有没有 node_modules 目录，如果有进入查找模块
   ② 如果脚本同级目录没有 node_modules 目录，去上级目录查找 node_modules 目录，如果有进入查找模块
   ③ 以此类推，一直查找到 根目录
```

#### ② 在后端项目中使用

```
后端项目的代码运行在 node
安装了第三方模块之后，直接在脚本中引入模块
```

#### ③ 在前端项目中使用

**非工程化开发的前端项目：**

```
不需要 npm！
```

**工程化开发的前端项目：**

```
1. 前端项目的代码需要运行在浏览器上
2. 开发的时候，需要写很多浏览器本身不支持的代码（如 模块），开发完成后编译成浏览器支持的代码，再在浏览器上运行
3. 前端项目本身不需要node，但是开发过程中用到的各种工具需要node的支持，这些工具需要 npm 进行管理
```



 







### 3.4 cnpm

使用国内的镜像作为 npm 源

方式一：全局安装 cnpm 命令，安装完成后使用 `cnpm ` 命令代替 `npm` 命令。

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

方式二：通过添加 `npm` 参数 `alias` 一个新命令，安装完成后使用 `cnpm ` 命令代替 `npm` 命令。

```bash
alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=HOME/.cnpmrc"
```

方式三：把官方镜像地址修改为淘宝镜像地址，修改后继续使用 `npm 命令`。

```bash
# 设置为淘宝镜像
npm config set registry https://registry.npm.taobao.org

# 如果想改回官方镜像   
npm config set registry https://registry.npmjs.org/
```

> 修改了镜像地址之后，直接用 `npm` 命令就可以了。

### 3.5 yarn

yarn 命令可以代替 npm

yarn 相比于 npm 有几个特点：

- 本地缓存。安装过的包下次不会进行远程安装
- 并行下载。一次下载多个包，而 npm 是串行下载
- 精准的版本控制。保证每次安装跟上次都是一样的

### 3.6 cyarn

yarn 也可以使用淘宝镜像

```bash
npm install cyarn -g --registry "https://registry.npm.taobao.org"
```



## 4 发布 npm 包

### 4.1 发布步骤

**第一步 本地开发好包内容**

1. `npm init` 进行初始化
2. 开发包的内容， `module.exports` 暴露数据

**第二步 注册账号并在命令行登录**

1.  npmjs.org 官网注册账号
2.  命令行登录账户  `npm login`

> 如果修改过官方的镜像地址，得改回来  `npm config set registry https://registry.npmjs.org/`

**第三步 发布**

1. 发布 `npm publish`

2. 如果要更新，先修改 package.json 中的版本号，再发布

### 4.2 发布全局命令

第一步 创建命令行执行的脚步文件，第一行代码写 `#!/usr/bin/env node`。

```js
#!/usr/bin/env node
/*
	这里是运行命令时候要执行的代码
*/
```

第二步 在 `package.json` 文件中配置 `bin` 字段

```js
"bin": {
     "命令名": "刚才创建的脚步文件路径"
}
```














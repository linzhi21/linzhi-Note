# Day18 Node 课堂笔记

## 回顾

#### ① npm 操作

```bash
# 初始化
npm init

# 安装包
npm install 包名		 	# 默认包记录到依赖
npm install 包名 -D		# 将包记录到开发依赖

# 全局安装 主要安装命令行工具
npm install -g 包名

# 移除包
npm uninstall 包名
npm uninstall -g 包名

# 更新包
npm update 包名
npm update -g 包名

# 安装依赖
npm install
npm install --production
```

#### ② npm 项目开发流程

```
1. node_modules 被 git 忽略
2. git 克隆了远程仓库项目之后， 需要运行 npm install
3. 每天从远程仓库拉取到更新之后， 需要运行 npm install
```

#### ③ 项目中使用第三方模块

```
1. 模块的查找步骤
   模块名不以 ./ 或 ../ 开头，判定为内置模块或第三方模块
   先找内置模块，如果找不到，判定为第三方模块
   从当前脚本同目录的 node_modules 中查找，如果找不到去上级目录的 node_modules 中查找，依次类型
   
2. 后端项目
3. 前端项目
```





## 1 包管理工具

### 1.1 cnpm

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

### 1.2 yarn

yarn 命令可以代替 npm， 安装：

```bash
npm install yarn -g
```

yarn 相比于 npm 有几个特点：

- 本地缓存。安装过的包下次不会进行远程安装
- 并行下载。一次下载多个包，而 npm 是串行下载
- 精准的版本控制。保证每次安装跟上次都是一样的

```bash
yarn --version

yarn init  # 初始化包 生成package.json   

yarn add 包名 # 安装包

yarn add 包名 --dev    # 相当于 npm 中的--save-dev
yarn add 包名 -D

yarn global add  包名 #全局安装  全局安装路径 C:\Users\你的用户名\AppData\Local\Yarn\bin

yarn remove 包名 # 移除包

yarn # 安装 package.json中的所有依赖 

yarn config set registry https://registry.npm.taobao.org  # yarn 修改镜像地址
```

### 1.3 cyarn

yarn 也可以使用淘宝镜像

```bash
npm install cyarn -g --registry "https://registry.npm.taobao.org"
```



### 1.4 同时暴露 CommonJS 和 ES6 模块的模块

```
1. 创建两个入口文件，一个暴露 CommonJS 规范的数据，以暴露 ES6 模块规范的数据
2. package.json 中 main 属性设置 commonJS 规范的入口文件， export 属性设置 ES6 模块规范的入口文件
3. 在使用该模块的时候，即可以使用 require 也可以使用 import
```





## 2 发布 npm 包

### 2.1 发布步骤

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

### 2.2 发布全局命令

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



## 3 网络协议简述

```
OSI 七层模型：
	应用层 会话层 表示层 传输层 网络层 数据链路层 物理层
	
TCP/IP 四层模型
	应用层	传输层 网络层 网络接口层
	
各层的网络协议：
	应用层： http、https、ssh、ftp、telnet、smtp、pop3 等等
	传输层： tcp、udp
	网络层： ip
	网络接口层： USB协议、网线接口协议 等等
	
	
IP 地址：
	IP 地址是IP 协议提供的一种统一的地址格式，它为互联网上的每一个网络和每一台主机分配一个地址。在一个网络中，每台主机的 IP 地址都是唯一的。
	

域名：
	域名是 IP 地址的映射
	
DNS 服务器：
	用来找出域名对应的 IP 地址
	
端口号
	每个应用程序都有一个端口号，通过端口号可以确定计算机上的某个应用程序
	0-1023 是公认端口号，即已经公认定义或为将要公认定义的软件保留的。
	1024-65535 是并没有公认定义的端口号，用户可以自己定义这些端口的作用。

```



## 4 HTTP 协议

### 4.1 请求报文

```
请求行
GET https://www.baidu.com/ HTTP/1.1		

请求头
Host: www.baidu.com
Connection: keep-alive
Cache-Control: max-age=0
sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.62 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,en-US;q=0.6

空行

请求体
```

#### ① 请求行

**请求方法：** GET、POST ...

**URL** ： 统一资源定位符

**协议版本： ** HTTP/1.1	

#### ② 请求头

请求头格式，`请求头键名：值`。

#### ③ 空行

隔开请求头和请求体

#### ④ 请求体

客户端向服务器发送的数据，可以放在请求体中

### 4.2 响应报文

```
响应行
HTTP/1.1 200 OK

响应头
Bdpagetype: 1
Bdqid: 0xc7ed2b9a000154e9
Connection: keep-alive
Content-Type: text/html; charset=utf-8
Date: Sat, 28 May 2022 07:05:11 GMT
Server: BWS/1.1
Set-Cookie: BDSVRTM=1; path=/
Set-Cookie: BD_HOME=1; path=/
Set-Cookie: H_PS_PSSID=36460_36454_31253_36453_35914_36166_36487_36055_36346_26350_36301_36468_36311; path=/; domain=.baidu.com
Strict-Transport-Security: max-age=172800
Traceid: 1653721511063568641014406218723453129961
X-Frame-Options: sameorigin
X-Ua-Compatible: IE=Edge,chrome=1
Content-Length: 358160

空行

响应体
<!DOCTYPE html><!--STATUS OK--><html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta content="always" name="referrer"><meta name="theme-color" content="#ffffff">
...

```

#### ① 响应行

**协议版本：** HTTP/1.1

**响应状态码：** 用数字表示响应状态。

**响应状态码描述：** 用字符串表示响应状态。

#### ② 响应头

响应头格式，`请求头键名：值`。

#### ③ 空行

分隔响应头和响应体

#### ④  响应体

服务器返回给客户端的内容

### 4.3 请求方式 GET 和 POST 的区别：

GET 和 POST 是最常见的两种请求方式，两者具有如下区别：

- GET 主要用来获取数据, POST 主要用来提交数据。通过浏览器访问网页用的就是 GET 请求。
- GET 如果带参数，将参数放到 URL 之后, POST 带参数请求是将参数放到请求体中。GET 方式没有请求体
- POST 请求相对 GET 安全一些, 因为GET请求在浏览器中参数会暴露在地址栏。
- GET 请求大小有限制, 一般为 `2k,` 而 POST 请求则没有大小限制。

### 4.4 URL

统一资源定位系统（uniform resource locator;URL）是因特网的万维网服务程序上用于指定信息位置的表示方法。

```
http://www.baidu.com:8080/home/msg/data/personalcontent?num=8&indextype=manht#logo
```

完整 URL 的组成部分：

- 协议 ，如 https、http。
- 主机名，一般使用 IP 地址或域名。
- 端口号 ，HTTP 的端口号为 80，HTTPS 的为 443
- 路径，上面 URL 中的路径部分为： `/home/msg/data/personalcontent`。
- 查询字符串，上面 URL 中的路径部分为：`num=8&indextype=manht`。
- 锚点，上面 URL 中的路径部分为：`#logo`

### 4.5 HTTP 响应状态码

状态码由三位数字组成，第一位数字表示响应的类型，常用的状态码有五大类如下所示：

- `1xx`：指示信息--表示请求已接收，继续处理。
- `2xx`：成功--表示请求已被成功接收、理解、接受。
- `3xx`：重定向--要完成请求必须进行更进一步的操作。
- `4xx`：客户端错误--请求有语法错误或请求无法实现。
- `5xx`：服务器端错误--服务器未能实现合法的请求。

常见状态代码、状态描述的说明如下。

- 200 OK：客户端请求成功。

- 400 Bad Request：客户端请求有语法错误，不能被服务器所理解。

- 401 Unauthorized：请求未经授权

- 403 Forbidden：服务器收到请求，但是拒绝提供服务。

- 404 Not Found：请求资源不存在，举个例子：输入了错误的URL。

- 500 Internal Server Error：服务器发生不可预期的错误。

- 503 Server Unavailable：服务器当前不能处理客户端的请求，一段时间后可能恢复正常

  



## 5 使用 node 创建 http 服务

### 5.1 创建服务

写一个程序，该程序可以接收到客户端浏览器的请求，并能为客户端浏览器做出响应； 该程序是后端程序，运行在服务器上，需要 node 的支持。

```js
// 引入http模块
const http = require('http');

// 创建 http 服务（程序）
// http.createServer 需要一个回调函数作为参数，当有客户端像该服务请求的时候，回调函数会触发
// 回调函数被调用的时候，会接收到两个参数，分别是请求对象和响应对象
const server = http.createServer((request, response) => {
    console.log('啊，有人在向我请求！');
    // 设置响应内容并且结束响应
    response.end('Welcome to Shanghai');
});


// 开启服务 需要设置端口号和回调函数
// 服务成功开启之后，回调函数会被触发
server.listen(8090, () => {
    console.log('http 启动成功！ 端口号 8090');
});
```

```
1. http 对象， 导入的 http 内置模块
2. http.Server 对象， http.createServer() 的返回值
3. http.clientRequest 对象， http.createServer() 的回调函数的第一个参数
4. http.serverResponse 对象， http.createServer() 的回调函数的第二个参数
```

**注意：如果启动服务的时候，报错提示端口被占用，可以采用下面两种方案来解决：**

1）给我们的程序换个端口

2）把占用端口的其他程序关闭

- windows cmd 命令行中运行命令 `netstat -ano | findstr 端口号` 来获取占用端口的程序的进程ID
- 资源管理器->详细信息，根据进程ID找到程序，右键选择结束任务。

### 5.2 获取请求报文信息

#### 获取请求行的信息

```js
request.method		// 请求方法
request.url			// 获取URL
request.httpVersion	// 获取协议版本
```

#### 获取请求头信息

```js
request.headers				// 返回所有请求头组成的对象
request.headers.请求名称	  // 获取指定的请求头信息
```





### 5.3 设置响应报文














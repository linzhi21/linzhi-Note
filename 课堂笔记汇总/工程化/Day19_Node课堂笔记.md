# Day19 Node 课堂笔记

## 回顾

```
1. 相关概念
   IP 地址： 计算机在网络中的唯一标识
   域名： 域名是IP地址的映射，域名与IP地址一一对应； 
   DNS服务器： 负责找出域名对应的 IP
   端口： 端口是运行在电脑上的某个程序的标识
   
2. 浏览器中输入域名之后按回车，发生什么
   ① 将域名发送给 DNS 服务器，返回该域名对应的 IP
   ② 根据 IP 像服务器发起 http 请求，需要指定端口，默认 80
   ③ 服务器上运行 http 服务， 该 http 服务会接收到请求
   ④ 服务器上的 http 服务器，会根据接收到请求进行各种处理，最后向客户端做出响应
   ⑤ 客户端浏览器接收到服务器的响应报文，解析内容根据响应体，显示在界面中
   
3. http 的请求报文
   请求行： 协议的版本、URL、请求方法（GET、POST）
   请求头： 键值对信息
   空行： 分隔请求头和请求体
   请求体：发送给服务器的数据，GET方式没有请求体，POST方式可以有请求体

4. http 的响应文件
   响应行： 协议版本、响应状态码、响应状态描述
   响应头： 键值对信息， 如 Content-type 描述响应内容的类型
   空行： 分隔响应头和响应体
   响应体： 发送给客户端浏览器的数据
   
5. 请求方法 GET 和 POST 的区别
   ① GET 请求方式主要目的是从服务器获取数据， POST 请求方式主要目的向服务器发送数据
   ② GET 请求方式没有请求体，POST 请求方式有请求体
   ③ GET 请求方式的请求报文有大小限制，POST 请求方式的请求报文没有大小显示
   ④ GET 请求方式如果要顺便向服务器发送参数，会暴露在URL中，安全性不如 POST
  
6. 响应状态码和响应描述
   200	OK
   304  重定向
   403  没有访问权限
   404  要访问的资源不存在
   500  服务器错误
   503  服务器压力过载，宕机
```





## 1 http 服务

### 1.1 创建服务

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

### 1.2 获取请求报文信息

#### 获取请求行的信息

```js
request.httpVersion;		// 获取 http 版本
request.url;				// 获取请求的 url 地址
request.method;				// 获取请求方式（请求方法）
```

#### 获取请求头信息

```js
request.headers;			// 返回对象，包含请求报文中所有的请求头信息
request.headers.请求头名字；
```

#### 获取客户端 IP 地址

```js
request.socket.remoteAddress
```

#### 获取 URL 中的查询字符串

```js
const url = requeire('url');
url.parse(request.url, true).query;  // 返回一个对象
```

```
不论是 GET 请求是 POST 请求,URL 中都可以有查询字符串。
```

#### 获取请求体信息

```js
// request 本质上是一个可读流对象

// 定义变量 将请求体中读取的内容拼接到该变量
let reqBody = '';

// 分次从请求体中读取数据   
req.on('data', chunk => {
    reqBody += chunk;
});

// 请求体内容读取结束
req.on('end', () => {
   	reqBody;  					 // 查询字符串
    querystring.parse(reqBody);   // 解析为对象
});
```

```
GET 请求方式没有请求体，POST 请求方式有请求体
```

### 1.3 设置响应报文

#### 设置响应行

```js
response.statusCode = 200;		// 设置响应状态码
response.statusMessage = 'OK';	// 设置响应状态描述
```

#### 设置响应头

```js
response.setHeader('响应头名字'， '响应头内容')
```

```js
// 同时设置 响应状态码、设置响应状态描述、响应头
response.writeHead(响应状态码, '响应状态描述', {
    '响应头名字' ：'响应头内容',
    '响应头名字' ：'响应头内容',
    '响应头名字' ：'响应头内容'
    ...
})
```

#### 设置响应体

```js
// resposne 本质上是一个可写流对象 可以通过 write 将内容写入流
response.write('内容');
response.write('内容');
response.write('内容');
response.write('内容');
```

#### 结束响应

```js
// 只用来结束响应
resposne.end();

// 设置响应体并结束响应
response.end('响应体内容');
```





## 2 http 服务案例

```
1. 根据路径不同做出不同响应(路由)
2. 响应静态文件
3. 根据请求方式不同做出不同的响应
```


















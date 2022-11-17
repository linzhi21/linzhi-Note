## Day28 Axios 课堂笔记

## 1 async 与 await

`async`和`await`关键字让我们可以用一种更简洁的方式写出基于 `Promise` 的异步行为，而无需刻意地链式调用。

### 1.1 async 函数

#### ① 定义一个 async 函数

在函数声明语句的前面加上`async`关键字，就变成了 async 函数。

```js
// 1 直接定义
async function fn01(){}
// 2 将匿名的 async 函数赋值
var fn02 = async function() {};
// 3 箭头函数
var fn03 = async () => {};
// 4 对象中的方法
var obj = {
    m1: async function(){},
    m2: async () => {},
    async m3() {}
};
// 5 回调函数
[].map(async () => {});
// 6 立即执行函数
(async function(){})();
```

#### ② async 函数的返回值

async 函数的返回值是一个 Promise 实例，Promise 实例的结果由 async 函数的 `return` 决定：

```
1. 函数体如果没有返回值，async 函数返回一个状态为 resolved 的 Promise 实例，result 是 undefined。
2. 函数体如果返回的是一个非 Promise 类型的数据，async 函数返回的一个状态为 resolved 的 Promise 实例，result 是函数内返回的值。
3. 函数体如果返回的是一个 Promise 对象，该 Promise 对象就是 async 函数的返回值。
4. 函数体如果抛出错误，async 函数返回一个状态为 rejected 的 Promise 实例，result 是抛出的错误。
```

### 1.2 await 表达式

#### ① 关于 await 表达式

```js
async 函数名（）{
    await 表达式；
    await 表达式；
    await 表达式；
}
```

```
1. await 关键字与右侧的表达式共同组成一个 await 表达式
2. await 表达式必须写在 async 函数的中； async 函数中可以有 0 个或多个 await 表达式。
3. await 表达式可以取到 Promise 对象的 result，必须等到 Promise 实例的状态发生变化，await 表达式才能取到值。
```

#### ② 关于 await 表达式的值

await 表达式的值由 await 关键字右侧的表达式决定：

```
1. 一般右侧会是 Promise 对象（或能得到 Promise 对象的表达式），await 表达式的值就是该 Promise 对象的 Result。
2. 如果右侧是个其他类型的数据（非 Promise 类型），await 表达式的值就是这个数据。
3. 如果右侧是一个 thenable 对象（即定义`then`方法的对象），那么会将其等同于 Promise 对象。
```

#### ③ await 处理 rejected 状态的 Promise 对象

如果 await 右侧是个状态为 rejected 的 Promise 对象，await 默认不会处理，会报错。我们建议将 await 表达式放在`try...catch`结构里面。

```js
async function f() {
  try {
    await Promise.reject('出错了');
  } catch(e) {
  }
}
```

#### ④ 总结：

async/await 可以直接拿到 Promise 的结果，可以代替 `then()` 方法和回调函数。可以取代链式调用，是回调地狱的终极解决方案。

缺点是状态为 rejected 的 Promise 实例，会抛出异常，所以需要写在 `try...catch`结构中防止出错。

### 1.3 async 与 await 实现链式调用

```js
(async function(){
    try {
        let data1 = await readFile('../content1.txt');
        let data2 = await readFile('../content2.txt');
        let data3 = await readFile('../content3.txt');
        console.log(data1, data2, data3)
    } catch (err) {
        console.log(err);
    }
})();
```



## 2 Fetch

Fetch 被设计用来取代 XMLHttpRequest，它提供了许多与 XMLHttpRequest 相同的功能，但被设计成更具可扩展性和高效性。

### 2.1 fetch 方法返回一个 Promise 对象

```js
fetch('http://example.com/movies.json')
.then(response => response.json())
.then(data => console.log(data));
```

### 2.2 fetch 设置请求配置项

```js
 fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
 });
```



## 3 API的分类 :后端的操作接口

### 3.1 非REST(restless) API：地址一般不会重复

```
增加：POST http://127.0.0.1/news/create
删除：GET 	http://127.0.0.1/news/delete?id=12121
修改：POST http://127.0.0.1/news/modify
查找：GET	http://127.0.0.1/news/list
```

> 1. 不同的 URL 路径对应不同的 CURD 操作。
> 2. 请求方式一般只有GET、POST。

### 3.2 REST(restful) API：URL路径不变，改变的只是请求方式

```
增加：POST http://127.0.0.1/news
删除：DELETE http://127.0.0.1/news
修改：PUT http://127.0.0.1/news
查找：GET http://127.0.0.1/news
```

> 1. 所有的操作使用相同的 URL 路径，由请求方式决定哪一种操作
> 2. 请求方式会用到 GET、POST、PUT、DELETE 等



## 4 使用json-server搭建 restful API

### 4.1 json-server是什么?

json-server 是用来快速搭建模拟的 REST API 的工具包，可以搭建站点服务并提供数据的操作。可以作为前端工程师的开发测试工具。

在线文档: https://github.com/typicode/json-server

### 4.2 使用json-server 

**1 安装 Node**
由于json-server需要通过Node对其进行启动，所以首先要安装Node。

**2 全局安装 json-server**

```shell
npm install json-server -g
```

**3 检查是否安装成功**

```shell
json-server -v
```

**4 准备一份JSON文件: 必须是一个对象，不能是数组**

**5 启动**

```
json-server --watch json文件的地址 --port 6000 --host 127.0.0.1 --delay 2000
```

```
--watch:	可以省略，如果省略那么数据发生变化，站点服务不会及时响应。
--delay:	指定延长响应的时间 ，单位为毫秒。
--port:		指定端口号
--host:		指定主机名
```

### 4.3 使用浏览器访问测试

```
http://localhost:3000/scores
http://localhost:3000/scores/1
```

### 4.4 使用 postman 测试接口

用于测试后端 API 的软件，可以发送各种方式的 HTTP 请求。

### 4.5 json-server 后端服务的 API 规则

```
查询
GET http://localhost:6100/news
GET http://localhost:6100/news/2

增加
POST http://localhost:6100/news  需要请求体

修改
PUT	http://localhost:6100/news/2	整个修改
PATCH http://localhost:6100/news/2		修改单个数据中的属性

删除
DELETE http://localhost:6100/news/2
```







## 5 axios

### 5.1 axios 是什么?

axios 是前端最流行的 ajax 请求库 ,没有之一，react/vue官方都推荐使用axios发ajax请求库

文档: https://github.com/axios/axios

### 5.2 axios特点

```
1. 基于 xhr + promise 的异步的 ajax 请求库
2. 浏览器端/node端都可以使用
3. 支持请求/响应拦截器(重点)
4. 支持请求取消 
5. 批量发送多个请求
6. 支持请求与响应的数据转换（二次封装）
```

### 5.3 axios 的安装

#### ① 浏览器中使用

下载后在页面引入或者直接使用 CDN

```html
<script src="axios脚本文件地址"></script>
```

#### ② Node 中使用

**安装**

```bash
npm install axios
```

**代码中引入模块**

```js
const axios = require(‘axios’)
```

### 5.4 使用 axios 发起请求

* axios(config): 通用/最本质的发任意类型请求的方式。
* axios(url[, config]): 第一个参数是地址，第二个参数是配置项。
* axios.request(config): 等同于axios(config)  （了解）
* axios.get(url[, config]): 发get请求
* axios.delete(url[, config]): 发delete请求
* axios.post(url[, data, config]): 发post请求
* axios.put(url[, data, config]): 发put请求

### 5.5 axios 请求配置项

**常用的请求配置项：**

```
url				请求路径或者完整请求地址
baseUrl			基准请求地址
method			请求方式 GET、POST
data			请求体，值可以是对象、查询字符串、json 字符串
headers			设置请求头，值是对象，属性是请求头选项
```

**所有的请求配置项：**

```js
{
   // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // default

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data, headers) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // `headers` 是即将被发送的请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

   // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

   // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // default

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  adapter: function (config) {
    /* ... */
  },

 // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

   // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default

   // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

   // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

   // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // default

  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  cancelToken: new CancelToken(function (cancel) {
  })
}
```

### 5.6 响应结构

```js
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 服务器响应的头
  headers: {},

   // `config` 是为请求提供的配置信息
  config: {},
 // 'request'
  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance the browser
  request: {}
}
```

### 5.7 全局配置项

```js
axios.defaults.baseURL = "http://api.example.com";
axios.defaults.timeout = 2000;
axios.defaults.headers = {
    token:"abc"
}
```

### 5.8 创建 axios 实例

```
1. 根据指定配置创建一个新的 axios, 也就是每个新 axios 都有自己的配置。
2. 新 axios 只是没有取消请求和批量发请求的方法, 其它所有语法都是一致的。
3. 为什么要设计这个语法?
   (1) 需求: 项目中有部分接口需要的配置与另一部分接口需要的配置不太一样, 如何处理
   (2) 解决: 创建2个新axios, 每个都有自己特有的配置, 分别应用到不同要求的接口请求中
```

### 5.9 拦截器

在请求或响应被 `then` 或 `catch` 处理前拦截它们。

```
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

如果你想在稍后移除拦截器，可以这样：

```
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

可以为自定义 axios 实例添加拦截器

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```

调用 axios() 并不是立即发送ajax请求, 而是需要经历一个较长的流程

```
1. 流程: 请求拦截器2 => 请求拦截器1 => 发ajax请求 => 响应拦截器1 => 响应拦截器2 => 请求的回调
2. 注意: 此流程是通过promise串连起来的, 请求拦截器传递的是config, 响应拦截器传递的是response
```

### 5.10 取消请求

基本流程

```
配置cancelToken对象
缓存用于取消请求的cancel函数
在后面特定时机调用cancel函数取消请求
在错误回调中判断如果error是cancel, 做相应处理
```

实现功能

```
点击按钮, 取消某个正在请求中的请求
在请求一个接口前, 取消前面一个未完成的请求
```

### 5.11 批量发送请求

```js
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
}));
```

### 5.12 axios 方法总结

* axios(config): 通用/最本质的发任意类型请求的方式。

* axios(url[, config]): 第一个参数是地址，第二个参数是配置项。
* axios.request(config): 等同于axios(config) 
* axios.get(url[, config]): 发get请求
* axios.delete(url[, config]): 发delete请求
* axios.post(url[, data, config]): 发post请求
* axios.put(url[, data, config]): 发put请求
* axios.defaults.xxx: 请求的默认全局配置
* axios.interceptors.request.use(): 添加请求拦截器
* axios.interceptors.response.use(): 添加响应拦截器
* axios.create([config]): 创建一个新的axios实例。
* axios.CancelToken(): 用于创建取消请求的token对象
* axios.isCancel(): 是否是一个取消请求的错误
* axios.all(promises): 用于批量执行多个异步请求
* axios.spread(): 用来指定接收所有成功数据的回调函数的方法


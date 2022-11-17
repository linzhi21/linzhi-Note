# Day21 Node 课堂笔记

## 回顾

```
1. express 简单应用
   路由
   中间件
   
2. 路由
   路由方法 get() post() all()
   路由的匹配
   路由方法的回调
   
3. 请求对象和响应对象
   
4. 中间件
   1. 中间件是一个函数，通常作为回调函数使用
   2. 中间件的形式
      应用级中间件	app.use() app的路由方法
      路由级中间件	路由器对象 express.Router(), use()和路由方法
      错误处理中间件  通过 app.use() 挂载，最后一个，该函数接收四个参数 err、req、res、next
      内置		  express.satic() 
      第三方		 body-parse
      
5. 路由器对象 express.Router()
	app.use() 挂载到app上
```





## 1 模板引擎

### 1.1 作用

- 渲染产生HTML
- 替换HTML中的数据内容
- 通过模板引擎的模板继承功能或模版包含功能实现页面的复用(如页头,页脚等)

### 1.2 常见的模板引擎

- Ejs 模板引擎
- Jade 模板引擎
- swig 模板引擎
- handlerbar 模板引擎

## 2 EJS 模板引擎

### 2.1 基本使用

#### 安装并导入

```bash
npm install ejs
const ejs = require('ejs')
```

#### 渲染出HTML

```javascript
//第一种用法
// 渲染字符串
ejs.render(str, data, options);
// => 输出绘制后的 HTML 字符串

//第二种用法
// 渲染文件
ejs.renderFile(filename, data, options, function(err, str){
    // str => 输出绘制后的 HTML 字符串
});
```

### 2.2 模板语法

#### ① 分隔符(定界符)

```html
<% 语句 %>		会执行，不会输出
<%= 表达式 %>	   输出表达式的值，表达式的形式可以是变量、直接来、运算公式
<%- 表达式 %>	   输出表达式的，不会进行转义
<%# 注释标签，不执行、不输出内容 %>
```

#### ② 模板内输出表达式的值

```ejs
<%= new Date() %>
<%= 1 + 100 %>
<%= nameList.join(',') %>
```

#### ③ 模板内执行语句

```ejs
<ul>
  <% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}) %>
  <% }); %>
</ul>
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
```

#### ④ include 语法

```ejs
<ul>
  <% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}) %>
  <% }); %>
</ul>
<%- include('header') -%>
<h1>
  Title
</h1>
<p>
  My page
</p>
<%- include('footer') -%>
```

#### ⑤ 自定义分隔符(定界符)

```javascript
// 单个模板文件
ejs.render('<?= users.join(" | "); ?>', {users: users}, {delimiter: '?'});

// 全局
ejs.delimiter = '$';
ejs.render('<$= users.join(" | "); $>', {users: users});
```



## 3 Express 中使用模板引擎

### 1.1 模板引擎设置

```js
//1. 设置 express 所使用的模板引擎 会根据这里的设置自动引入模板引擎，必须再写 require()
app.set('view engine', 'ejs');

//2. 设置模板文件的存放目录
app.set('views', path.join(__dirname, 'pages'));
```

### 1.2 渲染

```js
app.get('/', function (req, res) {
  // 会在模板文件的存放目录中查找 index.ejs 文件
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
```

### 1.3 修改模板文件扩展名

```js
const ejs = require('ejs');

//1. 更改模板引擎名字为 html
app.engine('html', ejs.renderFile);

//2. 设置 express 所使用的模板引擎 
app.set('view engine', 'html');

//3. 设置模板文件的存放目录
app.set('views', path.join(__dirname, 'pages'));
```



## 4 会话控制介绍

HTTP 协议是一个无状态的协议，它无法区分多次请求是否发送自同一客户端。

而我们在实际的使用中，却又大量的这种需求，我们需要通过会话的控制来解决该问题。

常见的会话控制解决方案有 **cookie** 、**session** 等。



## 5 cookie

### 5.1 cookie 介绍

cookie本质是一个存储在浏览器的文本，随着http请求自动传递给服务器。

也可以说cookie是一个头（请求头/响应头）：

- 服务器以响应头的形式将如何设置 cookie 发送给浏览器。
- 浏览器收到以后会设置 cookie 并保存。
- 浏览器再次访问服务器时，会以请求头的形式将 cookie 发送。
- 服务器就可以通过检查浏览器发送的 cookie 来识别出不同的浏览器。

### 5.2 Node 中操作 cookie

学习该小节，重在掌握cookie的原理； 实际操作中会有更简单的方式。

#### 读取 cookie

```js
// cookie 信息会在请求头里，返回一个字符串。
request.headers.cookie;  

// 可以使用第三方模块 cookie，来把 cookie 字符串处理成对象方便读取。
const cookie = require('cookie');
cookie.parse(request.headers.cookie);
```

#### 设置（添加或修改）cookie

```js
// 通过设置响应头来告知浏览器进行 cookie 的设置
// 设置 cookie
response.setHeader('Set-Cookie', 'username=anni');

// 同时设置多个 cookie
response.setHeader('Set-cookie', ['age=100', 'address=Shanghai', 'grade=A']);

// 设置 cookie 的同时指定属性(可作用path和有效时间)
response.setHeader('Set-Cookie', 'username=mingge;path=/a;max-age=3600');

// 同时设置多个 cookie 并指定属性
response.setHeader('Set-Cookie', [
  'username=tom; Max-Age=3600',
  'addrress=Shanghai; Max-Age=7200; Path=/images; HttpOnly; Secure',
  'grade=B; Max-Age=7200; Secure'
]);
```

#### 删除 cookie

```js
// 删除 cookie，通过把有效期设置为负值
response.setHeader('Set-Cookie', 'grade=; Max-Age=-1');
```

#### cookie 的总结（重要）

```
 1. 即使 key 相同，path 不同或者 domain 就是不同的 cookie
 2. 不论是设置 cookie 还是读取 cookie，要求 domain 和 path 要对应，如果不对应不能设置或读取
 3. path默认值是 / 表示对整个网站下的路径都可以对应； domain 默认值是当前的主机名。
 4. Max-Age 选项表示cookie的生存时间，可以指定数字表示多少秒， 如果不设置浏览器关闭cookie就消失； 如果想要删除某个cookie，可以重新设置该cookie，将 max-age 设置为 -1
```

```
1. 设置cookie（添加和修改）
   设置响应头 Set—Cookie，浏览器接收到响应头之后会根据要求设置 cookie
   
2. 读取cookie
   浏览器向服务端发送请求的时候，会将该网站的cookie放在请求头里
   服务器通过请求对象，获取请求里面的 cookie，请求头的名字就叫 cookie
   
3. 删除cookie
   重新设置该cookie，将它的 max-age 设置为 -1
```





### 5.3 express 中使用中间件处理 cookie

在 express 中，通过配置 `cookie-parser` 中间件，可以将 `cookie` 解析为一个对象，并为 `request` 对象添加了一些操作 cookie 属性方法。

**安装：**

```bash
npm install cookie-parser
```

**引入：**

```js
const cookieParser = require("cookie-parser");
```

**挂载中间件：**

```js
app.use(cookieParser());
```

**使用：**

```js
app.get("/setCookie",function (req,res){
    res.cookie("userName","laoli",{
        path: '/getCookie'
    });
    res.cookie("age",18,{
        maxAge:20*1000,
        domain:"learn.fuming.site"
    });
    res.send("设置成功");
});

app.get("/getCookie",function (req,res){
    console.log(req.cookies);
    res.send("获取成功")
});

app.get("/delCookie",function (req,res){
    res.clearCookie("userName");
    res.clearCookie("age",{
        domain:"learn.fuming.site"
    });
    res.send("删除成功")
});
```

### 5.4 cookie 的属性

**Domain**：可以访问该 cookie 的域名。例如，如果设置为 `.fuming.site`，则所有以 `fuming.site` 结尾的域名都可以访问该 cookie。

**Expries：** cookie 的最长有效时间。

**Max-Age**：设置 cookie失效的时间，单位为秒，用来代替原来 Expires，通过它可以计算出其有效时间。maxAge 如果为正数，则该cookie在 maxAge 秒之后失效。如果为负数，则关闭浏览器时 cookie 即失效，浏览器也不会以任何形式保存该 cookie。

**Path**：该 cookie 的使用路径。如果设置为 `/path/`，则只有路径为 ·/path/· 的页面可以访问该 cookie；如果设置为 `/`，则本域名下的所有页面都可以访问该 cookie。

**HttpOnly**：若此属性为true，则只有在 HTTP 头中会带有此 cookie 的信息，而不能通过 `document.cookie` 来访问此 cookie。

**Secure**：该cookie是否仅被使用安全协议传输。安全协议有 HTTPS 和 SSL 等，在网络上传输数据之前先将数据加密。默认为 false。

```
Set-Cookie: <cookie-name>=<cookie-value> 
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly

// 设置多个选项
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

### 5.5 cookie 的不足

1）各个浏览器对 cookie 的数量和大小都有不同的限制，这样就导致我们不能在 cookie 中保存过多的信息。一般数量不超过 50 个，单个大小不超过 4kb。

2）cookie 的内容是由服务器发送给浏览器，再由浏览器将 cookie 发回，如果 cookie 较大会导致发送速度非常慢，降低用户的体验。




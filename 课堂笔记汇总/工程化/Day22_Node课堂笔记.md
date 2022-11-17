# Day22 Node 课堂笔记

## 1 会话控制介绍

HTTP 协议是一个无状态的协议，它无法区分多次请求是否发送自同一客户端。

而我们在实际的使用中，却又大量的这种需求，我们需要通过会话的控制来解决该问题。

常见的会话控制解决方案有 **cookie** 、**session** 等。



## 2 cookie

### 2.1 cookie 介绍

cookie本质是一个存储在浏览器的文本，随着http请求自动传递给服务器。

也可以说cookie是一个头（请求头/响应头）：

- 服务器以响应头的形式将如何设置 cookie 发送给浏览器。
- 浏览器收到以后会设置 cookie 并保存。
- 浏览器再次访问服务器时，会以请求头的形式将 cookie 发送。
- 服务器就可以通过检查浏览器发送的 cookie 来识别出不同的浏览器。

### 2.2 Node 中操作 cookie

学习该小节，重在掌握 cookie 的原理； 实际操作中会有更简单的方式。

#### 读取 cookie

```js
// cookie 信息会在请求头里，返回一个字符串。
request.headers.cookie;  

// 可以使用第三方模块 cookie，来把 cookie 字符串处理成对象方便读取。
const cookie = require('cookie');
cookie.parse(request.headers.cookie);
```

#### 设置 cookie （添加或修改）

```js
// 通过设置响应头来告知浏览器进行 cookie 的设置
// 设置 cookie
response.setHeader('Set-Cookie', 'username=anni');

// 同时设置多个 cookie
response.setHeader('Set-cookie', ['age=100', 'address=Shanghai', 'grade=A']);

// 设置 cookie 的同时指定属性
response.setHeader('Set-Cookie', 'username=mingge;path=/a;max-age=3600');

// 同时设置多个 cookie 并指定属性
response.setHeader(
    'Set-Cookie', 
    [
        'username=tom; Max-Age=3600',
        'addrress=Shanghai; Max-Age=7200; Path=/images; HttpOnly; Secure',
        'grade=B; Max-Age=7200; Secure'
    ]
);
```

#### 删除 cookie

```js
// 删除 cookie，通过把有效期设置为负值
response.setHeader('Set-Cookie', 'grade=; Max-Age=-1');
```

#### cookie 操作总结（重要）

```
 1. 即使 key（名字） 相同，path 不同或者 domain 就是不同的 cookie
 2. 不论是设置 cookie 还是读取 cookie，要求 domain 和 path 要对应，如果不对应不能设置或读取
 3. path 默认值是 / 表示对整个网站下的路径都可以对应； domain 默认值是当前的主机名。
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

### 2.3 express 中使用中间件处理 cookie

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
// 设置 cookie （添加或修改） 注意：cookie的属性设置使用小驼峰
res.cookie("userName","laoli",{path: '/getCookie'});
res.cookie("age",18,{maxAge:20*1000,domain:"learn.fuming.site"});  // maxAge 单位是毫秒

// 读取cookie   返回对象
req.cookies;  

// 删除 cookie
res.clearCookie("userName");	// 注意：默认只删除 path 是 / 的cookie
res.clearCookie("age",{path:"/login"});
```

### 2.4 cookie 的属性详解

**Domain**：可以访问该 cookie 的域名。例如，如果设置为 `.fuming.site`，则所有以 `fuming.site` 结尾的域名都可以访问该 cookie。

**Expries：** cookie 的最长有效时间。

**Max-Age**：设置 cookie失效的时间，单位为秒，用来代替原来 Expires，通过它可以计算出其有效时间。maxAge 如果为正数，则该cookie在 maxAge 秒之后失效。如果为负数，则关闭浏览器时 cookie 即失效，浏览器也不会以任何形式保存该 cookie。

**Path**：该 cookie 的使用路径。如果设置为 `/path/`，则只有路径为 ·/path/· 的页面可以访问该 cookie；如果设置为 `/`，则本域名下的所有页面都可以访问该 cookie。

**HttpOnly**：若此属性为true，则只有在 HTTP 头中会带有此 cookie 的信息，而不能通过 `document.cookie` 来访问此 cookie。

**Secure**：该cookie是否仅被使用安全协议传输。安全协议有 HTTPS 和 SSL 等，在网络上传输数据之前先将数据加密。默认为 false。

### 2.5 cookie 的不足

1）各个浏览器对 cookie 的数量和大小都有不同的限制，这样就导致我们不能在 cookie 中保存过多的信息。一般数量不超过 50 个，单个大小不超过 4kb。

2）cookie 的内容是由服务器发送给浏览器，再由浏览器将 cookie 发回，如果 cookie 较大会导致发送速度非常慢，降低用户的体验。



## 3 session

### 3.1 session 介绍

Session 是一个对象，存储特定用户会话所需的属性及配置信息。Session是保存在服务器端的数据，保存介质可以是文件、数据库或者内存。

**session 运行原理：**

```
1. 服务器中为每一次会话创建一个对象，然后每个对象都设置一个唯一的 ID。
2. 通过设置响应头让浏览器设置 cookie 用于保存该 ID。
3. 将会话中产生的数据统一保存到 session 对象中，这样我们就可以将用户的数据全都保存到服务器中，而不需要保存到客户端，客户端只需要保存一个 ID 即可。
```

### 3.2 在 Node 中使用 session

此处操作只为理解 session 的运行原理

**设置 session： **

```js
// 创建唯一 ID 使用了第三方模块 uuid
const sessId = uuid.v4();

// 将 session 数据写入文件
fs.writeFileSync(path.join(__dirname, 'sess', sessId), JSON.stringify(data));

// 设置cookie
res.set('Set-Cookie', 'sessid='+sessId);
```

**读取 session ：**

```js
// 1. 读取 cookie 中的 session ID
const sessId = cookie.parse(req.headers.cookie).sessid;

// 2. 读取文件中的 session 数据并解析为对象
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'sess', sessId)));
```

**销毁 session：**

```js
// 1. 读取 cookie 中的 session ID
const sessId = cookie.parse(req.headers.cookie).sessid;

// 2. 删除文件
fs.unlinkSync(path.join(__dirname, 'sess', sessId));

// 3. 设置 cookie 失效
res.set('Set-Cookie', 'sessid='+sessId+';Max-Age=-1');
```



### 3.3 express 中 使用中间件处理 session

在 express 中，通过配置 `express-session` 中间件，可以将 `cookie` 解析为一个对象，并为 `request` 对象添加了一些操作 cookie 属性方法。

**安装：**

```bash
npm install express-session
```

**引入：**

```js
var session = require("express-session");
```

**挂载中间件：**

```js
app.use(session({
    name: 'sess',      // 设置cookie的name，默认值是：connect.sid
    secret: 'atguigu', // 参与加密的字符串（又称签名）
    saveUninitialized: false, //是否为每次请求都设置一个 cookie 用来存储 session 的 id
    resave: false ,// 强制保存 session 即使它并没有变化, 默认为 true,建议设置成 false。
    cookie: {
           httpOnly: true, // 开启后前端无法通过 JS 操作
           maxAge: 1000*30 // 这一条 是控制 sessionID 的过期时间的！！！
    }
}));
```

**使用：**

```js
app.get("/setSession",function (req,res){
    req.session.userName = "zhangsan";
    res.send("设置成功");
})
app.get("/getSession",function (req,res){
    console.log(req.session.userName)
    res.send("获取成功")
})
app.get("/delSession",function (req,res){
    req.session.destroy(function (){
       res.send("删除成功");
    })
})
```

### 3.4 cookie 和 session 的区别

**1）存储位置：**

- cookie 存储于客户端浏览器。
- session 存储于服务器端（存储介质可以是文件、内存、数据库等），一个 session 对象为一个用户浏览器服务。

**2）安全性：**

- cookie 是以明文的方式存放在客户端的，安全性较低，可以通过一个加密算法进行加密后存放。
- session 存放于服务器中，所以安全性较好。

**3） 网络传输量：**

- cookie ，浏览器每次发起请求，都会将该网站的所有cookie放进请求头。
- session 本身存放于服务器，浏览器 cookie 中只存储 ID，只有少量的传送流量。

**4）大小：**

- cookie 保存的数据不能超过4K，很多浏览器都限制一个站点最多保存50个cookie。
- session 保存数据理论上没有任何限制。


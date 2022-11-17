# Day24  Ajax  课堂笔记

## 原生 Ajax -- 使用 xhr 对象

### 1 基本使用流程

```js
// 第一步 创建 xhr 对象 XMLHttpRequest
var xhr = new XMLHttpRequest();

// 第二步 监听 xhr 对象发起的 http 请求状态
xhr.onreadystatechange = function() {
    // 当响应内容接收完毕之后
    if (xhr.readyState === 4) {
        // 获取响应状态
        console.log(xhr.status, xhr.statusText);
        console.log('');

        // 获取响应头信息
        console.log(xhr.getAllResponseHeaders());
        console.log('响应体的长度 Content-length：', xhr.getResponseHeader('content-length'));
        console.log('');

        // 获取响应体的内容
        console.log(xhr.responseText);

        box.innerHTML = xhr.responseText;

    }
};

// 第三步 进行初始化，为发送http请求做准备 指定请求方式和URL
xhr.open('GET', 'http://localhost:8080/getData');

// 第四步 发送请求
xhr.send();
```

```
XMLHttpRequest 对象：

属性：
readyState		请求状态，值 0 ~ 4
responseText	响应体体内容

方法：
open()			进行请求初始化，可以指定请求方式和URL
send()			发送请求，参数可以设置请求体
getAllResponseHeader()		获取所有的响应头
getResponseHeader()			获取指定的响应头

事件：
readystatechange	请求状态变化
```

```
readyState 的值：
0	初始值
1   open()方法已经调用，请求初始化完毕
2   send()方法已经调用，请求已经发出，并且开始接收响应行和响应头
3   已经开始接收响应体
4   所有的响应内容接收完毕
```







### 2 GET 请求方式和 POST 请求方式

#### 2.1 GET

#### 2.2 POST

#### 2.3 其他请求方式

**无需发送请求体：** GET、HEAD

**可以添加请求体：** POST、PUT、DELETE、OPTIONS、PATCH 



### 3 响应 json 格式的数据

#### 3.1 服务端设置

设置响应头，告知浏览器响应体的内容类型是 json 格式

```
Content-type: application/json;charset=utf-8
```

#### 3.2 客户端处理接收到的 json 数据

##### ① 方式一 使用 JSON.parse

##### ② 方式二 设置 xhr.responseType 属性 ，通过 xhr.response获取 (xhr2 方案)



### 4 HTTP 进度事件

#### 4.1 进度相关事件(xhr2 新增的事件)

#### 4.2 ProgressEvent 事件对象



### 5 响应超时

#### ① 方案一 兼容方案

#### ② 方案二 XHR2 方案



## 附录 XMLHttpRequest 对象

### ① XHR 对象概述

1）XMLHttpRequest 对象简称 **XHR** 对象。

2）XMLHttpRequest 对象提供了对 HTTP 协议的完全的访问，包括做出 POST 和 HEAD 请求以及普通的 GET 请求的能力。

3）XMLHttpRequest 可以同步或异步地返回 Web 服务器的响应，并且能够以文本或者一个 DOM 文档的形式返回内容。

4）尽管名为 XMLHttpRequest，它并不限于和 XML 文档一起使用，它可以接收任何形式的文本文档。

### ② 创建 XHR 对象

使用构造函数 XMLHttpRequest 就可以创建一个 XHR 对象。

```js
let xhr = new XMLHttpRequest()；
```

注意：在古老的 IE 浏览器中（如：IE6），需要使用其他方式来创建 XHR 对象。

```js
// IE5、IE6
let xhr = new ActiveXObject("Microsoft.XMLHTTP");
```

### ③ XHR 对象的属性

| 属性名       | 含义                                                         |
| ------------ | ------------------------------------------------------------ |
| readyState   | 返回一个数字，表示请求的状态：<br>0 -- UNSET -- XHR对象已创建或已被 abort() 方法重置。 <br>1 -- OPENDED -- `open()` 方法已经被调用。<br>2 -- HEADERS_RECEIVED -- `send()` 方法已经被调用，并且响应头和响应状态已经可获得。 <br>3 -- LOADING -- 下载中， `responseText` 属性已经包含部分数据。 <br>4 -- DONE -- 所有响应数据接收完毕。 |
| status       | 响应状态码，如 404、200 等。                                 |
| statusText   | 响应状态码的文本描述，如 200 对应的是 “OK”。                 |
| responseXML  | 接收格式为 XML 的响应数据，返回一个 document 对象。          |
| responseText | 获取响应文本，返回一个字符串。                               |
| responseType | 用于设置响应内容的类型 *xhr2*                                |
| response     | 返回的类型取决于 responseType 的设置。 *xhr2*                |
| timeout      | 设置超时时间。*xhr2*                                         |

### ④ XHR 对象的方法

| 方法名                  | 含义                                                         |
| ----------------------- | ------------------------------------------------------------ |
| open()                  | 初始化 HTTP 请求，用来指定请求方式和 URL。 `xhr.open(method, url, [async], [user], [password])` |
| send()                  | 发送 HTTP 请求，参数可以设置请求体，没有请求体无需设置参数。 |
| setRequestHeader()      | 设置 HTTP 请求头的值。必须在 `open()` 之后、`send()` 之前调用。 |
| abort()                 | 如果请求已被发出，则立刻中止请求。                           |
| getAllResponseHeaders() | 以字符串形式返回所有的响应头。                               |
| getResponseHeader()     | 返回指定的响应头。                                           |

### ⑤ XHR 对象的事件

| 事件名           | 含义                                                         |
| ---------------- | ------------------------------------------------------------ |
| readystatechange | readyState 属性值发生变化触发该事件。                        |
| abort            | 请求终止时触发。                                             |
| error            | 请求遇到错误时触发。                                         |
| loadstart        | 接收到响应数据时触发。 *xhr2*                                |
| load             | 请求成功完成时触发。*xhr2*                                   |
| loaded           | 当请求结束时触发, 无论请求成功 ( `load`) 还是失败 (`abor` 或 `error`)。*xhr2* |
| progress         | 当请求接收到更多数据时，周期性地触发。*xhr2*                 |
| timeout          | 在预设时间内没有接收到响应时触发。*xhr2*                     |

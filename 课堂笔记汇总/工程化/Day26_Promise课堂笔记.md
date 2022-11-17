# Day 26 Promise 课堂笔记

## 1 Promise 概述

Promise 是异步编程的一种解决方法，比传统的方式更加高效、友好！

使用 Promise 语法需要创建一个 promise 对象，promise 对象中包含一个异步操作， 可以通过实例化 Promise 构造函数来创造 promise 对象。

promise 对象具有三种状态：

1. pending 状态， 进行中， 刚创建的 promise 对象就处于 pending 状态。
2. resolved 状态，已成功， 内部的异步操作执行成功，promise 对象的状态由 pending -> resolved
3. rejected 状态，已失败。 内部的异步操作执行失败，promise 对象的状态由 pending -> rejected

当 promise 的状态发生改变，就再也不会变了！



## 2 Promise 基本语法

#### ① 使用 Promise 构造函数创建 promise 对象

```js
new Promise((resolve, reject) => {})
```

```
1. Promise 构造函数需要一个回调函数作为参数
2. 该回调函数在实例化 Promise 的时候会被自动调用，是同步执行的
```

#### ② 修改 promise 对象的状态

```js
// 改变 Promise 对象的状态
const p4 = new Promise((resolve, reject) => {
    // 修改为 resolve 状态, 可以通过参数传递结果
    resolve('OK,Success');

    // 修改为失败状态, 同时设置 promiseResult
    // reject('error');
    reject({errorno: 10012, errorinfo:'sorry,you are error'});
});
```

```
1. Promise 构造函数的回调函数，会接收到两个参数，两个参数都是函数类型
2. 调用第一个参数，可以将 Promise 对象的状态改为 resolved； 调用第二个参数可以将 Promise 对象的状态改为 rejected。
3. Promise 对象的状态一旦改变，就永远定格为该状态，不会再改变
```

#### ③ 为 promise 对象设置回调函数

```js
// 创建 Promise 对象
const p = new Promise((resolve, reject) => {
    // 设置为成功状态
    // resolve('OK');

    // 设置为失败状态
    reject('error');
});


// 给 Promise 对象设置回调函数
p.then(result => {
    console.log('成功了', result);
}, result => {
    console.log('失败了', result);
});
```

```
1. Promise 对象具有 then 方法，该方法可以设置两个回调函数作为参数； 两个回调函数可以在 Promise 对象状态发生改变的时候自动调用
2. 如果 Promise 对象状态变为 resolved，指定第一个回调函数。
2. 如果 Promise 对象状态变为 rejected，指定第二个回调函数。  
```



## 作业

```
1. 获取所有的榜单，取出榜单中第一个的 id  https://music.cyrilstudio.top/toplist
2. 根据榜单ID获取到该榜单下所有的歌曲  https://music.cyrilstudio.top/playlist/detail?id=
   取出第一首歌曲的 id
3. 根据 ID 信息获取该歌曲的详细信息  https://music.cyrilstudio.top/song/detail
```







## 3 Promise 实例的方法

### 3.1 then 方法

#### ① 参数

#### ② 返回值

### 3.2 catch 方法

#### ① 参数

#### ② then 和 catch 可以配合使用

#### ③ 异常穿透

### 3.3 finally





## 4 Promise 构造函数本身的方法

### 4.1 Promise.resolve()

#### ①  功能

#### ② 根据参数不同返回的promise的状态也不同：

### 4.2 Promise.reject()

### 4.3 Promise.all()




















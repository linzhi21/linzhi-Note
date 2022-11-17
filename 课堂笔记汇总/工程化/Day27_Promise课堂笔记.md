# Day 27 Promise 课堂笔记

## 1 Promise 概述

Promise 是异步编程的一种解决方法，比传统的方式更加高效、友好！

使用 Promise 语法需要创建一个 promise 对象，promise 对象中包含一个异步操作， 可以通过实例化 Promise 构造函数来创造 promise 对象。

promise 对象具有三种状态：

1. pending 状态， 进行中， 刚创建的 promise 对象就处于 pending 状态。
2. resolved 状态，已成功， 内部的异步操作执行成功，promise 对象的状态由 pending -> resolved
3. rejected 状态，已失败。 内部的异步操作执行失败，promise 对象的状态由 pending -> rejected

当 promise 的状态发生改变，就再也不会变了！

**Promise 的优势：**

```
1. 设置回调函数的方式更加灵活
2. 通过链式调用解决回调地狱
```





## 2 Promise 基本语法

#### ① 使用 Promise 构造函数创建 Promise 对象

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







## 3 Promise 实例的方法

### 3.1 then 方法

#### ① 参数

```
1. 第一个参数： Promise 对象状态变为 resolved（成功） 时所调用的回调函数
2. 第二个参数： Promise 对象状态变为 rejected（失败） 时所调用的回调函数
```

#### ② 返回值

`then()` 方法的返回值是一个 Promise 对象，该 Promise 对象的状态取决于 `then()` 方法回调函数的返回值（then 可以设置两个回调函数，哪个回调函数执行就取决于谁）

`then()` 方法回调函数的返回值对 `then()` 方法返回的 Promise 对象的影响，如下：

```
1. 第一种情况 没有返回值； then() 方法返回的 Promise 对象的状态是 resolved（成功）, PromiseResult 是 undefined
2. 第二种情况 返回 Promise 对象以外的数据类型;  then() 方法返回的 Promise 对象的状态是 resolved（成功）, PromiseResult 是该返回值
3. 第三种情况 返回 Promise 对象； then() 方法的返回值就是该 Promise 对象。
4. 第四种情况 该回调函数中出现错误（非语法错误）; then() 方法返回的 Promise 对象的状态是 rejected（失败）， PromiseResult 是错误详情
```

### 3.2 catch 方法

#### ① 参数

```
需要一个回调函数作为参数，如果 Promise 对象的状态是 rejected,就会执行该回调函数
```

#### ② then 和 catch 可以配合使用

```js
promise对象
.then(() => {
    // 状态 resolved，执行该回调
})
.catch(() => {
    // 状态 rejected，执行该回调
})
```

#### ③ 返回值

```
catch() 方法返回值也是 Promise 对象，Promise 对象的状态由回调函数的返回值决定； 规则同 then 方法完全一致，四种情况
```

#### ③ 异常穿透

```js
promsie对象
.then(() => {})
.then(() => {})
.then(() => {})
.then(() => {})
.then(() => {})
.catch(() => {})
```

```
链式调用中，then() 方法只处理 resolved 状态的回调函数，最后由 catch() 的回调函数处理 rejected 状态的 Promise
```

### 3.3 finally

```
1. 与 then()、catch() 方法用法相似，设置回调涵数作为参数。
2. 只要 Promise 对象状态改变， finally 中的回调函数就会执行，不论 Promise 对象的状态是 resolved 还是 rejected
```







## 4 Promise 构造函数本身的方法

### 4.1 Promise.resolve()

#### ①  功能

```
该方法可以返回一个 Promise 对象，用于快速创建一个 Promise 对象。
```

#### ② 根据参数不同返回的 Promise 对象的状态也不同：

```
1. 没有参数
   返回一个 resolved 状态的 Promise 对象，PromiseReuslt 为 undefined
2. 参数是除了 Promise 对象和 thenable 对象以外的数据类型
   返回一个 resolved 状态的 Promise 对象，PromiseReuslt 为 Promise.resolve() 的参数
3. 参数是一个 Promise 对象
   返回的就是这个 Promise 对象
4. 参数是 thenable 对象，设置了 then 方法且按照规范设置，称为 thenable 对象
   返回的 Promise 对象状态取决于 thenable 对象的 then() 方法中调用了第一参数还是第二个参数
```

```js
// 4. 参数是一个 thenable 对象（具有 then 方法对象）
const obj = {
     then(resolve, reject) {
         const rand = Math.floor(Math.random() * 10);
         if (rand >= 5) {
             resolve(rand);
         } else {
             reject(rand);
         }
     }
 }
 
const p4 = Promise.resolve(obj);
p4
.then(res => {
    console.log('p4 成功！', res);
})
.catch(res => {
    console.log('p4 失败！', res);
});
```

### 4.2 Promise.reject()

```
1. 该方法返回一个 rejected 状态的 promise 对象
2. 该方法所有的参数都被视为 promise 对象的 PromiseResult
```

### 4.3 Promise.all()

```
1. Promsie.all() 的参数
	需要一个可遍历对象作为参数，要求可遍历对象中的每个成员都是 Promise 对象； 
	如果可遍历对象中有成员不是 Promise 对象，系统会使用 Promise.resolve() 方法将该成员作为参数返回 Promise 对象

2. Promsie.all() 的返回一个 Promise 对象，该 Promise 对象的状态由参数中的成员决定：
   ① 如果参数中的成员最终状态都变为 resolved，返回的 Promise 对象状态也是 resolved； PromiseResult 是个数组，数组中包含参数成员的 PromiseResult
   ② 如果参数成员中任何一个状态改为 rejected，返回的 promise 对象状态就是 rejected， PromiseResult 是参数成员中第一个变为 rejected 的成员的  PromiseResult 
   
3. Promise.all() 的参数如果不是可遍历对象，返回一个 rejected 状态的 Promise 对象
```

```
都成功才成功，一个失败最终失败！
```

### 4.4 Promise.race()

```
1. Promise.race() 方法同 Promise.all() 一样，将多个 Promise 实例，包装成一个新的 Promise 实例。
2. 参数也要求是个可遍历对象，可遍历对象的成员要求是 Promise 对象， 不是 Promise 对象，会用 Promise.resolve() 方法变为 Promise 对象
3. 一旦可遍历对象中的某个 Promise 实例状态率先变为 resolved 或 rejected，返回的 Promise 实例就会跟着变，那个率先改变的 Promise 实例的返回值，就是最终的返回值。
```





## 5 微队列和宏队列

1. JS 中用来存储待执行回调函数的队列包含2个不同特定的列队
2. 宏列队：用来保存待执行的宏任务(回调)，比如：定时器回调、DOM事件回调、ajax回调。
3. 微列队：用来保存待执行的微任务(回调)，比如：Promise 的回调、MutationObserver 的回调。
4. JS 执行时会区别这2个队列：
   - (1) JS 引擎首先必须先执行所有的初始化同步任务代码。
   - (2) 每次准备取出第一个宏任务执行前, 都要将所有的微任务一个一个取出来执行。



## 作业

```
1. 面试题3 面试题4
2. 今日课堂练习
```












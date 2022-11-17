#### 1. 写出以下程序输出结果

```js
var name = "222";
var a = {
	name: "111",
	say: function () {
		console.log(this.name);
	}
}
var fun = a.say;
fun();		// 
a.say();	//
 
var b = {
	name : "333",
	say: function (func){
		func();
	}
}
b.say(a.say);	//
b.say = a.say;	
b.say();		//
```

#### 2. 写出以下代码输出结果

```js
var foo = 123;
function print(){
    this.foo = 234;
    console.log(foo);
}
print();
```

#### 3 运行`test（）` 和 `new test()` 输出结果分别是什么？

```js
var a = 5;
function test(){
    a = 0;
    console.log(a);
    console.log(this.a);
    var a;
    console.log(a);
}

```


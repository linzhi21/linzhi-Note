#### 题目01

```js
var age = 10;

function func(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        console.log(this.name);
        console.log(this.age);
    }
    console.log(this.name);
}

func('Tom', 19);

var o = new func('Tom', 19);
o.getInfo();

console.log(age);
```



#### 题目02

```js
var age = 20;

var obj = {
    age: 10,
    getAge: function() {
        console.log(this.age);
    }
}

var obj1 = {
    age: 30
};
obj1.prop = obj;
var fn = obj1.prop.getAge;

obj.getAge();
obj1.prop.getAge();
fn();
```


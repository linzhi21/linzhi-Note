# Day09 ES6 课堂笔记

## 复习

```
1. 函数新增特性
   1.1 函数形参默认值设置方式
   1.2 rest 参数
   1.3 箭头函数
   1.4 函数参数尾逗号

2. 数组新增特性
   2.1 扩展运算符
       ① 将数组拆分为逗号分隔的参数序列
       ② 将逗号分隔的参数序列合成数组
   2.2 Array 构造函数新增的方法  
       Array.from()  Array.of()
   2.3 数组实例新增的方法
   
3. 对象新增特性
   3.1 属性的简写 {}
   3.2 方法的简写
   3.3 声明对象的时候用表达式表示属性名
   3.4 super 关键字 （在简写的方法中使用）
   3.5 扩展运算符用于对象
   3.6 Object 构造函数本身新增的方法
   3.7 Object 实例新增的属性 __proto__
   3.8 可选链运算符
       obj.fn?.()
       obj.user?.name
       
```







## 1 Class 语法

### 1.1 使用 Class 定义类（定义构造函数）

**语法：**

```js
class User {
    // 定义属性 属性会添加到实例本身
    username = '小智';
    age = 23;
	eat = ()=> {};
    
    // 使用简写方式定义方法， 方法会添加到实例的原型上
	say() {
        
    };
	drink() {
        
    };
}
```

**特点：**

```
1. 使用 class 关键字定义的类本质上仍然是构造函数，使用 typeof 判断返回 function
2. 使用 class 关键字定义的类（构造函数）不能被调用，只能被实例化
3. 在 class 里面使用简写方式为实例设置的方法，会添加到实例的原型的
4. 在 class 里面只能定义属性和方法，如果有其他代码可以在方法内部写
```

### 2.2 类中定义构造器

**语法：**

```js
// 定义类（构造函数）
class User {
    // 声明属性
    username;
    age;

    // 构造器方法
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }

    // 方法
    say() {
        console.log(`我叫${this.username},今年${this.age}岁`);
    }
}
```

**特点：**

```
1. 构造器方法在实例化的时候被自动调用，实例化一次就调用一次。
2. 构造器方法可以接收到实例化所传的实参，构造器方法主要用于给属性赋初始值。
```

### 2.3 类中定义静态方法

**语法：**

```js
class Person {
    // 定义普通属性
	address = '上海';
    // 定义静态属性 (还不是正式语法)
    static username = 'hello';
	
    // 普通方法
    eat() {}
    // 定义静态方法
    static drink() {}
}

// 在类的外部定义静态方法
Person.drink = () => {}
// 在类的外部定义静态属性
Person.job = '值';
```

**特点：**

```
所谓静态方法和静态属性就是类（构造函数）本身的方法和属性！a
```

### 2.4 继承

#### ① extends 关键字实现继承

**语法：**

```js
// 定义父类
class User {}

// 定义子类并继承父类
class VipUser extends User {}
```

**特点：**

```
1. 子类可以继承父类中定义的属性和方法，并在此基础上添加自己的属性和方法。
2. 一个父类可以被多个子类继承，一个子类只能继承一个父类
3. extends 语法本质上仍然是按照原型链的规则实现继承： 子类的实例的原型是父类的一个实例
```

#### ② 方法和属性的重写

**语法：**

```js
// 定义父类
class User {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    addShopcart(product) {
        console.log(this.name + '将' + product + '加入购物车！');
    }
}

// 定义子类
class VipUser extends User {
    // 定义子类实例自己的属性
    address;

    // 重写构造器方法
    constructor(name, age, address) {
        // 必须将父类中的构造器方法再次调用一遍，先调用再干其他
        super(name, age);
        this.address = address;
    }


    buy() {
        console.log(this.name + '购买了商品！');
    }

    addShopcart() {
        console.log(this.name + '加入购物车！');
    }
}

```

**特点：**

```
1. 子类中定义的属性和方法如果与父类中定义的属性或方法重名，子类中会重写继承下来的属性和方法
2. 如果子类中重写构造器方法，子类中构造器方法中必须先通过 super 关键字来调用父类的构造器方法，再进行其他操作
```

#### ③ super 关键字

super 关键字可以作为对象使用，也可以作为函数使用。

super 关键字作为对象使用，具有如下特点：

```
1. super 关键字写在使用 {} 声明对象时，里面简写形式定义的方法中
2. super 表示方法所属的对象的原型
```

super 关键字作为函数使用，具有如下特点：

```
1. 在子类的构造器方法中使用 super， 只能在构造器方法中使用，其他方法中不能使用。
2. 此时 super 表示父类的构造器方法
3. 在子类的构造器方法中，要求 super 必须写在最前面
```

#### ④ 继承内置类（内置构造函数）

如 Array、Object、Function、Date 等都是内置类（内置构造函数），是系统定义好的类。

```js
// 定义类 继承 Array
class MyArray extends Array {
    // 重写父类的构造器方法
    constructor(...args) {
        super(...args);
        this.max = Math.max(...args);
        this.min = Math.min(...args);
    }
}
```



## 3 Symbol 类型

Symbol 是 ES6 中新增的一种原始类型的数据，具有如下特点：

```
1. 可以作为对象的属性名，对象的属性名可以是字符串的形式也可以是symbol的形式
2. 作为原始类型数据，使用 typeof 判断，返回 symbol
3. 通过调用函数 Symbol() 可以创建一个 symbol 类型的数据，每调用一次 Symbol() 函数都会创建一个独一无二的 symbol 类型的数据。
```





## 4 Set 和 Map

### 4.1 Set

新增的数据类型，类似于数组，但是里面的成员的值不能重复，必须是唯一； 相比于数组没有索引结构。

#### ① Set 构造函数

```js
// 创建一个空的 Set
new Set();

const arr = ;

// 根据数组，创建Set 
new Set[10, 20,30,40,40,50,60,40,20,10,50, '30']);

// 创建Set 根据字符串（或者可遍历对象）
new Set('Hello world');
```

```
Set 构造函数只能实例化不能调用！
```

#### ② Set 的实例的属性方法

```
size			获取Set中成员的数量

add()			添加一个成员
delete()		删除一个成员
has()			判断是否存在某个成员
clear()			清空
keys()
values()
entries()
forEach()		遍历出Set中所有的成员
```

#### ③ Set 的应用

```
1. 保存一些不允许重复的数据
2. 利用 Set 进行数组去重
```

### 4.2 WeakSet

WeakSet 与 Set 类似，也是由不重复的值组成的集合，与 Set 有两点区别： ① WeakSet 中的成员只能是对象类型的数据，不能是原始类型，Set 中的成员可以是任意类型； ② WeakSet 不可遍历

#### ① WeakSet 构造函数

```js
 // 创建 WeakSet
const ws1 = new WeakSet();

// 创建 WeakSet， 以数组作为参数
const s = new Set([10,20,30,40])
const ws2 = new WeakSet([{name:'xiaole'}, function(){}, [10,20,30], s, new Date(), s]);

// 创建 WeakSet， 以遍历对象作为参数
const ws3 = new WeakSet(document.all);
```

```
WeakSet 构造函数只能实例化，不能调用！
```

#### ② WeakSet 实例的方法

```
add()		添加一个成员
delete()	删除一个成员
has()		判断某个成员是否存在
```

### 4.3 Map 

Map 是新增的数据结构，类似于 Object，是由键值对（key-value）组成的集合，与对象比有如下区别：

对象中的键（属性名）必须是字符串或者symbol类型，而Map中的键可以是任意类型数据。

#### ① Map 构造函数

```js
// 创建空的 Map
const m1 = new Map();

// 创建 Map，以二维数组作为参数
const arr = [
    [100, '小乐'],
    [[100,200,300], 2000],
    [Array, 250],
    [Object, 350],
    [Set, 450],
    [Function, 550],
    [Array, 750],
    [[100,200,300], 3000]
];
const m2 = new Map(arr);

// 创建 Map，以可遍历对象作为参数
const s = new Set([[100,10],[200,30],[400,40]]);
const m3 = new Map(s);
```

```
Map 构造函数只能实例化，不能调用！
```

#### ② Map 实例的属性方法

```
size			获取到成员的数量

get(key)		根据键获取值
set(key,value)  添加或者修改成员
delete(key)		删除成员
has(key)		判断是否存在某个成员
clear()			清空
keys()
values()
entries()
forEach()		遍历出Map中所有的成员
```

### 4.4 WeakMap

WeakMap 与 Map 类似，也是由键值对组成的集合，相对于 Map，有两点不同： ① WeakMap 的键只能是对象类型，不能是原始类型； ② WeakMap 不可遍历

#### ① WeakMap 构造函数

```js
// 创建空的 WeakMap
const wm1 = new WeakMap();

// 创建 Map，以二维数组作为参数
const arr = [
    [[100,200,300], 2000],
    [Array, 250],
    [Object, 350],
    [Set, 450],
    [Function, 550],
    [Array, 750],
    [[100,200,300], 3000]
];
const wm2 = new WeakMap(arr);

// 创建 Map，以可遍历对象作为参数
const s = new Set([[{},10],[{},30],[{},40]]);
const wm3 = new WeakMap(s);
```

```
WeakMap 构造函数只能实例化，不能调用！
```

#### ② WeakMap 实例的方法

```
get(key)		根据键获取值
set(key,value)  添加或者修改成员
delete(key)		删除成员
has(key)		判断是否存在某个成员
```



## 5 新增的运算符

### 5.1 指数运算符

```
**
```

### 5.2 可选链运算符

```
?.
```

### 5.3 空值判断运算符

`??` 空值判断运算符类似于逻辑或`||`, 区别在于空值判断运算符组成的表达式，只有左边的操作数是null或者undefined的时候，才会以右边的操作数作为表达式的值

```js
false || 100;	    // 100
0 || 100;           // 100
'' || 100;		    // 100
null || 100;    	// 100
undefined || 100；   // 100

false ?? 100;		// false
0 ?? 100;			// 0
'' ?? 100;          // ''
null ?? 100;		// 100
undefined ?? 100;   // 100
```

 ### 5.4 逻辑赋值运算符

```
&&=
||=
??=
```

```js
n1 &&= 200;  	// n1 = n1 && 200
n1 ||= 300; 	// n1 = n1 || 300;
n1 ??= 400; 	// n1 = n1 ?? 400;
```




















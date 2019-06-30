  ### 咕咕咕，好久不见，我想死你们了
  ##### 开始这次的文章，首先我先问几个问题，很简单的
----
  ##### ES5 中有哪些基础数据类型？
这个肯定你们都背熟了，好 ～ 我继续
  ##### Object 和 基础数据类型显著的区别是啥？
然后很多人就会说
  + Object 属于复杂类型，基础类型属于简单类型
  + 前者在堆中申请内存，并且存储值，栈中存储指针地址，后者直接在栈中存值
  + 在JS变量赋值的时候，如果是 object 赋值是赋值指针，修改引用值会影响所有引用者，如果是简单数据，赋值就是单纯的值的赋值，不会有这么副作用
 ##### 那么在V8 中 Object 的访问、更新，有了解嘛？
  + 今天就会讲2个方面，在V8 中
     + Object 的存储机制
     + Object 的访问模式
     + 代码中有哪些习惯，会让 Object 的读取和赋值更加高效
----

#### Object 如何在内存中存储的

![avatar](https://pt-starimg.didistatic.com/static/starimg/img/VCwxKBy4Lc1561883226047.png)

```javascript
    let p = {}
```

JavaScript 对象会在堆上（根据需求）分配恒定大小的空间：
+ 预分配（不超过）一定大小的空间用作对象内属性存储（inobject_properties）
+ 预分配空间不足时（无空闲 slot），新增属性会存储在 properties 内
+ 数字式属性存储在 elements 内
+ properties/elements 空间不足时会创建（拷贝）一个更大的 FixedArray

![avatar](https://pt-starimg.didistatic.com/static/starimg/img/nLWI84DidO1561882924054.png)

```javascript
    let p = {
        'a': 1,
        'b': 2,
        '0': 0,
        '1': 1
    };
    p.x = 'x';
    p.y = 'y';
```

#### Object 如何访问值
+ Dictionary mode（字典模式）：
  字典模式也成为哈希表模式，V8 引擎使用哈希表来存储对象。
+ Fast mode（快速模式）：
  快速模式使用类似 C 语言的 struct 来表示对象，如果你不知道什么是 struct，可以理解为是只有属性没有方法的 class

---- 
 + JavaScript是一种动态编程语言：属性可进行动态的添加和删除，这意味着一个对象的属性是可变的
 + 大多数的JavaScript引擎使用一个类似字典的数据结构来存储对象的属性，那么每个属性的访问都需要动态的去查询属性在内存中的位置。
 + 那么相比Java这样的静态语言来说就会慢的多。静态语言的属性地址会在类定义后通过编译，相对于对象有一个固定的偏移量，访问属性本质上只是简单的读取和存储，一条指令就可以搞定。

#####  为了提高属性的访问速度， 在这种场景下，V8并没有动态的去内存中查询属性
  + 动态的去创建 Map ，当一个新的属性加入时，对象就会改变这个Map，来存储新的内存地址，一种空间换时间的方法。

##### 那么这个 Map 是什么？他就是最关键先生了
![avatar](https://pt-starimg.didistatic.com/static/starimg/img/yCL0h9TkQU1561887055077.png)

type： 表述了堆内实例是一个 JSObject 对象
inobject properties：对象内存储空间（包含未使用的 slots）
unused property fields：未使用的属性存储空间
instance size：实例（在堆内）的大小
stable[dictionary]：对象当前状态
stable_map：快速模式
dictionary_map：字典模式

#### 代码中有哪些习惯，会让 Object 的读取和赋值更加高效
```javascript
// 第一种，删除属性，造成重新生成map更新
let a = {
    b: 1,
    c: 2
}
delete a.b
```

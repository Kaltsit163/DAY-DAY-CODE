### 1. 如何自己实现 JS 中的 bind？

------
大家都知道，`bind`是 `JS` 中改变`执行上下文`的利器，可以让你指定`执行上下文`，并且返回一个`变更过执行上下文`的函数；(偏偏不说this)

```javascript
const app = {
    name: 'app',
    getName(version) {
        console.log(this.name)
    }
};

app.getName();

app.getName.bind({ name: 'hello' })();

```
------
那么第一个你猜返回什么呢？第二个呢？

第一个是'app', 第二个是'hello'；

这里其实就是利用了 bind 改变了函数执行时候的`执行上下文`；

那么bind，最起码要做下面两件事情；
 + bind 会获取第一个参数，作为后续使用的 `执行上下文`;
 + 返回一个函数，并且这个函拥有新的 `执行上下文`;

```javascript
const app = {
    name: 'app',
    getName() {
        console.log(this.name)
    }
};

Function.prototype.bind2 = function () {
    var fn = this;
    var argsParent = [...arguments];
    return function () {
        fn.call(...argsParent);
    };
}

// app.getName();
// app.getName.call(app);

// app.getName.bind2({ name: 'hello' })();

app.getName.bind2.call(app.getName, { name: 'hello' })();

// 为啥我这里会写call，因为ES5函数调用就是这样的啊，只不过平时预发糖用多了，你就不认了
// 这里写出来，方便理解, 因为call 的第一个参数就是 this 执行上下文，后面的都是 arguments 呀

```

```javascript

Function.prototype.bind2 = function () {
    var fn = this;
    // 知道为啥fn，也就是执行函数是this了吧，看转换成call后是不是很好理解了
    var argsParent = [...arguments];
    // 获取所有arguments，然后把这个伪数组，转换成数组，当然你可以使用Array.from
    return function () {
        fn.call(...argsParent);
        // 然后返回一个函数，并且将其展开，这个时候第一个参数，也就是 this，就会被替换
        // 成为你传入的第一个参数，此时就是 {name: 'hello'}
    };
}

```
---
是不是觉得，运行一波，还是对的，以为就解决了，那就naive了；
那么下面，则是bind后，经常会使用的方式

```javascript

const app = {
    name: 'app',
    getName(version) {
        console.log(this.name + ':' + version)
    }
};

app.getName.bind2.call(app.getName, { name: 'hello' }, '???')(1.1);

```
仔细看看，返回的是函数，那么新返回的函数如何传参呢？
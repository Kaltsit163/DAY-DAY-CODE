### 1. 如何自己实现 JS 中的 bind？

---

大家都知道，`bind`是 `JS` 中改变`执行上下文`的利器，可以让你指定`执行上下文`，并且返回一个`变更过执行上下文`的函数；(偏偏不说 this)

```javascript
const app = {
  name: 'app',
  getName(version) {
    console.log(this.name);
  }
};

app.getName();
app.getName.bind({ name: 'hello' })();
```

---

那么第一个你猜返回什么呢？第二个呢？

第一个是'app', 第二个是'hello'；

这里其实就是利用了 bind 改变了函数执行时候的`执行上下文`；

那么 bind，最起码要做下面两件事情；

- bind 会获取第一个参数，作为后续使用的 `执行上下文`;
- 返回一个函数，并且这个函拥有新的 `执行上下文`;

```javascript
const app = {
  name: 'app',
  getName() {
    console.log(this.name);
  }
};

Function.prototype.bind2 = function () {
  var fn = this;
  var argsParent = [...arguments];
  return function () {
    fn.call(...argsParent);
  };
};

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
};
```

---

是不是觉得，运行一波，还是对的，以为就解决了，那就 naive 了；
那么下面，则是 bind 后，经常会使用的方式

```javascript
let app = {
  name: 'app',
  getName(data) {
    console.log(this.name + ' has: ' + data);
  }
};

Function.prototype.bind2 = function () {
  var fn = this;
  var argsParent = [...arguments];
  return function () {
    fn.call(...argsParent);
  };
};

app.getName(1); // app has: 1

app.getName.bind2({ name: 'hello' })(2); // hello has: undefined

app.getName.bind({ name: 'hello' })(3); // hello has: 3
```

仔细看看，这个猴版的 bind2，`执行上下文`是绑定对了，然而参数没了，返回的参数，再传递参数，简直没办法传参数；
这里其实就是第三个特征，返回的参数，还可以传参数，继续执行；

```javascript
return function () {
  fn.call(...argsParent);
  // 这里其实非常关键，这里的参数，其实是外部作用域的 arguments
  // 根本获取返回函数的arguments，这里其实就需要加一行
};

return function () {
  fn.call(...argsParent, ...arguments);
  // 这里的arguments 是返回函数的arguments，不是外部的，SO
};
```

---

现在让我们康康完整版的 bind2

```javascript
Function.prototype.bind2 = function () {
  var fn = this;
  var argsParent = [...arguments];
  return function () {
    fn.call(...argsParent, ...arguments);
  };
};
```

```javascript
Function.prototype.bind2 = function () {
	var fn = this;
	var args1 = [...arguments];
	return function () {
		fn.call(args1, ...arguments);
	}
}
```


```javascript

Function.prototype.bind2 = function () {
  let fn = this;
  let agrs1 = [...arguments]; // 之前的老arguments + 也就是新传入的 this
  return function () {
    fn.call(agrs1, ...arguments) // 这里重新使用 args1 中传入的 this，去替换，然后加上新的 arguments
  }
}

```
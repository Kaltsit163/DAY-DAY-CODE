### 1. 如何自己实现 JS 中的 bind？

大家都知道，`bind`是 `JS` 中改变`上下文`的利器，可以让你指定`上下文`，并且返回一个`变更过上下文`的函数；

```javascript
const app = {
    name: 'app',
    getName(version) {
        console.log(this.name)
    }
};

app.getName();

app.getName.bind({ name: 'hello' });

```

那么第一个你猜返回什么呢？第二个呢？

第一个是'app', 第二个是'hello'；

这里其实就是利用了 bind 改变了函数执行时候的`执行上下文`
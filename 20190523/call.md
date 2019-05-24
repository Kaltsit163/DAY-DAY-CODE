### 1. 如何自己实现 JS 中的 call？

------
`call`，是个啥，方法使用一个指定的`this `值和单独给出的`一个或多个参数`来调用一个函数。

-----
好了，特征大家明白了
  1. 可以指定`this`
  2. 接受参数传入

```javascript
const app = {
    name: 'app',
    getName() {
        console.log(this.name)
    }
};

app.getName(); // app

app.getName.call({ name: 'hello' }); // hello

```

那么改变 `this`（执行上下文）和接受参数

``` javascript
Function.prototype.call2 = function (context = window, ...args) {
    // 因为传入得context，有可能真的就是undefined，只不过在浏览器会兼容成 window
    // 这里也需要去兼容一下
    context.fn = this;
    // 此时的this，就是执行环境，也就是context.fn 中 fn 的函数体
    const result = context.fn(...args)
    delete context.fn;
    // 因为JS的数据的引用问题，这里还是得删掉
    return result;
    // 最后返回使用新上下文中执行后的执行结果
}
```
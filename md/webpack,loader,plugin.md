webpack 把代码编译成了什么？

1. 先定义一个变量__webpack_module_cache__作为加载了的模块的缓存

2. __webpack_require__其实就是用来加载模块的，加载模块时，先检查缓存中有没有，如果有，就直接返回缓存，如果缓存没有，就从__webpack_modules__将对应的模块取出来执行。

3. __webpack_modules__就是上面第一块代码里的那个对象，取出的模块其实就是我们自己写的代码，取出执行的也是我们每个模块的代码
每个模块执行除了执行我们的逻辑外，还会将export的内容添加到module.exports上，这就是前面说的__webpack_require__.d辅助方法的作用。添加到module.exports上其实就是添加到了__webpack_module_cache__缓存上，后面再引用这个模块就直接从缓存拿了。

1. 将import这种浏览器不认识的关键字替换成了__webpack_require__函数调用。

2. __webpack_require__在实现时采用了类似CommonJS的模块思想。
3. 一个文件就是一个模块，对应模块缓存上的一个对象。
4. 当模块代码执行时，会将export的内容添加到这个模块对象上。
当再次引用一个以前引用过的模块时，会直接从缓存上读取模块。




# plugin 机制

在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。plugin是一个扩展器，在webpack打包的过程中，基于事件驱动的机制，监听webpack打包过程中的某些节点，从而执行广泛的任务。


class New {
  construcotr () {}
  apply (compiler) {
    compiler.hooks.emit.tap('ReadmeWebpackPlugin', (compilation, cb) => {

    })
  }
}

class 插件名
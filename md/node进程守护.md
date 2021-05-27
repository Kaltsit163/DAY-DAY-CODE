主要思路：

  1. 创建一个 thethd A，然后在其中创建 B，
  2. 对B setsid
  3. 那么A退出时，B就会被init进程接管，此时B就是A的守护；


具体方案
  1. 借助 clild_process 中的 spawn 即可创建子进程；
```javascript
var spawn = require('child_process').spawn;
var process = require('process');

var p = spawn('node',['b.js']);
```
  2. 设置setsid 调用

```javascript
var spawn = require('child_process').spawn;
var process = require('process');

var p = spawn('node',['b.js'],{
    detached : true
});
```

总结：

守护进程最重要的是稳定，如果守护进程挂掉，那么其管理的子进程都将变为孤儿进程，同时被init进程接管，这是我们不愿意看到的。
于此同时，守护进程对于子进程的管理也是有非常多的发挥余地的，
例如PM2中，将一个进程同时启动4次，达到CPU多核使用的目的（很有可能你的进程在同一核中运行），进程挂掉后自动重启等等，这些事情等着我们去造轮子。


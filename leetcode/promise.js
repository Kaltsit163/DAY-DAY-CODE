Promise


1. promise 那些 API 会产生 microtask
promise 只有涉及到状态变更后，的callback 才算是产生microtask
比如 then、finally，其他代码都是同步执行的 macrotask；

2. 这些 microtask 什么时候加入 queue
如果 promise 状态为 pendding，那么无论成功或者失败，都会被接入两个队列
如果此时 promise 状态为非 pendding 时，回掉会成为 promise jobs，也就是 microtask

3. 链式调用中，只有前一个 then 的回调执行完毕后，跟着的 then 中的回调才会被加入至微任务队列。

4. 同一个 Promise 的每个链式调用的开端会首先依次进入微任务队列。

5. then1 then1-1 then2 then1-2 then3 then4

6. 
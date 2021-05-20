function isCyclic(o) {
  /* 代码实现 */
  var objAry = [];
  function check(obj) {
    if (obj === window) return true;
    if (typeof obj === "object") {
      //判断我们是否访问过这个节点
      if (objAry.indexOf(obj) !== -1) return true;
      objAry.push(obj);
      for (var key in obj) {
        //确定js对象是否具有指向自己的属性
        if (obj.hasOwnProperty(key) && check(obj[key])) {
          return true;
        }
      }
    }
    return false;
  }
  return check(obj);
}

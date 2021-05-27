var arr = [1, 2, [3, [4]], 5]
 
// 用 reduce 展开一层 + 递归
var flatLv = (arr, deep) => {
  const fixedArr = arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? (deep > 0 ? flat(cur, deep - 1) : cur) : cur);
  }, []);
  return fixedArr;
};

const flat_LV_ES = (arr, dep) => {
  return Array.prototype.flat(arr, dep)
}

var flat = (arr) => {
  const fixedArr = arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
  }, []);
  return fixedArr;
};
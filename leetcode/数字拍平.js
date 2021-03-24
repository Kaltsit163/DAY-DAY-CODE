var arr = [1, 2, [3, [4]], 5]
 
// 用 reduce 展开一层 + 递归
var flat = (arr, deep) => {
  const fixedArr =  arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? (deep > 0 ? flat(cur, deep - 1) : cur) : cur);
  }, []);
  return fixedArr;
};

console.log(flat(arr, 1));
console.log(flat(arr, 2));
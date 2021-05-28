const unique = arr => {
  var newArr = [];
  var len = arr.length;
  for (let index = 0; index < len; index++) {
    let cur = arr[index];
    newArr.indexOf(cur) >= 0 ? newArr.push(cur) : '';
  }
  return newArr;
};

const unique = arr => {
  return Array.from(new Set(array));
};

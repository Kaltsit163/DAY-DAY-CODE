const add = (...args) => {
  return args.reduce((pre, cur) => {
      return pre + cur
  },)
};


let a = add(1, 2, 3) // 6

console.log(a);


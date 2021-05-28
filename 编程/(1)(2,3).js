function foo(...args) {
  const target = (...arg1s) => foo(...[...args, ...arg1s])
  target.getValue = () => args.reduce((p, n) => p+ n, 0)
  return target;
}
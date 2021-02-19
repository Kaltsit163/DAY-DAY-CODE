function add() {
  var args = Array.prototype.slice.call(arguments);

  var fn = function () {
    var arg_fn = Array.prototype.slice.call(arguments);

    return add.apply(null, args.concat(arg_fn));
  };

  fn.valueOf = function () {
    return args.reduce(function (a, b) {
      return a + b;
    });
  };

  return fn;
}

const a = add(1);

console.log(a);

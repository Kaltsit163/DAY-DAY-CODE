const debonce = (fn, time) => {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn && fn.apply(this, arguments);
			clearTimeout(timer);
    }, time);
  };
};
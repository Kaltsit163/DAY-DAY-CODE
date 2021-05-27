const throlle = (fn， time) => {
  let lock = false;
	return function () {
		if (lock) {
			return false;
		}
		lock = true;
		setTimeout(() => {
			fn && fn.apply(this, arguments);
			lock = false;
		}, time * 1000);
	}
}
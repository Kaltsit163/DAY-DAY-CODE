const longest = (s) => {
	let l = 0;
	let res = 0;
	let mapK = new Map();
	for (let r = 0; r < s.length; r ++) {
		if (mapK.has(s[r]) && mapK.get(s[r] >= l) ) {
			l = mapK.get(s[r]) + 1;
		}
		res = Math.max(res, r - l + 1);
		mapK.set(s[r], r);
	}
  return res;
}

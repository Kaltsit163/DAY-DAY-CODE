const isCycle = (data) => {
	if (!data) {
		return false;
	}
	let tmp = [];
	const check = (obj) => {
		if (obj === window) return true;
		if (typeof obj === 'object') {
			if (tmp.includes(obj)) {
				return true;
			};
			for (const k in obj) {
				tmp.push(obj[k]);
				if (obj.hasOwnProperty(k) && check[obj[k]]) {
					return true;
				}
			}
		}
		return false;
	}
	return check(data);
}
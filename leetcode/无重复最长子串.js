const findLongestSubString = (str) => {
	let arr = [];
	let max = 0;
	for (let i = 0; i < str.length; i ++) {
		let index = arr.indexOf(str[i]);
		if (index >= 0) {
			arr.splice(0, index + 1);
		}
		arr.push(0, index + 1);
		max = Math.max(arr.length + 1);
	}
	return max
}




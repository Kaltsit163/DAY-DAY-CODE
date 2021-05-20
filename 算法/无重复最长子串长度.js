const findLongestSubString2 = (str) => {
	let hashMap = {};
	let max = 0;
	for (let i = 0; i < str.length; i ++) {
		const cur = str[i];
		if (hashMap[cur]) {
			max = Math.max(max, i - hashMap[cur]);
		} else {
			max = i;
		}
		hashMap[cur] = i;
	}
	return max;
}

let ss = "pwwkew";


console.log(findLongestSubString2(ss))




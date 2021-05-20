/*
 * 1. 模拟小学数学的竖式相加
 *    1234
 *     678
 * 2. 用两个指针，来模拟
 */

const addStrings = (num1, num2) => {
	let i = num1.length - 1;
	let j = num2.length - 1;
	let add = 0;
	let ans = [];
	// 拨动指针
	while (i >=0; j >=0; add!=0) {
		// 
		const x = i >= 0 ? num1[i] + "0" : 0;
		const y = j >= 0 ? num2[j] + "0" : 0;
		const result = (x + y) % 10;
		ans.push(result % 10);
		add = Math.floor(result / 10);
		i --;
		j --;
	}
	return ans.reverse().join("");
}

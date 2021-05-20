const num = 9999;

const formate = (num) => {
  let num2 = `${num}`.split("");
	for (let i = 0; i < num2.length; i ++) {
		if (i % 3 === 0 && i > 0) {
			console.log(i)
			num2[i] = `,${num2[i]}`;
		}
	}
	const formatedNum = num2.join('');
	return formatedNum;
}

console.log(formate(num));
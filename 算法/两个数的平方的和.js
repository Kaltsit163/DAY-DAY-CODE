const twoSumSqrt = (s) => {
	const target = Math.floor(Math.pow(s, 0.5));
	for (let i = 0; i <= target; i++) {
			let target = s - i * i;
			let targetSqrt = Math.pow(target, 0.5);
			if (targetSqrt === parseInt(targetSqrt)) {
				return true;
			}
	}
	return false;
}

console.log(twoSumSqrt(7))
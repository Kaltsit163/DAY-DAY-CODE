const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

const promiseAll = pros => {
  const L = pros.length;
	const R = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < L; i++) {
			pros[i].then((res) => {
				R.push(res);
				if (R.length === L) {
					resolve(R);
				}
			}).catch((err) => {
				reject(err);
			})
		}
  });
};

promiseAll([p1, p2, p3])
  .then(res => {
    console.log('res', res);
  })
  .catch(err => {
    console.log('err', err);
  });

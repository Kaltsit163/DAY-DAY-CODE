const p1 = Promise.resolve(1);
const p2 = Promise.reject(2);
const p3 = Promise.resolve(3);

const promiseRace = pros => {
  const L = pros.length;
	const R = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < L; i++) {
			pros[i].then((res) => {
				resolve(res);
			}).catch((err) => {
				reject(err);
			})
		}
  });
};

promiseRace([p1, p2, p3])
  .then(res => {
    console.log('res', res);
  })
  .catch(err => {
    console.log('err', err);
  });

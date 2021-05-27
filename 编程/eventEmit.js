class eventEmit {
	constructor () {
		this.queue = {};
	}
	emit (action, data) {
		if (this.queue[action]) {
			for (let i = 0; i < this.queue[action].length; i ++) {
				const fn = this.queue[action][i];
				fn && fn.call(this, data)
			}
		}
	}
	on (action, cb) {
		if (!this.queue[action]) {
			this.queue[action] = [];
		}
		this.queue[action].push(cb);
	}
	off (action, cb) {
		if (this.queue[action]) {
			const idx = this.queue[action].indexOf(cb);
			this.queue[action].splice(idx, 1);
		}
	}
	once (action, cb) {
		const fx = (...args) => {
			cb && cb(args);
			this.off(action, fx);
		};
    this.on(action, fx)
	}
}

const event = new eventEmit();

event.on('say', (res) => {
	console.log(1);
})

event.once('say', (res) => {
	console.log(res, 2);
})

event.on('say', (res) => {
	console.log(res, 3);
})

event.emit('say', { paylaod: 1 });

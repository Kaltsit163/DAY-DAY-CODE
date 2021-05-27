class LazyMan {
	constructor (name) {
		this.queue = [];
		this.name = name;
		return this;
	}
	next (...args) {
		const fx = this.queue.shift();
		fx && fx(args);
	}
	say () {
		const fn = () => {
			console.log(`i am ${this.name} ~ `);
		};
		this.queue.push(fn);
		this.next();
		return this;
	}
	eat (food) {
		const fn = (food) => {
			console.log(`i am eat: ${food} ~ `);
		};
		this.queue.push(fn);
		this.next(food);
		return this;
	}
	sleep (time) {
		const fn = (food) => {
			setTimeout(() => {
				console.log(`sleep ${time} s`);
			}, time * 1000);
		};
		this.queue.push(fn);
		this.next();
		return this;
	}
	awake (time) {
		const fn = () => {
			setTimeout(() => {
				console.log(`awake`);
			}, time * 1000);
		};
		this.queue.unshift(fn);
		this.next();
		return this;
	}
}

const pony = new LazyMan('Pony');

pony.say().eat('apple').sleep(3).awake(1);

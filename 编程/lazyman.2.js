class Lazy {
  constructor(name) {
    this.name = [];
		this.queue = Promise.resolve();
		this.lock = [];
  }
	eat (food) {
		this.queue = this.queue.then(() => {
			return new Promise(resolve => {
				console.log('i am eat: ' + food);
				resolve();
			})
		})
		return this;
	}
	sleep (time) {
		this.queue = this.queue.then(() => {
			return new Promise(resolve => {
				const id = setTimeout(() => {
					console.log('sleep: ' + time + 's');
					const idx = this.lock.indexOf(id);
					if (idx >= 0) {
						this.lock.splice(idx, 1);
					}
					clearTimeout(id);
					resolve();
				}, 1000 * time);
				this.lock.push(id);
			})
		})
		return this;
	}
	awake () {
		this.queue = this.queue.then(() => {
			return new Promise(resolve => {
				console.log('i am awake');
				for (let i = 0; i < this.lock.length; i ++) {
					const idx = this.lock.indexOf(id);
						if (idx >= 0) {
							this.lock.splice(idx, 1);
						}
						clearTimeout(id);
				}
				resolve();
			})
		});
		console.log(666);
		return this;
	}
}

const human = new Lazy("Pony");

human.eat('APPLE').sleep(5).awake();
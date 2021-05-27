function human(name) {
  return new Human(name);
}

function Human(name) {
  this.name = name;
  this.queue = Promise.resolve();
}

Human.prototype.sayHello = function () {
	this.queue = this.queue.then(() => {
    return new Promise(resolve => {
      console.log(`I am ${this.name}`);
      resolve();
    });
  });
  return this;
};

Human.prototype.eat = function (food) {
  this.queue = this.queue.then(() => {
    return new Promise(resolve => {
      console.log('Eat: ' + food);
      resolve();
    });
  });
  return this;
};

Human.prototype.sleep = function (time) {
  this.queue = this.queue.then(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`Sleep ${time}s`);
        resolve();
      }, time * 1000);
    });
  });
  return this;
};

Human.prototype.go = function () {
  this.queue = this.queue.then(() => {
    return new Promise(resolve => {
      console.log('Go');
      resolve();
    });
  });
  return this;
};

Human.prototype.rest = function (time) {
  this.queue = this.queue.then(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`Rest ${time}s`);
        resolve();
      }, time * 1000);
    });
  });
  return this;
};

human('Jack').sayHello().eat('APPLE').sleep(5).go().rest(10);

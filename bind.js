const app = {
    name: 'app',
    getName(version) {
        console.log(this.name + ': ' + version)
    }
};

Function.prototype.bind2 = function () {
    var fn = this;
    var argsParent = [...arguments];
    return function () {
        fn.call(...argsParent, ...arguments);
    };
}

app.getName.bind2({ name: 'hello' }, 1, 1)(2.2);

app.getName.bind2.call(app.getName, { name: 'hello' }, 1.1)(2.2);

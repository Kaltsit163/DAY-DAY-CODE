const app = {
    name: 'app',
    getName() {
        console.log(this.name)
    }
};

app.getName();

app.getName.call({ name: 'hello' });

Function.prototype.call2 = function (context = window, ...args) {
    context.fn = this;
    const result = context.fn(...args)
    delete context.fn;
    return result;
}

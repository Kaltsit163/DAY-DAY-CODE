const app = {
    version: '1.0.0',
    getVersion() {
        console.log(this)
    }
};

app.getVersion();

app.getVersion.call({ version: '1.2.0' });


// Function.prototype.call2 = function (context = window, ...args) {
//     context.fn = this;
//     const result = context.fn(...args)
//     delete context.fn;
//     return result;
// }

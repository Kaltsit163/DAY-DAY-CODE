function deb (fn, time) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, time); 
    }
}

function throttle (fn, time) {
    let mark = true;
    return function () {
        if (!mask) {
            return
        }
        mark = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            mark = true;
        }, time);
    }
}
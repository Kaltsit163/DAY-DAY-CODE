const debonce = (fn, time) => {
    // 1. 执行的时机，永远在最后一次触发的 + time 时
    // 永远只看最后一次的，延迟满足，
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

const thorttle = (fn ,time) => {
    // 贤者时间
    let lock = false;
    return function () {
        if (lock) {
            return false;
        }
        lock = true;
        setTimeout(() => {
            fn.apply(this, arguments);
            lock = true;
        }, time);
    }
}

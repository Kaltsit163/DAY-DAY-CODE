const deepClone = (target, map = new WeakMap()) => {
    const getType = (data) => {
        return Object.prototype.toString.call(data);
    };
    if (typeof target === 'object' || target === 'function') {
        let cloned = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return target;
        }
        map.set(target, cloned);
        for (const k in target) {
            cloned[k] = deepClone(target[k]);
        }
        return cloned;
    } else {
        return target
    }
}
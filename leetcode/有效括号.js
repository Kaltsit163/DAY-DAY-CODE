var isValid = function (s) {
    const len = s.length;
    if (len === 0 || len % 2 > 0) {
        return false;
    }; // 如果为0，或者奇数长度，直接就判断为失败
    const map = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    let leftArr = []
    for (let i = 0; i < len; i ++) {
        const cur = s[i];
        if (map[cur]) {
            leftArr.push(cur);
            // 如果是左侧的符号，先推入堆栈之中
        } else {
            const end = leftArr[leftArr.length - 1]; // 如果是闭合的右侧符号，就需要看看当前在栈中最后的符号，是否能与其配对
            if (cur != map[end]) { // 如果不能配对，直接就是判断为失败
                return false;
            } else {
                leftArr.pop(); // 如果配对，则清除掉刚配对的
            }
        }
    }
    return leftArr.length === 0; // 最后如果，这个栈清空了，就成功，如果还有没有清空的，就失败
};

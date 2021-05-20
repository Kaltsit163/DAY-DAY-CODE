const reversePrint = (head) => {
    let arr = [];
    let head = point;
    while (point !== null) {
        arr.push(point.value)
        point = point.next
    }
    let arr2 = [];
    for (let i = 0; i < arr.length; i ++) {
        arr2.push(arr.pop());
    }
    return arr;
}
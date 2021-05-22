let a = 1;
let b = {
    n: 1
}

function setA(num) {
    a = num;
}

function setB(num) {
    b.n = num
}

module.exports =  {
    setB, b, a, setA
}
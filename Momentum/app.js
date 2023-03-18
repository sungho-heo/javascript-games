const caculator = {
    add: function (a, b) {
        console.log("a + b =", a+b)
    },
    minus: function (a,b) {
        console.log("a - b =",a-b)
    },
    division: function (a, b) {
        console.log("a / b =", a/b)
    },
    multip: function (a, b) {
        console.log("a * b =", a*b)
    },
    power: function (a, b) {
        console.log("a ** b =", a**b)
    }
};

caculator.add(10,10)
caculator.minus(10,10)
caculator.division(10,10)
caculator.multip(10, 10)
caculator.power(23,10)
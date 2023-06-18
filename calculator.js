const math = require ('./math');
//1st Method
console.log(math.add(3,4));
console.log(math.subtract(3,4));
//2nd Method
const {multiply, divide} = math;
console.log(multiply(3,4));
console.log(divide(3,4));
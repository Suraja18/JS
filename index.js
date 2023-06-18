//Calling a add.js file
const add = require ('./add');

console.log('Hello World Welcome to Node JS');
//Creating a object of add function
const sum1 = add(3,4);
const sum2 = add(5,5);
console.log(sum1);
console.log(sum2);

//"comment" = "node --watch filename it enables experimental mode"

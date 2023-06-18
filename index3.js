const hero = require ('./constructor2');

const name1 = new hero("Suraj");
console.log(name1.getName());
name1.setName("Suraj Adhikari");
console.log(name1.getName());

const name2 = new hero("Suraj Adhikari 18");
console.log(name2.getName());


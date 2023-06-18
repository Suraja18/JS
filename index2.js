const hero = require ('./constructor');
//Printing Default Value of hero.
console.log(hero.getName());
//Changing the default value into Suraj Adhikari.
hero.setName("Suraj Adhikari");
//Printing the changed value.
console.log(hero.getName());

const hero2 = require ('./constructor');
//Value os Suraj Adhikari remains constant for another object as well
console.log(hero2.getName());
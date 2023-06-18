function greet (name) {
    console.log(`Hello ${name}`);
}

function greetName (greetN) {
    const name = "Suraj Adhikari";
    greetN(name);
}

greetName(greet);
const EventEmitter = require("node:events");

const emitter = new EventEmitter();
//(size, topping) is for arguments passing i no arguments not needed.
emitter.on("order-pizza", (size, topping) => {
    console.log(`Order Received! Baking a ${size} pizza with ${topping}`);
});
emitter.on("order-pizza", (size, topping) => {
    if(size == "large")
    {
        console.log(`Serving a drink to him`);
    }
    if(topping == "mushrooms")
    {
        console.log(`Serving a ciggrette to him`);
    }
    
});
//Large and mushroom are only argument which can be passed similar with order-pizze function
console.log("Placing a Order");
emitter.emit("order-pizza", "large", "mushrooms");
const PizzaShop = require("./pizzashope");
const drink = require("./drinkmachine");

const pizzaShop = new PizzaShop();
const drinks = new drink();



pizzaShop.on("order", (size, topping) => {
    console.log(`Order Received! Baking a ${size} pizza with ${topping}`);
    drinks.serveDrink(size);
});
pizzaShop.on("order", (size, topping) => {
    if(size == "large")
    {
        console.log(`Serving a drink to him`);
    }
    if(topping == "mushrooms")
    {
        console.log(`Serving a ciggrette to him`);
    }
    
});

pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrderNumber();




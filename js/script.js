// Global variables
let pizzas = [];
let options, size, crust, toppings;

// Pizza object constructor
function PizzaItem(size, toppings, crust, individualCost) {
    this.sizeName = size,
    this.toppingsType = toppings,
    this.crustName = crust,
    this.cost = individualCost
}

fetchInputs = () => {
    options = document.querySelectorAll("[name='toppings']:checked");
    size = document.querySelector("[name='sizes']:checked").value;
    crust = document.querySelector("[name='crust']:checked").value;
    console.log(size);
}


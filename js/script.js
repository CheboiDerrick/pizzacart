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

// get the user inputs
fetchInputs = () => {
    options = document.querySelectorAll("[name='toppings']:checked");
    size = document.querySelector("[name='sizes']:checked").value;
    crust = document.querySelector("[name='crust']:checked").value;
    console.log(size);
}

// create new pizza object on every add
createPizzaItem = () => {
    fetchInputs();
    toppings = [];
    for (let i = 0; i < options.length; i++) {
        toppings.push(options[i].value);
    };
    individualCost = myFunction();
    function myFunction() {
        let crustCost
        let sizeCost
        let toppingsCost
        if (size == 'Small') {
            sizeCost = 100;
        }
        else if (size == 'Medium') {
            sizeCost = 200;
        }
        else if (size == 'Large') {
            sizeCost = 400;
        }
        else if (size == 'X-Large') {
            sizeCost = 600;
        }
        console.log(sizeCost);
        if (crust == 'Crispy') {
            crustCost = 200;
        } else if (crust == 'Stuffed') {
            crustCost = 400;
        }
        console.log(crustCost);
        toppingsCost=0;
        toppings.forEach(element => {
            if (element == 'BBQ-Steak') {
                toppingsCost += 300;
            }
            if (element == 'Peri-Peri') {
                toppingsCost += 300;
            }
            if (element == 'Vegan') {
                toppingsCost += 200;
            }
            console.log(toppingsCost);
        });
        totalCost=crustCost + sizeCost + toppingsCost
        console.log(totalCost)
        return totalCost
    };

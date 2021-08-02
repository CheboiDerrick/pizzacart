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
    size = document.getElementById("sizes").value;
    crust = document.querySelector("[name='crust']:checked").value;
    options = document.querySelectorAll("[name='toppings']:checked");
    console.log(size);
    console.log(crust);
    console.log(options);
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
        if (size == 'mini') {
            sizeCost = 300;
        }
        else if (size == 'regular') {
            sizeCost = 450;
        }
        else if (size == 'large') {
            sizeCost = 600;
        }
        else if (size == 'fiesta') {
            sizeCost = 800;
        }
        console.log(sizeCost);
        if (crust == 'thin') {
            crustCost = 200;
        } else if (crust == 'flatbread') {
            crustCost = 300;
        } else if (crust == 'stuffed') {
            crustCost = 400;
        } else if (crust == 'bagel') {
            crustCost = 500;
        }

        console.log(crustCost);
        toppingsCost=0;
        toppings.forEach(element => {
            if (element == 'Pepperoni') {
                toppingsCost += 300;
            }
            if (element == 'Bacon') {
                toppingsCost += 300;
            }
            if (element == 'Mushroom') {
                toppingsCost += 200;
            }
            if (element == 'Greenpepper') {
                toppingsCost += 200;
            }
            console.log(toppingsCost);
        });
        totalCost=crustCost + sizeCost + toppingsCost
        console.log(totalCost)
        return totalCost
    };
    const newPizza = new PizzaItem(size, toppings, crust, individualCost)
    pizzas.push(newPizza);
    totalcost = 0;
    for (let i = 0; i < pizzas.length; i++) {
        totalcost += pizzas[i].cost;
    }
    //Output
    console.log(pizzas);
    console.log(newPizza);
    console.log(totalcost);
    console.log(newPizza.toppingsType.join(', ').toString())

    div = document.createElement('div')
    div.setAttribute('class', 'list')
    document.getElementById('item-list').appendChild(div)
    p = document.createElement('p');
    let orderText = document.createTextNode(newPizza.sizeName + ' ' + newPizza.crustName + ' ' + 'with' + ' ' + newPizza.toppingsType.join(', ').toString());
    p.setAttribute('id', 'item');
    p.appendChild(orderText);
    div.appendChild(p);
    p = document.createElement('p');
    let subTotalText = document.createTextNode(newPizza.cost);
    p.setAttribute('id', 'sub-total');
    p.appendChild(subTotalText);
    div.appendChild(p);

    // reset()
};


function reset() {
    // for (i = 0; i < document.sizes.length; i++)
    //     document.sizes[i].checked = false;


    for (i = 0; i < document.crust.length; i++)
        document.crust[i].checked = false


    for (i = 0; i < document.toppings.length; i++)
        document.toppings[i].checked = false

    // document.getElementById('totalSum').value = '';

}
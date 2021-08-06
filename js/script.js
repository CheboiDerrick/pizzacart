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
    quantity = parseInt(document.getElementById("item-quantity").value);
    console.log(size);
    console.log(crust);
    console.log(options);
    console.log(quantity);
}
let totalcost;
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
        if (size == 'Mini') {
            sizeCost = 300;
        }
        else if (size == 'Regular') {
            sizeCost = 450;
        }
        else if (size == 'Large') {
            sizeCost = 600;
        }
        else if (size == 'Fiesta') {
            sizeCost = 800;
        }
        console.log(sizeCost);
        if (crust == 'Thin') {
            crustCost = 200;
        } else if (crust == 'Flatbread') {
            crustCost = 300;
        } else if (crust == 'Stuffed') {
            crustCost = 400;
        } else if (crust == 'Pizza bagel') {
            crustCost = 500;
        }

        console.log(crustCost);
        toppingsCost = 0;
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
            if (element == 'Green pepper') {
                toppingsCost += 200;
            }
            console.log(toppingsCost);
        });
        totalCost = (crustCost + sizeCost + toppingsCost)*quantity;
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
    let subTotalText = document.createTextNode('@' + ' ' + newPizza.cost);
    p.setAttribute('id', 'sub-total');
    p.appendChild(subTotalText);
    div.appendChild(p);
    let totalText = ('Kshs' + ' ' + totalcost);
    document.getElementById('totalCost').innerHTML = totalText
    clearForm()
};

function clearForm(form) {
    $(':input', form).each(function () {
        var type = this.type;
        var tag = this.tagName.toLowerCase();
        if (type == 'checkbox' || type == 'radio')
            this.checked = false;
        else if (tag == 'select')
            this.selectedIndex = 0;
    });
};

$('#delivery').click(function () {
    custName = prompt('Enter your name')
    custLocation = prompt('Please enter your location for your delivery')
    alert('Dear ' + custName + ' your order of ' + totalcost + ' will be delivered at ' + custLocation + `.` + 'A delivery fee of 200 applied. Total order amount ' + (totalcost + 200))
})

$('#pickup').click(function () {
    custName = prompt('Enter your name')
    alert('Dear ' + custName + 'your order of Kshs ' + totalcost + ' will be ready in 10 minutes. Avail yourself for pickup. Thank you')
})
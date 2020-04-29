let pizzaToppings = ["Peppers", "Onions", "Mushrooms", "chicken"];

function greetCustomer() {
  let greeting = `Welcome to The Pizza House, our toppings are: `;
  for (let topping of pizzaToppings) {
    greeting += `${topping}, `;
  }
  console.log(greeting);
}

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size}${crust} crust pizza with`;
  for (let topping of toppings) {
    order += `${topping},`; //x = x + y
  }
  console.log(`${order}coming up!`);
  return [size, crust, toppings];
}

function preparePizza([size, crust, toppings]) {
  console.log("Cooking Pizza");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

function servePizza(pizza) {
  let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    orderReady += `${topping},`;
  }
  console.log(`${orderReady} `);
  return pizza;
}

greetCustomer();
servePizza(
  preparePizza(getPizzaOrder("small", "thin", "mushrooms", "banana peppers"))
);

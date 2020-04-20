//create two variables: pizzaPlace and numberOfToppings 
const pizzaPlace ="Just Fresh Dishes";
let numberOfTOppings = 20;

//Print the variables and their types 
console.log("Pizza Place", typeof pizzaPlace)
console.log("Number of Toppings", typeof numberOfTOppings)

//Use a template literal that uses both variables to construct a short sentence about your pizz place
console.log(`Hello welcome to, ${pizzaPlace}. Here you have the option of ${numberOfTOppings} toppings on  your pizza`)

//Make if statemnt < 10 toppings and >= 10 toppings
if(numberOfTOppings < 10) {
console.log("Quality, not quantity")
} else {
console.log("A whole lot of pizza")   
};

//Bonus: Use a loop to print all of the even numbers from 1 to numberOfToppings
for (let i=1; i <= numberOfTOppings; i++){  
    if (i%2 ===0)
    console.log(i)
}
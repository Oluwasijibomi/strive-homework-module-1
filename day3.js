/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/
​
/* EXERCISE 1
Create and array with the first 5 positive numbers
*/
​
/* let array = [2, 3, 4, 5, 6] */
​
/* EXERCISE 2
Create an object containing your name, surname, email address and age.
​
 let hafeez = {
    name: "Shiji",
    age: 25,
    religion: "christian",
    relationship: "single",
} 
​
console.log(hafeez)
*/


/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/
​
/* let hafeez = {
    name: "Shiji",
    age: 25,
    religion: "christian",
    relationship: "single",
    driversLincense: true
} 
​
console.log(hafeez) */
​
/* EXERCISE 4
Remove from the previously created object the age
*/
​
/* let human = {
    name: "Shiji",
    age: 25,
    religion: "christian",
    relationship: "single",
    driversLincense: true
} 

delete human.age
​
console.log(human) */
​
/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/
​
/* let human1 = {
    name: "Shiji",
    age: 25,
    religion: "christian",
    relationship: "single",
    driversLincense: true
};
delete human1.age;

let human2 = {
    name: "hakeem",
    email: "Hafeetech@gmail.com",
    age: 25,
    religion: "christian",
    relationship: "single",
    driversLincense: true
};

let verify;
if (human1 === human2) {
    verify = true
} else {
    verify = false
}
console.log(verify) */
​
/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/
​
/* const totalCost = function freeShipping(totalShoppingCart) {
    var shipping = 10;
    var result;
    if (totalShoppingCart > 50) {
       return "You are eligible for Free shipping";
    } else if (totalShoppingCart < 50) {
       result = totalShoppingCart + shipping
       return "shopping cart: " + totalShoppingCart + " " + "shipping: " + shipping + " " + "Total" + " " + result
    } else return "Please add to shopping cart"
}


console.log(totalCost(5));
 */
​
/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/
​
/* const totalCost = function freeShipping(totalShoppingCart) {
    var discount = totalShoppingCart * 0.2;
    totalShoppingCart = totalShoppingCart - discount;
    var shipping = 10;
    var result;
    if (totalShoppingCart > 50) {
       return "You are eligible for Free shipping";
    } else if (totalShoppingCart < 50) {
       result = totalShoppingCart + shipping
       return "shopping cart: " + totalShoppingCart + " " + "shipping: " + shipping + " " + "Total" + " " + result
    } else return "Please add to shopping cart"
}

console.log(totalCost(55)) */
​
/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/
​
/* let car1 = {
    brand: "Mercedez-benz",
    model: "GLE 550-4Matic",
    lincensePlate: "ARH1783",
}

let car2 = {
    brand: "Mercedez-benz",
    model: "GLE 550-4Matic",
    lincensePlate: "ARB7783",
}

let car3 = {
    brand: "Mercedez-benz",
    model: "GLE 550-4Matic",
    lincensePlate: "ARA6783",
}
let car4 = {
    brand: "Mercedez-benz",
    model: "GLE 550-4Matic",
    lincensePlate: "ARP4783",
}

let car5 = {
    brand: "Mercedez-benz",
    model: "GLE 550-4Matic",
    lincensePlate: "ARG9783",
} */
​
/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/
​
/* 
let carsForRent = [car1, car2, car3, car4, car5] */
​
/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
​
/* carsForRent.shift();
carsForRent.pop();

console.log(carsForRent) */
​
/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/
​
/* console.log(car2.brand);
console.log(car2.lincensePlate); */
​
/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/
​
/* let carForSale = [car2. car3, car4]

let totalCars = carForSale.length + carsForRent.length

console.log(totalCars) */
​
/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/
​
/* console.log(carForSale); */
​
/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
*/
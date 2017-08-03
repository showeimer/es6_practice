// Rest parameters

// Basic example
// let food = (param1, param2) => console.log(param1, param2);
//
// food('Tomato', 'Basil');
// food('Tomato', 'Basil', 'Garlic', 'Spinach');

// Rest example
// let food = (param1, ...param2) => console.log(param1, param2);
// food('Tomato', 'Basil', 'Garlic', 'Spinach');


// Spread operators

// Basic way
// let example = (num1, num2, num3) => console.log(num1 + num2 + num3);
// example(10, 5, 1);


// Spread operator way
// let example = (num1, num2, num3) => console.log(num1 + num2 + num3);
// let numberArray = [10, 5, 1];
//
// example(...numberArray);


// Spread operators with arrays

// let flavors = ['Chocolate', 'Vanilla'];
// let newFlavors = ['Fudge', 'Strawberry', 'Coffee'];

// Wrong, will concatenate the two arrays together, '..VanillaFudge...'
// let inventory = flavors + newFlavors;
// console.log(inventory);

// Wrong, result will have index 2 of flavors as an array (newFlavors)
// flavors.push(newFlavors);
// console.log(flavors);

// Works
// let inventory = flavors.concat(newFlavors);
// console.log(inventory);

// ES6 spread operator method
// let inventory = [...flavors, ...newFlavors];
// console.log(inventory);

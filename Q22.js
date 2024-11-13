//Write a JavaScript Program to Swap Two Variables
let a = 5;
let b = 10;

console.log(`Before swapping: a = ${a}, b = ${b}`);

// Swap using destructuring
[a, b] = [b, a];

console.log(`After swapping: a = ${a}, b = ${b}`);

//Write a program to create an Array in JavaScript
let fruits = ["Apple", "Banana", "Mango"];

let numbers = new Array(10, 20, 30, 40);


console.log("Fruits array:", fruits);
console.log("Numbers array:", numbers);


console.log("First fruit:", fruits[0]);  
console.log("Second number:", numbers[1]); 


fruits.push("Orange");  
console.log("Fruits after adding Orange:", fruits);

fruits.pop();  
console.log("Fruits after removing Orange:", fruits);

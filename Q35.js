//JavaScript Program to Check If a Variable is of Function Type
function isFunction(variable) {
    return typeof variable === 'function';
}


const myFunction = function() { return "I'm a function"; };
const myNumber = 42;
const myString = "Hello, World!";
const myArray = [1, 2, 3];

console.log(`myFunction is a function: ${isFunction(myFunction)}`); 
console.log(`myNumber is a function: ${isFunction(myNumber)}`);     
console.log(`myString is a function: ${isFunction(myString)}`);     
console.log(`myArray is a function: ${isFunction(myArray)}`);       

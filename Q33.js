//JavaScript Program to Set a Default Parameter Value for a Function	
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); 
console.log(greet());        

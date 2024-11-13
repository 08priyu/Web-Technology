//JavaScript Program to Pass a Function as Parameter
function executeFunction(func) {
    console.log("Executing the passed function...");
    return func(); 
}

function sayHello() {
    return "Hello, World!";
}

const result = executeFunction(sayHello);
console.log(result); 

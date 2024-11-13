//JavaScript Program to Pass Parameter to a set Timeout() Function
function greet(name) {
    console.log(`Hello, ${name}!`);
}

setTimeout(function() {
    greet("Alice");
}, 2000); 


setTimeout(() => {
    greet("Bob");
}, 3000); 

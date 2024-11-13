//JavaScript Program to Display the Multiplication Table
function multiplicationTable(number, range) {
    for (let i = 1; i <= range; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

// Example 
const number = 5;
const range = 10; 
multiplicationTable(number, range);

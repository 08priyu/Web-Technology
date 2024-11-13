//JavaScript Program to Find the Factorial of a Number
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// Example usage:
const number = -5;
const result = checkNumber(number);
console.log(`${number} is ${result}`);

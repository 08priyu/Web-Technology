//JavaScript Program to Check Prime Number
function isPrime(num) {
    if (num <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}

// Example 
const number = 29;
const result = isPrime(number);
console.log(`${number} is ${result ? 'a Prime Number' : 'not a Prime Number'}`);

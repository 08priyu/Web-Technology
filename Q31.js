//31	JavaScript Program to Find the Sum of Natural Numbers	CO2
function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;  
    }
    return sum;
}


const n = 10;
console.log(`The sum of the first ${n} natural numbers is: ${sumOfNaturalNumbers(n)}`);

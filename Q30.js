//JavaScript Program to Check Armstrong Number
function isArmstrongNumber(num) {
    let sum = 0;
    const digits = num.toString().split('');  
    const numDigits = digits.length;  

    
    for (let digit of digits) {
        sum += Math.pow(parseInt(digit), numDigits);
    }

    
    return sum === num;
}

const number = 153;
const result = isArmstrongNumber(number);
console.log(`${number} is ${result ? 'an Armstrong Number' : 'not an Armstrong Number'}`);

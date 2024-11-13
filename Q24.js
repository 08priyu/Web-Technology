//24	Write a JavaScript Program to Convert Decimal to Binary	CO2
function decimalToBinary(decimal) {
    if (decimal === 0) return "0";

    let binary = "";
    while (decimal > 0) {
        binary = (decimal % 2) + binary;  
        decimal = Math.floor(decimal / 2);  
    }
    return binary;
}

// Example
const decimalNumber = 10;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(`Decimal: ${decimalNumber} -> Binary: ${binaryNumber}`);

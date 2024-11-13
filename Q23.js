//Write a JavaScript Program to Convert Celsius to Fahrenheit	
// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


const celsius = 25; 
const fahrenheit = convertCelsiusToFahrenheit(celsius);

console.log(`${celsius}°C is equal to ${fahrenheit}°F`);

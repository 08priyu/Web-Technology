//32	Write a JavaScript code to enter weekday number and print day name.	CO2
function getDayName(weekdayNumber) {
    switch (weekdayNumber) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid input! Please enter a number between 1 and 7.";
    }
}

const weekdayNumber = 3;
console.log(`Day ${weekdayNumber} is: ${getDayName(weekdayNumber)}`);

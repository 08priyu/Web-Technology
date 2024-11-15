//JavaScript Program to Display Date and Time
let currentDate = new Date();


let date = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();


let formattedDate = `${date}/${month}/${year}`;
let formattedTime = `${hours}:${minutes}:${seconds}`;

console.log("Current Date:", formattedDate);
console.log("Current Time:", formattedTime);

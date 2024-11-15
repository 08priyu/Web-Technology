//JavaScript Program to Display Current Date
let currentDate = new Date();

let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; 
let year = currentDate.getFullYear();

day = day < 10 ? '0' + day : day;
month = month < 10 ? '0' + month : month;

let formattedDate = `${day}/${month}/${year}`;

console.log("Current Date:", formattedDate);

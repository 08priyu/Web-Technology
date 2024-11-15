//JavaScript Program to Format the Date
function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1; 
    let year = date.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    return `${day}/${month}/${year}`;
}


let currentDate = new Date();

let formattedDate = formatDate(currentDate);

console.log("Formatted Date:", formattedDate);

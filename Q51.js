//JavaScript Program to Convert Objects to Strings
let person = {
    name: "John",
    age: 30,
    job: "Developer"
};

let jsonString = JSON.stringify(person);

console.log("Original Object:", person);
console.log("JSON String:", jsonString);

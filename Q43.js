//JavaScript Program to Remove a Property from an Object
let person = {
    name: "John",
    age: 25,
    job: "Developer"
};

console.log("Before deletion:", person);

delete person.job;

console.log("After deletion:", person);

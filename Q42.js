//JavaScript Program to Merge Property of Two Objects	
let object1 = { name: "John", age: 25 };
let object2 = { job: "Developer", city: "New York" };

let mergedObject = Object.assign({}, object1, object2);

console.log(mergedObject);


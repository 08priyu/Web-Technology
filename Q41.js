//JavaScript Program to Loop Through an Object	
const person = { name: "Alice", age: 25, city: "Wonderland" };

console.log("Using for...in:");
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

console.log("\nUsing Object.keys():");
Object.keys(person).forEach(key => console.log(`${key}: ${person[key]}`));

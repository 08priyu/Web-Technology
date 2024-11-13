//JavaScript Program to Create Objects in Different Ways
const objLiteral = { name: "Alice", greet() { console.log(`Hello, I'm ${this.name}.`); } };

function Person(name) { this.name = name; this.greet = () => console.log(`Hello, I'm ${this.name}.`); }
const person1 = new Person("Bob");


const objWithProto = Object.create({ greet() { console.log(`Hello, I'm ${this.name}.`); } });
objWithProto.name = "Charlie";


class Animal { constructor(name) { this.name = name; } speak() { console.log(`${this.name} makes a noise.`); } }
const dog = new Animal("Buddy");


objLiteral.greet();
person1.greet();
objWithProto.greet();
dog.speak();

//JavaScript Program to Illustrate Different Set Operations
const union = (setA, setB) => new Set([...setA, ...setB]);
const intersection = (setA, setB) => new Set([...setA].filter(item => setB.has(item)));
const difference = (setA, setB) => new Set([...setA].filter(item => !setB.has(item)));
const symmetricDifference = (setA, setB) => union(difference(setA, setB), difference(setB, setA));


const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

console.log("Set A:", [...setA]);
console.log("Set B:", [...setB]);
console.log("Union:", [...union(setA, setB)]);
console.log("Intersection:", [...intersection(setA, setB)]);
console.log("Difference (A - B):", [...difference(setA, setB)]);
console.log("Symmetric Difference:", [...symmetricDifference(setA, setB)]);

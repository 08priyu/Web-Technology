//JavaScript Program to Print the Fibonacci Sequence
function printFibonacci(n) {
    let fibSequence = [];
  
    let a = 0, b = 1;

    if (n >= 1) fibSequence.push(a);
    if (n >= 2) fibSequence.push(b);

    
    for (let i = 3; i <= n; i++) {
        let nextTerm = a + b;
        fibSequence.push(nextTerm);
        a = b;
        b = nextTerm;
    }

    console.log(fibSequence.join(', '));
}


const numTerms = 10;
printFibonacci(numTerms);

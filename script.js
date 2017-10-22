//Zadanie 1
console.log("**Zadanie 1**");

const a = 'Hello';
const b = 'World';

console.log(`${a} ${b}`);



//Zadanie 2 - część 1
console.log("**Zadanie 2 - część-1**");

const multiply = (x, y) => {return x * y};

console.log(multiply(6, 5));




//Zadanie 2 - część 2
console.log("**Zadanie 2 część-2**");

const multiply1 = (p = 1, c = 1) => {return p * c};

console.log(multiply1(100));



//Zadanie 3
console.log("**Zadanie 3**");

const average = (...args) => args.reduce((a, b) => a + b) / args.length;

console.log(average(5, 5, 5, 5, 99));



//Zadanie 4
console.log("**Zadanie 4**");

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

const average1 = (...grades) => grades.reduce((a, b) => a + b) / grades.length;

console.log(average1(...grades));




//Zadanie 5
console.log("**Zadanie 5**");

const arr = [1, 4, 'Iwona', false, 'Nowak'];

const [, ,firstname , , lastname ] = arr;

console.log(firstname, lastname);
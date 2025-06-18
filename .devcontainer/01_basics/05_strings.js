const name = "Ashirvad"

const repoCount = 50

// console.log(name + repoCount + " value");  /old way to write

console.log(`My name is ${name} and my repo count is ${repoCount}`);


//Another way to declare a string
const gameName = new String('ashirvad-as')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-10, 4)
console.log(anotherString);


const newStringOne = "     ashirvad    "
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https://ashirvad.com/ashirvad%20singh"

console.log(url.replace('%20', '-'));

console.log(url.includes('ashirvad'))
console.log(url.includes('ashid'))
console.log(gameName.split('-'));











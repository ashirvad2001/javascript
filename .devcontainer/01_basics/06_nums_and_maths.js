const score = 400;
//console.log(score);


// strict
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));


const otherNumber = 123.8966

//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());  //American standard
// console.log(hundreds.toLocaleString('en-IN'));  //Indian standard





// ++++++++++++++++++++++++++++++++++++++  Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));   //abs means it gives absolute value that is from negative to positive not from positive to negative

// console.log(Math.abs(4)); // as written above

// console.log(Math.round(4.3));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));  // ceil means top value
// console.log(Math.floor(4.6));  // floor means lower value
// console.log(Math.sqrt(4));
// console.log(Math.max(4,2,6,9));
// console.log(Math.min(4,2,6,9));

console.log(Math.random());  // its value always lies between 0 and 1
console.log(Math.random() * 10);  

//Here value can be 0 also like 0.0.... after multiplying by 10 it becomes 0 so to avoid this add 1
console.log(Math.random() * 10 + 1);  //make acc to bodmas rule
console.log((Math.random() * 10) + 1);  
console.log(Math.floor((Math.random()) * 10) + 1);  

//suppose if we decide no should be between given data

const  min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min);








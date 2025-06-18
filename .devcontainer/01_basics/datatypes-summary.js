// 2 types of data types

// 1)- Primitive data types
// 7 tyes:- String, Number, Boolean, null, undefined, symbol, BigInt

// Javascript is dynamically typed language means it refers to the type value assigned to it.


const score = 100
const scoreValue=100.3
const isLoggedIn = false
const isOutsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 7463495347854378874

// 2)- Non-Primitive data type or reference type : whose value can reference to another in a memory
// 3 types:- Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"ashirvad",
    age: 23
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof myFunction)


//  https://262.ecma-international.org/


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/* 
two types of memory
1- Stack: Primitive datatypes stored here (When we use stack memory then we get a copy of a declared here)
2- Heap: Non-Primitive datatypes stored here (When we use heap memory then we get reference of original value and if we do any changes then it get changed in original value)
*/

let myYoutubeName = "ashirvaddotcom"

let anotherName = myYoutubeName

anotherName="Chai aur code"

console.log(anotherName);
console.log(myYoutubeName);


// example of non-primitive data type
let userOne = {
    email: "user@google.com",
    upi: "ok@axis"
}

let userTwo = userOne

userTwo.email = "ashirvad@google.com"

console.log(userOne.email);
console.log(userTwo.email);








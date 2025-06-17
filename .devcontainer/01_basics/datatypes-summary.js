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





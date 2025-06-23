// array- in javascript it allows to store different datatypes in single array

const myArr = [1,2,3,4,5] 
const myHeroes= ["shaktiman", "naagraj"]


const myArr2 = new Array(1,2,3,4,)
//console.log(myArr[3]);


// Array methods
// 1- push(we have to give values in bracket to insert)
// 2-pop - no need to insert value in bracket or we dont have to give arguement it delets the last element of the array. 
// 3- unshift: it add the given arguements at the first value
//4- shift: we dont have to give arguements it removes the first element 
// 5- includes: it check the given element is available or not 
// 6- Index: it gives index of the element

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);


// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);


// console.log(myArr.includes(9));

// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));


//Join:- it converts the array into string

// const newArr= myArr.join()

// console.log(myArr)
// console.log(newArr);
// console.log(typeof newArr);


// Slice:- last range is not included
//  Splice:- last range is included  and it also manipulates the original array like that part removed after slice operation
console.log("A ", myArr);


const myn1= myArr.slice(0,3)

console.log(myn1);
console.log("B ", myArr);

const myn2=myArr.splice(0,3)
console.log("C ", myArr);

console.log(myn2);




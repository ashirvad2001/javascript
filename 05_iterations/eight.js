//reduce: The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, 
// in order, passing in the return value from the calculation on the preceding element. 
// The final result of running the reducer across all elements of the array is a single value.


const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)
// console.log(myTotal);



//another method

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0 )
console.log(myTotal);



// example
const shoppingCart = [
    {
        courseName: "Javascript",
        coursePrice: 1299
    },

       {
        courseName: "Java",
        coursePrice: 999
    },

       {
        courseName: "Python",
        coursePrice: 699
    },
]

const priceToPay=shoppingCart.reduce( (acc, item) => acc + item.coursePrice, 0)
console.log(priceToPay);

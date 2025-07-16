//Map in Javascript

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (nums) => nums+10)

// console.log(newNums);




// By applying map method

// const newNums = myNums.map( (nums) => {return nums +10})

// console.log(newNums);



// **************************Chaining (simultaneously methods applied)**************************************************
// we can also different types of methods in this case

const newNums = myNums
                    .map( (num) => num*10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num>40)

console.log(newNums);



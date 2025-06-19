// Dates

let myDate = new Date()

//console.log(typeof myDate);


// console.log(myDate);
// console.log(myDate.toString()); //Output: Wed Jun 18 2025 12:03:47 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Output: Wed Jun 18 2025
// console.log(myDate.toISOString()); // Output: 2025-06-18T12:06:34.656Z
// console.log(myDate.toLocaleString());  // Output: 6/18/2025, 12:07:11 PM



//let myCreatedDate = new Date(2023, 0, 23)
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("06-19-2025")
//console.log(myCreatedDate.toLocaleString());

//console.log(myCreatedDate);
//console.log(myCreatedDate.toDateString());


//TIMESTAMP
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());


//${newDate.getDay()} and the time is.....
newDate.toLocaleString('default', {
    weekday: "long"
})


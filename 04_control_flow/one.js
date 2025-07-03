// 1)- if statement

// if(condition){}

//Operators:- <, >, <=, >=, ==, !=, ===, !==

// const isUserLoggedIn = true
// const temperature = 41

// if(temperature === 41){
//     console.log("temperature is leass than 50");
    
// } else{
//     console.log("greater than 50");
    
// }

// if(2!=3){
//     console.log("executed");
    
// }

// if(2!=="3"){
//     console.log("executed");
    
// }

// if(2!=="3"){
//     console.log("executed");
    // }

// if(2==="3"){
//     console.log("executed");
    
// }


// const score = 200;
// if(score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);
    
// }
//     console.log(`User power: ${power}`);   // output: error came power is not defined



// **************************************************************************************************************************************

//Implicit Scope:- here we don't have need of any scope after giving condition we can directly write output but it should be in single line and inlast we have to give semicolon.
//We can also write more output by putting commas


// const balance=1000
// // if(balance>500) console.log("test");


// if(balance < 500){
//     console.log("balance is less than 500");
// } else if(balance < 750){
//     console.log("balance is less than 750");

// }else{
//     console.log("balance is less than 1200");
    
// }



//******************************************************************************************************************************************* */

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if(isUserLoggedIn && debitCard){
//     console.log("Allow to buy course");
    
// }

if(isUserLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
    
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}




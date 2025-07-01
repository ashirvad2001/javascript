//This :- is a keyword which is used to refer current context.


const user  = {
    username: "Ashirvad",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "Sam"      // from here context is changed so now this.userbame refers to welcomeMessage is changed
// user.welcomeMessage()   



//console.log(this);   //  here result is {} empty but in case of browser it is showing window 


// function chai(){
//     let username = "Ashirvad"
//     //console.log(this);
//     console.log(this.username);   // here output is undefined
    
     
// }
// chai()





//**************************************************************************************************************** */ 



// const  chai=function(){
//     let username = "Ashirvad"
//     //console.log(this);
//     console.log(this.username);   //  output is undefined here also
    
     
// }
// chai()



// *********************************************** Arrow Function *******************************

//  const  chai=() => {                                                      // it becomes here arrow function
//     let username = "Ashirvad"
//     console.log(this);        //  output is {} here
//     console.log(this.username);   //  output is undefined here
    
     
// }
// chai()



// const addTwo= (num1, num2) => {
//     return num1 + num2         //explicit return means we write return
// }

// console.log(addTwo(3,4));



//Another method to write is in implicit form means we assume that our code is of only one line

//const addTwo=(num1, num2) => num1+num2
//const addTwo=(num1, num2) => (num1+num2)   // another way so if we put curly brackets then we have to write return otherwise if we use parenthesis then we dont have the need

//if we want to return object 
const addTwo=(num1, num2) => ({username: "Ashirvad"})    // so to make it as object we have to wrap the value with curly braces inside parenthesis

console.log(addTwo(3,4));
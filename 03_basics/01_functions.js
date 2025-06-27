//Function:- 

function sayMyName(){
    console.log("A");
    console.log("s");
    console.log("h");
    console.log("i");
    
}

//sayMyName()

// when we make definition at that time the input we take are called parameters and when we call the function then at that time we pass the value that is called arguments. 
function addTwoNumbers(number1, number2){
    console.log(number1+number2);
    
}

addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

//let store in variable

// const result = addTwoNumbers(3,5)
// console.log("Result: ",result);  // here it shows that it does not return the value result=8 it just print the result so next step we write another way:-





function addTwoNumbers(number1, number2){
    // let result=number1+number2;
    // //console.log("ashirvad");           // here it will print because return is written after this
    // return result;
    // //console.log("ashirvad");      //after passing  return value it will not give any type of output or print
    

    return number1+number2;   //another method to return the value
    
}

const result = addTwoNumbers(3,5);
//console.log("Result: ",result);




function loginUserMessage(username){
    // if(username===undefined){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("ashirvad"))
//console.log(loginUserMessage(""))                  // just logged in
//console.log(loginUserMessage())                  // undefined just logged in







/********************************************Functions with array and object*****************************************************/ 
// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(200, 300, 500));



function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

//console.log(calculateCartPrice(200, 300, 500, 2000));  // it means here that val1 and val2 store 200 and 300 respectively and rest value stored in array



//Function with object

const user = {
    username: "Ashirvad",
    price: 199

}

function handleObject(anyUser){
    console.log(`Username is ${anyUser.username} and price is ${anyUser.price}`);
    
}

//handleObject(user);

handleObject({
    username: "Sam",
    price: 399
})






//with array
const myNewArray = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]

}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,300,300,800]));

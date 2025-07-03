//const userEmail = "Ashirvad@email.com"
//const userEmail = ""
// const userEmail = []

// if(userEmail){
//     console.log("Got user email");
    
// }else{
//     console.log("Don't have user email");
    
// }


//falsy value:- false, 0, -0, BigInt, 0n, "", null, undefined, NaN  except this all are truthy values


// Some truthy values are:-
// "0", 'false', " ", [], {}, function(){}


//to check array
// if(userEmail.length===0){
//     console.log("array is empty");
    
// }

// const emptyObject = {}

// if (Object.keys(emptyObject).length===0) {
//     console.log("Object is empty");
    
// }




//Nullish Coalescing operator (??): it is a type of operator where we mainly check on (null and undefined)

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10     //here outpit is 10 so firstly it will check 
                      // so this is new operator who checks the safety like if null came then some points maybe some code not runs properly so it will check and assigned a safe value

// val1 = undefined ?? 10
val1 = null ?? 10 ?? 15           // always first value after null

console.log(val1);



// ***************************************************************************************************************************************
//Ternary Operator
// condition ? true:false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80");


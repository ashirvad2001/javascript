// we can declare object by two ways :- one is literal and other is constructor
// singleton:- if we make object through constructor hen it will make singleton object
// Object.create //singleton type


//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ashirvad",
    "full name": "Ashirvad Singh",
   // mySym: "myKey1",  it behaves as a string here to make it symbol datatype  write in square bracket
    [mySym]: "myKey1",
    age: 23,
    location: "Maharajganj",
    email: "ashirvad@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

 //console.log(JsUser.email);
 //console.log(JsUser["email"]);
// console.log(JsUser["full name"]);  // it can be witten in dot method
// //console.log(mySym);
// console.log(JsUser[mySym]);


JsUser.email = "ashirvad@gmail.com"
// Object.freeze(JsUser)
JsUser.email ="ashirvad@microsoft.com"
//console.log(JsUser);



//By adding function

JsUser.greeting = function(){
    console.log("Hello Js user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`);
    
}

//console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



const accountId=12345
let accountEmail="ashi@gmail.com"
let accountPassword ="567745"
accountCity="Pune"   //variable can be declared by this way also without writing const let and var but not the right way
let accountState;

// accountId=76678  //not allowed



/*
prefer not to use var
because of issue in block scope and functional scope

*/


accountEmail="abcd@gmail.com"
accountPassword="21212121"
accountCity="Bengaluru"
// console.log(accountId);
// console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
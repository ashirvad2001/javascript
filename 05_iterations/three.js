// for of

// ["", "", ""]
// [{}, {}, {}]


const arr  = [1,2,3,4,5]
 for (const num of arr) {
    //console.log(num);
    
 }


 const greetings = "Hello world"
 for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
    
 }


//Map :- The Map object in JavaScript is a collection of key-value pairs that maintains the insertion order of the keys, allowing for efficient retrieval and manipulation of data. 
// it is always know for its unique value like no duplicate values 
// it prints the output in order and if any value comes more than one time then it will print only once and the value comes first will be rinted first


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('UK', "United Kingdom")
map.set('IN', "India")              // no duplicate value


//console.log(map);


// for(const key of map){
//    console.log(key);
   
// }



for(const [key, value] of map){                             //destructuring of array
   console.log(key, ':-', value);
   
}



// ********** In case of Object******************************************************************************

const myObject={
   game1: 'NFS',
   game2: 'Spiderman'
}

// for (const key of myObject) {
//    console.log(key);
   
// }


for (const [key, value] of myObject) {
   console.log(key, ':-', value);
   
}


// so above in both cases object is not iterable. We can not write for of in this object cases.

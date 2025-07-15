// for in loop:-
//applying in object



const myObject={
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//    console.log(key);
   
// }

for (const key in myObject) {
   //console.log(myObject[key]);
   //console.log(`${key} shortcut is for ${myObject[key]}`);
   
}


//***************** check for in case of array***************************************** */
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
    // console.log(key);
    //console.log(programming[key]);
    
}


//checking in map function

// so here no output comes means map iteration is not possible in for in loop

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('UK', "United Kingdom")
map.set('IN', "India") 

for (const key in map) {
    console.log(key);
    
}
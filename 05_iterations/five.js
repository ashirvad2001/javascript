// forecah loop

const coding = ["html", "css", "js", "java", "python", "ruby"]

// coding.forEach(function (val){
//     console.log(val);
    
// })


//with arrow function
// coding.forEach((item)=>{
//     console.log(item);
    
// })



// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)




// coding.forEach((item, index, array) => {
//     console.log(item, index, array);
    
// })



const myCoding= [
    {
        languageName : "Javascript",
        languageFileName: "js"
    },

     {
        languageName : "Java",
        languageFileName: "jv"
    },

     {
        languageName : "Python",
        languageFileName: "py"
    },

]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})
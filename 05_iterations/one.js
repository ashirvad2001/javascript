//for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
       // console.log("5 is the best number");
        
    }
    //console.log(element);
        
}

//console.log(element);



// **********************************************************************************************

for (let i = 1; i <= 3; i++) {
    //.log(`Outer loop value: ${i}`);
    for (let j = 1; j < 5; j++) {
       // console.log(`inner loop value is ${j} and outer loop value is ${i}`);
        //console.log(`${i}*${j} = ${i*j}`);
        
        
    }
    
}



// *****************************************************************************************************
let array = ["flash", "batman", "superman"]
//console.log(array.length);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //console.log(element);
    
    
}


// break and continue
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("Detected 5");
//         break
        
//     }

//     console.log(`Value of i is ${index}`);
    
    
// }



for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        continue
    }
    console.log(`Value of i is ${index}`);   
}



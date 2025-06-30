// Scopes :-when {} comes with any function or if else then it is called as scope
// 2 types: block scope{anything inside the curly braces or a specific block} and global scope{anything which is written globally outside any block}
let a=10
const b=20
var c= 30


// console.log(a);
// console.log(b);
// console.log(c);


//nested scope

function one(){
    const username = "Ashirvad"

    function two(){
        const  website = "youtube"
        //console.log(username);
        
    }
    //console.log(website);

    //two()
    
}

//one();





// ++++++++++++++++++++++++++++++  Interesting +++++++++++++++++++++++++++++++++++++++


console.log(addone(5));



function addone(num){
    return num+1
}

//addone(5)


console.log(addTwo(6));


const addTwo = function(num){
    return num + 2
}

// addTwo(5)
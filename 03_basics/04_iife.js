// IIFE:- Immediately invoked Function Expression
// It is used to remove problems created due to global scope.  2)- Because of this function executed very fast. 

(function chai(){
    console.log(`DB Connected`);
    
})();                                       // use semicolon always for next iife code writing

// ( () =>{
//     console.log(`DB Connected two`);
    
// } )()




( (name) =>{
    console.log(`DB Connected two ${name}`);
    
} )('Ashirvad')
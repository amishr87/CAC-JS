// Immediately Invoked Function Expressions (IIFE)

function chai(){
    console.log("Hello Everyone");
}
chai(); 

// It is essential to use ; after function end if you are using iife in your program
// This is because iife does not know when to end the context of the function

//When we want to invoke our function immediately after declaration, we use IIFE
(function chai2(){
    console.log("Hello Everyone");
})();


// There are 2 pairs of paranthesis being used
// First () is to hold the function
// Second () is to execute the function

//iife also works with arrow function
( () => {
    console.log("Hello Everyone");
})();


//dealing with parameters
( (name) => {
    console.log(`Hello, ${name}`);
})('Anand');

//Since the second  () is to execute the function, that is where you enter the parameter value just like in normal functions
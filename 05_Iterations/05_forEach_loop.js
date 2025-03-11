const coding = ["js", "ruby", "java", "python", "cpp"]

//  in the next 2 examples, forEach loop takes a callback function as a parameter
//  this callback fucntion iteratively takes in values from the array as its parameter
//  callback function does not have a name


coding.forEach( function (val){
    console.log(val);
} )

coding.forEach( (item) => {
    console.log(item);
} )


//
// 
// 
function printMe(item){
    console.log(item);
}

coding.forEach(printMe) //here we did not put () after the function name as we are putting the reference of the function as a parameter and not executing it. forEach loop can take care of the execution itself 

// forEach loop can access multiple values from the array in each iteration:
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
        price: 999
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    console.log(item.price);
} )
// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// console.log();

// if(true)
// {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// //console.log(a);   //a is not defined
// //console.log(b);   //b is not defined
// console.log(c);     //c is defined as var does not follow scope rules, so avoid using var

// console.log();

let a = 300

if(true)
{
    let a = 10
    console.log("Inner Value of a: ", a);
}

console.log("Outer Value of a: ", a);
console.log();

function one(){
    const username = "Anand"

    function two(){
        const website = "youtube"
        console.log(username);              // child func. can access the parent func.'s variables 
    }

    //console.log(website);                 // parent func. cannot access child func. variables
    two()
}

one()
console.log();

if(true){
    const username = "Anand"
    if(username === "Anand")
    {
        const website = "youtube"
        console.log(`${username} ${website}`);
    }
}


//another way of using functions

const addTwo = function(num){
    return num+2
}

addTwo(5) 

console.log(addTwo(5));
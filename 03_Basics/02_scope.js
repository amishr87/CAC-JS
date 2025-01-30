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
//Primitive Datatypes

// 7 types: Number, String, Boolean, Null, Undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)  // will be false as symbol assignes a unique value

// Non-Primitive(Reference) Datatypes

// Array, Objects, Functions

const heroes = ["Batman", "Superman", "Flash"];

let myObj = {
    name: "Anand",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}
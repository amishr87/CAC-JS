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

// *******************************************************

// Stack Memory (Primitive Datatypes)

let myName = "AnandKMishra"

let anotherName = myName

anotherName = "AKM"

console.log(myName);
console.log(anotherName);

// Heap Memory (Reference Datatypes)


let userOne = {
    email: "amishr87@asu.edu",
    upi: "user@paytm"
}

let userTwo = userOne

userTwo.email = "akm@asu.edu";

console.log(userOne.email);
console.log(userTwo.email);

//both have the email akm@asu.edu as userTwo uses reference of UserOne so the info is changed at the source
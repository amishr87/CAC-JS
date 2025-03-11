const user = {
    username: "Anand",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website.`);
    }
}

user.welcomeMessage()

user.username = "Sam"
user.welcomeMessage()               //this will print out Sam instead of Anand as we used this keyword in the function and did not hard code the value of username to Anand

console.log(this)                   //will return empty object {}

function chai(){
    console.log(this)               //will return an object with lots of info
}

chai()

function chai2(){
    let username = "Anand"
    console.log(this.username)      //will return undefined, means we are not able to use this inside a function like we were doing inside an object
}

chai2()

const chai3 = function(){           //another way to write above code
    let username = "Anand"
    console.log(this.username)      //same result (undefined)
}
chai3()

//Arrow function
const chai4 = () => {           //just another way to write above code
    let username = "Anand"
    console.log(this.username)      //same result (undefined)
}
chai4()

//Arrow Function Sytax
const addTwo = (num1, num2) => {
    return num1+num2
}

console.log(addTwo(3, 4));

//Implicit Return 
//Used for 1 line code in Arrow functions
//Same code as above one
const addTwoImplicit = (num1, num2) => num1+num2
console.log(addTwoImplicit(3,4));

const addTwoImplicit2 = (num1, num2) => (num1+num2) //same code as above
console.log(addTwoImplicit(3,4));

const returnName = () => (username = "Anand")
console.log(returnName());                          //will return Anand

const returnObj = () => ({username: "Anand"})
console.log(returnObj());                          //will return the object that contains username: "Anand"
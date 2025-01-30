function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log();
}

sayMyName()

function addTwoNum(num1, num2){
    console.log(num1 + num2);
    let sum = num1 + num2
    return sum
}


addTwoNum(3, 4)
addTwoNum(3, "4")
addTwoNum(3, "a")
addTwoNum(3, null)
console.log();

const retVal = addTwoNum(3, 4)  //prints the console statement insite and stores return value in retVal
console.log(retVal)
console.log();

function loginUserMessage(username){
    return `${username} just logged in.`
}

console.log(loginUserMessage("Anand"));
console.log();

console.log(loginUserMessage(""));
console.log();

console.log(loginUserMessage());
console.log();


//give a parameter default value in case no value was inputted by the user
function testUserMessage(username = "Someone"){
    return `${username} just logged in.`
}

console.log(testUserMessage());
console.log();

//In case number of parameters are not known
// ... is known as the spread operator or the rest operator depending on its use
// Here it is called rest operator
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 500));
console.log();

//another format
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 500, 800, 900)); //200 is stored in val1, 300 in val2, and the rest in num1
console.log();

const user = {
    user: "Anand",
    price: 199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.user} and price is ${anyObject.price}`);
}

handleObject(user)
console.log();

//make an object while calling the funcion
handleObject({
    user: "Sam",
    price: 499
})
console.log();

const myNewArray = [1, 2, 3, 4, 5]

function returnArray(array){
    return array[1]
}

console.log(returnArray(myNewArray));
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
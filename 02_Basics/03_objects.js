//object literals
const user = {
    name: "Anand",
    age: 22,
    email: "amishr87@asu.edu",
    isLoggedIn: true,
    lastLoginDays: ["Wednesday", "Friday"]
}

//2 ways to access keys
console.log(user.email);
console.log(user["email"]);

//using symbols (a type of datatype)
const mySymbol = Symbol("key1");

const user2 = {
    name: "Anand",
    age: 22,
    email: "amishr87@asu.edu",
    symbol: mySymbol,
    [mySymbol]: "key1",
    isLoggedIn: true,
    lastLoginDays: ["Wednesday", "Friday"]
}

console.log(user2.email);
console.log(user2.symbol);
console.log(typeof user2.symbol);

console.log(user2[mySymbol]);
console.log(typeof user2[mySymbol]);

//change change key values
user2.email = "akm@asu.edu";
console.log(user2.email);

//freeze the object from getting changed
//Object.freeze(user2);

//lets try changing
user2.email = "testing@asu.edu";
console.log(user2.email);

user2.greeting = function(){
    console.log("hello users");
}
console.log(user2.greeting());   

user2.greeting2 = function(){
    console.log(`hello user ${this.name}`);
}
console.log(user2.greeting2());   

function setUsername(username){
    //assume some complex DB calls are happening
    this.username = username;
}

function createUser(username, email, password){
    setUsername(username);
    this.email = email;
    this.password = password;
}

const chai = new createUser("CAC", "cac@fb.com", "123");
console.log(chai);  //username is not getting set. Why?
//watch for the answer: https://www.youtube.com/watch?v=-owpuf4lbyU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=44 

function createUserCall(username, email, password){
    setUsername.call(this, username);             //call keyword is used so that the variables declared in setUsername function do not get emptied out of the call stack and can be used in this line
    this.email = email;
    this.password = password;
}
const chaiNew = new createUserCall("CAC", "cac@fb.com", "123");
console.log(chaiNew);
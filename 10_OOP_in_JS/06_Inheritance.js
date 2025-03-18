class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("CAC", "cac@teacher.com", "123");
chai.addCourse();

const masalaTea = new User("masalaTea");
//masalaTea.addCourse()                         //masalaTea does not have access to addCourse()  
masalaTea.logMe();

console.log(chai instanceof User);
// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitest = function(){
    console.log(`heyHitesh`);
}

heroPower.hitesh();
myHeros.hitesh();
myHeros.heyHitest();
// heroPower.heyHitest();           //this will not have access since heyHitest is a function assined to Array so its root prototype i.e. object, will have access but any other function will not have access as it is on the same heirarchal level as Array

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;               //This will give Teacher access to everything in User by making User a prototype of Teacher

console.log(Teacher.name);
console.log(TASupport.isAvailable);

//Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
//This makes Teacher a prototype of TeachingSupport

let anotherUsername = "CAC     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"anand".trueLength()
"      akm       ".trueLength()
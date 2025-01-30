//objects singleton

const tinderUser = {};

tinderUser.id = "54276"
tinderUser.name = "Arthur"
tinderUser.isLoggerIn = false

console.log(tinderUser);
console.log();

const regularUser = {
    email: "reg@gmail.com",
    fullname: {                     //this is an example of object nesting
        userfullname: {
            firstname: "Anand",
            lastname: "Mishra"
        }
    }
}

console.log(regularUser);
console.log();
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log();

//combining objects
const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const combined = Object.assign({}, obj1, obj2)     //an empty object is used as the first parameter to use as the target object and all the following objects are considered source objects
console.log(combined);
console.log(obj1);
console.log();

const combinedTest = Object.assign(obj1, obj2)     //since no empty object is declared, obj1 will be the target as well as a source object and all objects will be combined to it i.e. original value of obj1 will change
console.log(combinedTest);
console.log(obj1);
console.log();

//another way of combining objects => spread
const obj3 = {
    1: "a",
    2: "b"
}

const obj4 = {
    3: "c",
    4: "d"
}

const spreadCombine = {...obj3, ...obj4}
console.log(spreadCombine);
console.log();

//operations on objects that are used when values are generally coming from database

const users = [
    {
        id: 1,
        email: "testing@gmail.com"
    },
    {
        id: 2,
        email: "testing2@gmail.com"
    },
    {
        id: 3,
        email: "testing3@gmail.com"
    },
]

console.log(users[1].email); //to access a particular value of a single user
console.log();

//accessing keys and values and putting them into an array
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(typeof Object.keys(tinderUser));        //its an array
console.log(Object.values(tinderUser));
console.log(typeof Object.values(tinderUser));      //its an array
console.log(Object.entries(tinderUser));
console.log(typeof Object.entries(tinderUser));     //its an array
console.log();

//check if a user has a property(key) or not
console.log(tinderUser.hasOwnProperty('isLoggerIn'));
console.log(tinderUser.hasOwnProperty('isPresent'));
console.log();

//object de-structure
const course = {
    coursenaem: "Code in JS",
    price: "$100",
    instructor: "Hitesh"
}

const {instructor} = course
console.log(instructor);

//you can also remane the de-structured object
const {instructor: instruc} = course
console.log(instruc);

// API

// JSON format
// {
//     "name": "Anand",
//     "coursename": "Code in JS",
//     "price": 1000
// }

// This data can also be in array format in JSON
// [
//     {},
//     {},
//     {}
// ]
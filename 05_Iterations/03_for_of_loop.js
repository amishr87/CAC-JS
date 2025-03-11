//                          for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

//num is just a variable, you can name it anything else
for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
//greet is just a variable, you can name it anything else
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

//key, value are just variables, you can name them anything else
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

//Objects are not iteratable using for of loop
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
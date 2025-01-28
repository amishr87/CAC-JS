// Below is an example of string interpolation where $ sign is used to inject variables into a string that is contained in `` (backstrokes)

let name = "Anand"
let age = 22

console.log(`Hello my name is ${name} and my age is ${age}`)

const gameName = new String('Anand')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(name.toUpperCase());

const newString = gameName.substring(0,2); //substing cannot take negative values
console.log(newString);

// no need to learn slice
const newString2 = gameName.slice(-8,4); //slice can take negative values 
console.log(newString2);

//trim whitespaces
const newString3 = "     Anand      "
console.log(newString3);
console.log(newString3.trim());

//replace char
const url = "https://anand.com/anand%20krishna%20mishra";
console.log(url.replace('%20','-'));
console.log(url.replaceAll('%20','-'));

//check if string contains xyz
console.log(url.includes('Pandey'));

//split using a delimiter
const splitTest = "Anand-Krishna-Mishra"
console.log(splitTest.split('-'));
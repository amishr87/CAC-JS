const marvel_Heroes = ["Thor", "Iron Man", "Captain America", "Spiderman"];
const dc_Heroes = ["Flash", "Batman", "Superman"];

//marvel_Heroes.push(dc_Heroes);
//console.log(marvel_Heroes);


const combined_array = marvel_Heroes.concat(dc_Heroes);
console.log(combined_array);

//spread function does the same thing:
const combined_array_2 = [...marvel_Heroes, ...dc_Heroes];
console.log(combined_array_2);

//flat methods streamlines an array by making a complex array(array within an array) into a simple array
const complex_array = [1, 2 ,3 , [4, 5, 6], [7, 8]];
const simple_array = complex_array.flat(Infinity);

console.log(complex_array);
console.log(simple_array);

//check is array or not
console.log(Array.isArray("Anand"));
console.log(Array.from("Anand"));
console.log(Array.from({name: "Anand"})); //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


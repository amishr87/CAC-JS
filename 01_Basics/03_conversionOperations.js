let score = "33"
let scoreWrong = "33abc"

console.log(typeof score);
console.log(typeof scoreWrong);

let valueInNumber = Number(score)
let valueInNumber2 = Number(scoreWrong)

console.log(typeof valueInNumber, valueInNumber);
console.log(typeof valueInNumber2, valueInNumber2);  //NaN means Non a Number

//33 => 33
//"33abc" => NaN
//true => 1; false => 0
//null => 0
//undefined => NaN

let isLoggedIn = 1

let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "abc" => true
// "false" => true, as "false" is treated as a non-empty string

// ************************** Operations ********************************

let value = 3
let negValue = -value

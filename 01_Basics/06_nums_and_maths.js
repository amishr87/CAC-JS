const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); //to set the precision value

//another way to set the precision value
const num1 = 23.88345234
console.log(num1.toPrecision(4));

const hunds = 100000000
console.log(hunds.toLocaleString());  //give out value in US comma style
console.log(hunds.toLocaleString('en-IN'));  //give out value in Indian comma style

//************************************* Maths *************************************

console.log(Math.abs(-4));
console.log(Math.round(4.6));

console.log(Math.random()); //gives a value between 0 and 1
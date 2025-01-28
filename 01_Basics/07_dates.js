let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2025, 11, 27) //year, month, date
//months in js start from 0 to 11
console.log(myCreatedDate.toLocaleDateString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Date.now());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());

newDate.toLocaleDateString('default',{
    weekday: "long",
    timeZone: "xyz",
})

console.log(newDate.getDate());
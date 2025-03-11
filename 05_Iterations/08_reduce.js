const myNums = [1, 2, 3]

//  this function takes 0 as the value of acc (i.e. accumulator) and adds it to the currVal (current value)
//  in the next iteration, the value of acc gets replaced by the return value
//  This example, the funciton is simply calculating the sum of all elements in the array myNums
const myTotal = myNums.reduce(function (acc, currVal) {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc+currVal
},0)

//  Same thing using arrow dunction
//  const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
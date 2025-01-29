const arr = [1, 2, 3, 4, 5]
const myHeroes = ["Batman", "Flash"]

console.log(arr[0]);
console.log(myHeroes[1]);

const arr2 = new Array(1, 2, 3, 4)
console.log(arr2[1]);

//Array Methods

//push adds to end
arr2.push(6);
console.log(arr2);

//pop removes from end
arr2.pop();
console.log(arr2);

//unshift adds to the start
arr2.unshift(9);
console.log(arr2);

//shift removes from start
arr2.shift();
console.log(arr2);

console.log(arr2.includes(4));
console.log(arr2.indexOf(3));
console.log(arr2.indexOf(18));

//join converts array to a string with its elements separated by a comma
const newArr = arr2.join();
console.log(newArr);
console.log(typeof newArr);

//slice does not change original array
//it accesses elements from index 1 to 3-1
const newArr2 = arr2.slice(1,3);
console.log(newArr2); //slice array
console.log(arr2); //original array

//splice changes the original array by subtracting the spliced part
//it accesses elements from index 1 to 3
const newArr3 = arr2.splice(1,3);
console.log(newArr3); //slice array
console.log(arr2); //original array

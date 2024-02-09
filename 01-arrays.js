// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// Array methods

/* myArr.push(6)
myArr.pop()//last value remove
console.log(myArr); */

myArr.unshift(9)//add at start it changes all value spaces
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

// slice,splice

console.log("a", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("b",myArr);

const myn2 = myArr.splice(1,3)
console.log("c",myArr);//diff between slice & splice ()slice returns a piece of the array but it doesn't affect the original array. splice changes the original array by removing, replacing, or adding values and returns the affected values.
console.log(myn2);




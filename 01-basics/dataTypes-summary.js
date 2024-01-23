/*js is dynamic lang .JavaScript is a dynamically typed language, which means that data types of variables are determined by the 
value they hold at runtime and can change throughout the program as we assign different values to them */

// ptimative 

// 7 types : string, Number,Boolearn, null, undefined, symbol, Big

// Reference (Non primative)

// Arrays, Objects, Function

const heros = [ "shaktiman", "naagraj","dora"];
let myObj = {
    name: "shivam",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof heros);


// +++++++++++++++++++++++++++++ 

// Stack (primitive) , Heap (Non-primitive)


let myyoutubename = "shivamdotcom"

let anotherName = myyoutubename

console.log(anotherName);
console.log(myyoutubename);

let user = {
    email: "user@google.com",
    upi: "uear@ybl",
}

let userTwo = userOne


console.log(userOne.email);
console.log(userTwo.email);
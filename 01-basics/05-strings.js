const name = "shivam"
const repoCount = 50

//console.log(name + repoCount + "projects");

console.log(`hello my name is ${name} and myrepo sount is $ {repoCount}`);

const gameName= new String("shivam-hc")

//console.log(gameName[0]);

//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherStirng = gameName.slice(-8,4)
console.log(anotherStirng);

const newStringOne = "      shivam     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivam.com/shivam%20suryawanshi"

console.log(url.replace('20%','-')); 

console.log(gameName.split('-'));
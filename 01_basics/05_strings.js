// const name = "nikhil"
// const repoCount = 10
// console.log(name+repoCount+" value");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('nikhil')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
console.log(gameName.indexOf("k"));
const newString = gameName.substring(0,4)
console.log(newString);
const anotString = gameName.slice(-10,3)
console.log(anotString);
// OBJECTS LITERALS

const mySym = Symbol("key1")

const JsUser = {
    name: "nikhil",
    "full name": "Nikhil Kumar",
    [mySym]: "mykey1",
    age: 23,
    location: "indore",
    email: "nikhil@mail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(JsUser[mySym]);
JsUser.email = "nik@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "nik@microsoft.com"
// console.log(JsUser);
 
JsUser.greeting = function(){
    console.log("Hello JS lover");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User--, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
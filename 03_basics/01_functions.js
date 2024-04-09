function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}
// sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const value = addTwoNumbers(3,4)
// console.log("Result is ", value);

function loginUserMessage(username="sam"){
    if(username===undefined){
        console.log("PLEASE ENTER A USERNAME");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Nikhil"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,500));


const user = {
    username: "nikhil",
    password: "abcd123"
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and password is ${anyObject.password}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    password: "1234"
})


const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));






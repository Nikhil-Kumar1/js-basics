const user = {
    username: "nikhil",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "nik"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "nik"
//     console.log(this.username);
// }
// chai()



// const chai = () =>{
//     let username = "nik"
//     console.log(this);

// }
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addTwo(34,1));


// const addTwo = (num1 , num2) =>  (num1 + num2)

const addTwo = (num1,num2) => ({username:"nikhil"})
console.log(addTwo(3,4));

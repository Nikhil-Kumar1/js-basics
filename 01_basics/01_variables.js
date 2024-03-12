const accountId = 144553; //cannot be chnaged
let accountEmail = "nik@gmail.com";
var accountPassword = "12345";
//accountId = 2;//not allowed
accountEmail = "abc@gmail.com"
let accountState;
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword, accountState]);

// we don't use 'var' because of isssue in block scope and functional scope.

// USE ONLY 'let' and 'const'
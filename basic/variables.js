const accountId = 120056
let accountEmail = "example@gmail.com"
var accountPassword = "1234"
accountCity = "surat"
let accountState;

// accountId = 235677 Not Allowed
accountEmail = "abc@gmail.com"
accountPassword = "12345678"
accountCity = "pune"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

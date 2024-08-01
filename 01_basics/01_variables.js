const accountId = 12345
let accountEmail = "ayush@google.com"
var accountPassword = "1234556"
accountCity = "Jaipur"

// accountId = 2 // not allowed

console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "benglore"
let accountState;

/*
Prefer not to use var
because of issue in block scope an functional scope. 
*/

console.table([accountEmail, accountPassword, accountCity, accountState])

const accountID = 112233
let accountEmail = "sujan@google.com"
var accountPassword = "12345"
accountCity = "Kathmandu" 
let accountState;

// accountID = 445566 // wont happen, show error as const cannot be changed

accountEmail = "sujan@hr.com"
accountPassword = "ppasss"
accountCity = "Butwal" 

console.log(accountID)

/*
Const for constant define
let and var for variable define

dont use var, 
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])
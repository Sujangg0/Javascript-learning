function printMe(){
    console.log("Just the prrinter");
}

// printMe()

function loginUserMessager(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessager("sujan"));
// console.log(loginUserMessager());

// if dont knwo fixed no. of arguement = use rest operator
function itemCartPrice(...num1){
    return num1
} 

console.log(itemCartPrice(200, 100, 150));

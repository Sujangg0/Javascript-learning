// Creating Object, 2 method:

// singleton
// object.create 


// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Sujan",
    "Full name": "Sujan Gurung",
    [mySym]: "mykey1", // Refer to as Symbol the []
    age: 22,
    location: "Kathmandu",
    email: "sujan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Taking object value methods
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["Full name"])
// console.log(JsUser[mySym])

// Freezing object (cannot modify object)
JsUser.email = "sujan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sujan@kongo.com"

// console.log(JsUser)

// JS treat a function like a variable 
JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
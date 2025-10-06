// const tinderUser = new object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sujan"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

// object in object

const RegularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sujan",
            lastname: "gurung"
        }
    }
}

// console.log(RegularUser.fullname?.userfullname.firstname);

// Merge Objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// // can get all key or value of object
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// getting object value:
const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// can be but not this couse.courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor);


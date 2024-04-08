// const tinderUser = new Object()  single tern object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "nikhil",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// const obj3 = {obj1, obj2}
const obj4 = {5:"a", 6:"b"}

// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// **                    **                       **


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "nikhil"
}
//  course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);


// JSON
// {
//     "name": "nikil",
//     "coursem_name": "js",
//     "price": "free"
// }

[
    {},
    {},
    {}
]



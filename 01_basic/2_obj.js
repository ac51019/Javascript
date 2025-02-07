

//  const tinderUsers = new Object() // singleton object
 //let tinderUsers = {} // non singleton object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "shiv"
tinderUser.isLoggedIn = false
// console.log(tinderUsers);

const regularUser = {
    email:"someone#gmail.com",
    fullname:{
        userfullName:{
            firstname:"shiv",
            lastname:"singh"
        }
    }
}

console.log(regularUser.fullname.userfullName.firstname);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}

const obj4={
    5:"a",
    7:"b"
}


// merging object


// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// using assign (Object.assign)

// const obj3 = Object.assign(obj1,obj2,obj4)

//using spread (...)

const obj3 = {...obj1,...obj2}

console.log(obj3);


// ++++++++++  DB whne the value come from db lmost of the use 

const users = [
    {
        id: 1,
        email: "shiv@gmail.com"
    },
    {
        id: 1,
        email: "shiv@gmail.com"
    },
    {
        id: 1,
        email: "shiv@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

// imp all in future

console.log(Object.keys(tinderUser)); // need keys 
console.log(Object.values(tinderUser)); //  value 
console.log(Object.entries(tinderUser)); // entries min use but work 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // called value use (hasOwnpropety)

//+++++++++++++++++  object destructuring ++++++++++++++++++
const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"shiv"
}


// change name like coursename - name 
const {coursename : name} = course
console.log(name);

const {courseInstructor} = course

console.log(courseInstructor);



// ********** API JSON *****************

// object api write type

// { 
//     "name": "shiv",
//     "age": 25,
//     "address": "Nashik"
// }

// Array api write type

// [
//     {},
//     {},
// ]

// random user api simple for example

// https://randomuser.me/api/

// change api and all code language

  //https://jsonformatter.org/
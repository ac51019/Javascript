
// Singleton

// Objects literals

const mySym = Symbol ("key1")   // interview how to use symbol as a key 

const JsUser = {
    name: 'John',
    "Address" : "jaipur",

    // key use [ ] 
    [mySym] : "mykey1",
    age: 30,    
    occupation: 'Developer',
    email : 'john@gmail.com',
    isLoggedin : false,
    lastLoginDays : ["Monday", "Sunday"]
}

// 2 type run 

console.log(JsUser.name );
console.log(JsUser["name"]);

console.log(JsUser["Address"]);

console.log(JsUser.mySym);
console.log(typeof JsUser.mySym);


// change value 

JsUser.email= "js65@gmail.com"
console.log(JsUser.email);

// no change freeze 

// Object.freeze(JsUser)


JsUser.email= "jamshdg5@gmail.com"

console.log(JsUser.email);

console.log(JsUser);

// strin interpolation

JsUser.greeting = function(){
    console.log(`Hello this is obj part,${this.name}`);
}

JsUser.greetingTwo = function(){
    console.log(JsUser.greetingTwo);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

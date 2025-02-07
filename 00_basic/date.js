
// Date

let myDate = new Date()  // date obj
console.log(myDate.toString());

console.log(myDate.toISOString())

console.log(myDate.toJSON());

console.log(myDate.toLocaleString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);  // interview imp  

//  fix date declear

let myCreateddate = new Date (2025, 0, 26)

console.log(myCreateddate.toDateString());

let myNewcreatDate = new Date(2025,2,13,3,6)

console.log(myNewcreatDate.toLocaleString());

let newDate = new Date("2025-02-15")
console.log(newDate.toLocaleString());



// poll and timestamp  interview imp date time sec min 

let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(myCreateddate.getTime());

console.log(Math.floor(Date.now()/1000));


// 

let newDateString = new Date()

console.log(newDateString);
console.log(newDateString.getMonth());
console.log(newDateString.getDay());



// or interplusion 

// `$ {newDatestring()} and the time`

newDateString.toLocaleString('default',{
    weekday: "long",
    // timeZone = 'search google'

})
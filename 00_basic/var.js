/*
const accountId = 24243    

let accountemail = "hello@gmail.com"  

var accountPassword = "234332"

accountCity ="Rampur"   // without var use ok but wrong

let accountState
*/

// mostily use let and const do not use var because of issue in block scope and functional scope  

/*
console.log (accountId);

console.table ([accountPassword,accountState, accountCity,,accountemail]);

*/


// Practice

// const use fix value


const stdId = 10
const stdName = "Rahul"
const stdAge = 20
const stdGender = "Male"
const stdAddress = "Rampur"
const stdPhone = 1234567890
const stdEmail = "rahul@gmail.com"


// const stdName = "shiv"  no change and show error

console.table([stdId, stdName ,stdAge ,stdGender,stdAddress, stdPhone, stdEmail]);


// let update new valuse 

let drId = 1254
let drName = "Dr. Rahul"
let drAge = 30
let drGender = "Male"
let drAddress = "Nashik"
let drPhone = 9876543210
let drEmail = "dr.rahul@gmail.com"
let drFax


// Change Dr details

 drName = "Dr. Shiv"
  drAge = 35
 drGender = "Male"
drAddress = "Jaipur"
 drPhone = 1234567890
 drEmail = "dr.shiv@gmail.com"


console.table([drId, drName, drGender,drPhone,drEmail, drAddress, drAge])
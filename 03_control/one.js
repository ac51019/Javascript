
/* Opeater

==	  equal to (same)
===	  equal value and equal type (same value and type check)
!=	  not equal
!==	  not equal value or not equal type(negative sign check)
>	  greater than
<	  less than
>=	  greater than or equal to
<=	  less than or equal to
?	  ternary operator

*/

// if
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==


// console.log(`User power: ${power}`);


const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // not good for this type write code


//Nesting

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else if (balance < 1100){
    console.log("less than 1200");

} else {
    console.log("less than 1400");   
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}
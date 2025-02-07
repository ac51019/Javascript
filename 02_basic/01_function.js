


// function sayMyName (){
//     console.log(S);
//     console.log(H);
//     console.log(I);
//     console.log(V);
// }


function sayMyName (){
    console.log("Shiv");
}
// show output
sayMyName()


function addTwoNumber (num1, num2){ //parameter
    // console.log(num1 + num2);
    
    // let result = num1 + num2 
    // console.log("shiv");
    // return result

    return num1 + num2 
}

addTwoNumber()

// addTwoNumber(5,6)//arguments

const result = addTwoNumber(5,6)

console.log("result:", result);



// new fun 

function loginUserMessage(username){
    if(! username){  // ans true or false
        console.log("username is required");
        return 
    }
    return `$ {username} just logged in`
}

console.log(loginUserMessage ())

// (...) imp 
function calculateCartprice(...num1) {
    return num1
}

console.log(calculateCartprice(200,300,400,4540));

const user = {
    username: "John",
    price : 122
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleobject(user)

handleobject({
    username: "Shiv",
    price : 126
})

const myNewArray = [200,500,300,1000]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,300,600]));

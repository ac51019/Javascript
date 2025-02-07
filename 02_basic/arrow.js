// refers to current contacts (simple value), this is this


const user = {
    username : "shiv",
    price :2374 ,

    welcomeMessage : function (){
        console.log(`${this.username} , welcome to website`);  
        // console.log(this);
        
    }
}

user.welcomeMessage()

// change username 

user.username = "ram"
user.welcomeMessage()

console.log(this);

// interview question 
// engine runs inside the browser, the most global object is the window objects.


// function chai () {
//     let username = "shiv"
//     console.log(this);

// }

// chai ()

// declare arrow function 

const chai =  () => {
    let username = "shiv"
    console.log(this.username);
    
}
// run process (chai ())
chai ()


// arrow function 

// () => {}

    // explicit return (use the return keyword)

    const addTwos = (num1 , num2) => {
        num1 = num1/2
        return num1 +num2 
    }

    console.log(addTwos(3,4));

    // implicit return (I assume tha you do not need to write the return keyword because you have a one line statement)(don't have use to parentheses  ) 
    
    // const addTwo = (num1 , num2) => (num1/2) +num2 

    // or  most use react this technique 

    const addTwo = (num1 , num2) => ((num1/2)+ num2)

    console.log(addTwo(3,4));


    // obje reture 

    const homeTip = (home1 , home2) => ({homeProduct : "Poha"})

    console.log(homeTip);




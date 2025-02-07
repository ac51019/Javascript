

// {} this is scope

if (true){
    let a = 10
    const b =  20
    console.log("INNER :",a);
    
}


// console.log(a);
// console.log(b);


// nesting  scope 


function one(){
    const username = "Shiv"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

     two()

}

// one()

if (true) {
    const username = "Shiv"
    if (username === "Shiv") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);  // wrong access
}

// console.log(username);  // no access username 

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5) 
const addTwo = function(num){
    return num + 2
}








//Immediately Invoked Function Expression (IIFE)

// add parenthesis ( )


// name if


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// simple if(no name if)

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Shiv')


// if -  function if should be executed immediately because if and there is a problem due to pollution of global scope, sometimes the variables of global scope whatever is declared there his to remove  the pollution we threw it 
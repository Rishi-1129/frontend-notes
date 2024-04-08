// Read input & write output

const readline = require('readline'); 
// readline will return a object and its assigned to the const readline
 const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Please enter your name:", (name)=>{  
 // method displays the query by writing it to the output, waits for user input to be provided on input, 
 //then invokes the callbackfunction passing the provided input as the first argument.
    console.log("You entered:",name);
    rl.close(); 
    // to close the interface after execution
})

rl.on('close',()=>{  
    // on method listens to an event tkes the event as argument and a call back function
    console.log('Interface closed')
    process.exit(0); 
}) 
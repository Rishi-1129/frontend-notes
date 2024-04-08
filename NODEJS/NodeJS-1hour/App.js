
// filesystem modules
// const fs = require('fs');

// const files = fs.readdirSync('./')
// console.log(files)


// fs.readdir('./',function(err, files){
//     if(err) console.log('Error',err);
//     else console.log('Result', files);
// });

//events module
// a class is container for properties and functions which we call methods
const EventEmitter  = require('events') // class its blueprint of what a event emitter can do
// const emitter = new EventEmitter(); // actual object


// Register a listener

const Logger = require('./logger');
const logger = new Logger ()
logger.log('message')


logger.on ('messageLogged', (arg)=>{     // arrow function instead of function
    console.log('Listener called', arg)
})
// Raise : loggin (data: message)
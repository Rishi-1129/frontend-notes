//  (function (exports, require, module, __filename, __dirname){
//     var url = 'http://mylogger.io/log';
//     console.log(__filename);
//     console.log(__dirname);
//     function log(message) {
//         // send http request
//         console.log(message);
//     }
    
//     module.exports = log;
    
// })



const EventEmitter = require('events');


var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){    // when function is inside class then its called method
        console.log(message);

        //Raise an event but not have listener so nothing happens in the application 
this.emit('messageLogged',{id:1, url:url})  //emit -- signalling that event has happened

    }
}



module.exports = Logger;
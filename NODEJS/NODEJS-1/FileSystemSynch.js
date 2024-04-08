// Read and Write to file synchronously
// when code is executed line by line its synchronous execution 
//once the first line executed completely the second line has wait till then which affects the performance of the application

const fs = require('fs');
// import filesystem module

let textIn = fs.readFileSync('./Files/input.txt', 'utf-8'); 
// this method takes the file path as argument and the encoding to read the content on the file

console.log(textIn) 
// the content of the file is read and stored in textIn variable

let content = `Data read from input.txt: ${textIn} \n DateCraeted ${new Date()}`
fs.writeFileSync('./Files/output.txt',content)
// this method take the file path and the content to be written in the file
// if the file is not present in that path a new file with the name given will be created and data gest written in it
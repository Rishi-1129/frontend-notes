const fs = require('fs');
 fs.readFile('./Files/start.txt', 'utf-8', (err1, data1) => {
    //this method takes in 3 arguements filepath, encoding, 
    //call back function which will be called when the file reading is completed
    // first argument will receive the error object and 2nd one receives the data object
    console.log(data1)
    fs.readFile(`./Files/${data1}.txt`, 'utf-8', (err2, data2) => {
        console.log(data2);
        fs.readFile('./Files/append.txt','utf-8',(err3, data3)=>{
            console.log(data3);
            fs.writeFile('./Files/output.txt',`${data2}\n\n${data3}\n\n Date Created ${new Date()}`, ()=>{
                console.log('File written successfully')
            })
        })
    })
})
// console.log('Reading file...')
// first this console will be logged as the first one will run in background and main thread will proceed with second line

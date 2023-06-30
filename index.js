// let a =10
// let b =20
// let c = a+b
// console.log(c);

const fs = require("fs");

// fs.writeFile("message.txt","hello from NodeJs!", (err)=>{
//     if(err) throw err;
//     console.log("the file has been saved!"); 
// });

fs.readFile('./message.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});
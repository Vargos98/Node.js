// var generateName = require("sillyname");


// import generateName from "sillyname";


// for(var i=0;i<5;i++){

//     var sillyname = generateName();
//     console.log(`My name is ${sillyname}.`);
// }

// import superheroes from "superheroes";



// for (var i =0;i<5;i++){
//     const name = superheroes.random();
//     console.log(`i am ${name}! `);
// }


// let oneLinerJoke = require('one-liner-joke');
// console.log(oneLinerJoke.getRandomJoke());


// /// FIGLET CODE

// var figlet = require("figlet");

// figlet("VARGOS", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


// const express = require("express");
// const app = express();
// const port =3000;

// app.use(function(req,res,next){
//     console.log("I worked first");
//     next();
// });
// app.set("view engine", "ejs");

// app.get('/', function(req,res){
//     res.render("index");
  
// })

// app.get('/contact', function(req,res){
//     res.render("contact")
// })
// app.get('/noob/:username', function(req,res){
//     res.send(`Hi from ${req.params.username}`);
// })

// app.listen(port);



// const express = require("express")

// const app = express();

// const port = 3000;
// app.use(function(res,req,next){
//     console.log("Hi there i worked first");
//     next();
// })


// app.get('/' ,function(res,req){
//     res.send("Hi there");
// });

// app.listen(port);



// let age =16;

// let name = age < 18 ? "vargos": "alaha"; 
// console.log(name);


// let arr = [1,2,12, 40,58,21];
// let brr= [98,22,32,34,98];

// const crr = [...arr,...brr];

// console.log(crr);

// const name = arr.filter(x => x <50 );
// console.log(name);

// import superheros from "superheroes";

// const name = superheros.random();

// console.log(`I am a ${name}!`);


import express from 'express';

const app = express();

const port = 3000;
// app.use(function(res,req,next){
//     console.log("Hi there i worked first");
//     next();
// })

app.get("/", (req,res)=>{
    res.send("<h1>Hi there! badonka budonka allah hu akhbar</h1>");
})


app.listen(port,()=>{
    console.log(`port is running on ${port}`);
});
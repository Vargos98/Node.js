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


/// FIGLET CODE

var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
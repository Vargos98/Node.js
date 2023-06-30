// var generateName = require("sillyname");


// import generateName from "sillyname";


// for(var i=0;i<5;i++){

//     var sillyname = generateName();
//     console.log(`My name is ${sillyname}.`);
// }

import superheroes from "superheroes";

const name = superheroes.random();

for (var i =0;i<5;i++){
    const name = superheroes.random();
    console.log(`i am ${name}! `);
}
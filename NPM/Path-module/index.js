import path from 'path';
    // we can add and remove extensions of a file using basename.
// console.log(path.basename("c:\\nodejs\\app.html"));
// console.log(path.basename("c:\\nodejs\\app.js",".js"));

    // we get the directory name from dirname.
// console.log(path.dirname("c:\\nodejs\\app.js"));



    // now ow to get the extention of a file.
// console.log(path.extname("c:\\nodejs\\app.js"));

    //now how to normalize a given path which has unordered path.

// console.log(path.normalize("c:\\\\nodejs\\\app.js"));


    // now parse is a method which helps us in providing the " the main directory, etx, path, root " of a directory.


// console.log(path.parse("c:\\nodejs\\app.js")); // this one give out the whole context.
// console.log(path.parse("c:\\nodejs\\app.js").base);
// console.log(path.parse("c:\\nodejs\\app.js").ext);
// console.log(path.parse("c:\\nodejs\\app.js").name);
// console.log(path.parse("c:\\nodejs\\app.js").dir);
// console.log(path.parse("c:\\nodejs\\app.js").root);


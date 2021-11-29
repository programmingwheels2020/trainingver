const fs = require("fs")
/*
fs.readFile("./hello.txt", (err, data) => {
    if (err) {
        console.log("Error Occured" + err.message);
    } else {
        console.log(data.toString());
    }
})
*/
/*
fs.writeFile("./lenin.txt", "Hello Lenin", (err) => {
    console.log(err)
})*/
/*
fs.mkdir("./sampledir", (err) => {
    console.log(err)
})*/
/*
fs.stat("./sampledir", (err, data) => {
    console.log(err)
    console.log(data)
})*/

fs.promises.stat("./sampledir")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })
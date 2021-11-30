const { fork } = require("child_process")


const child = fork("./sum.js");
console.log("Main process id " + process.pid)
child.send("START");
child.on("message", (data) => {
    console.log(data);
})
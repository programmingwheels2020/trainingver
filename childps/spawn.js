const { spawn } = require("child_process")

const child = spawn("find", ['/'])

child.stdout.on('data', (data) => {
    console.log("--------DATA------")
    console.log(data.toString())
})

child.stderr.on('data', (data) => {
    console.log("---------ERROR-------")
    console.log(data.toString())
})

child.on('error', (err) => {
    console.log(err.toString())
})

child.on('exit', (code, signal) => {
    console.log(code)
    console.log("Signal is" + signal)
})
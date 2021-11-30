const { execFile } = require("child_process")

execFile("./test.sh", (err, stdout, stderr) => {
    console.log(err)
    console.log(stdout)
    console.log(stderr)
})
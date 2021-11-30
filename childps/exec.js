const { exec } = require("child_process")

exec("ls -ltr", (err, stdout, stderr) => {
    console.log(err)
    console.log(stdout)
    console.log(stderr)
})
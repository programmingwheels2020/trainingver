
const SumOfInfinitNumbers = function () {
    return new Promise((resolve, reject) => {
        let sum = 0
        for (let i = 0; i < 1e9; i++) {
            sum += i
        }
        resolve(sum);
    })
}

process.on('message', (msg) => {
    console.log("Printing from child " + msg);
    console.log("Child process id " + process.pid)
    SumOfInfinitNumbers()
        .then(result => {
            process.send(result)
        })
        .catch(err => {
            process.send("ERROR")
        })
})
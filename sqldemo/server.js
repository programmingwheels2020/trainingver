const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const knex = require("./config/db.config")
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json())

const port = 3001

const SumOfInfinitNumbers = function () {
    return new Promise((resolve, reject) => {
        let sum = 0
        for (let i = 0; i < 1e9; i++) {
            sum += i
        }
        resolve(sum);
    })
}

app.get("/loadtestapi", async (req, res) => {
    try {
        let sum = await SumOfInfinitNumbers();
        res.json({ sum: sum })
    } catch (err) {
        res.status(500).json({ errMsg: "error occured" })
    }

})


app.post("/players", async (req, res) => {
    console.log(req.body);
    try {
        req.body.id = uuidv4();
        await knex('player').insert(req.body);
        res.json({ message: 'Player inserted' })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }

})

app.get("/players", async (req, res) => {
    try {
        req.body.id = uuidv4();
        //let data = await knex.select().table('player')
        await knex.raw("")
        res.json({ data: data })
    } catch (err) {
        res.status(400).json({ errMsg: err.message })
    }
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
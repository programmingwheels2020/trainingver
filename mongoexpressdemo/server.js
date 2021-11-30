const express = require("express")
require('dotenv').config()
const mongoose = require("mongoose")
const app = express()
const bookRoutes = require("./routes/book.routes");
const bodyParser = require("body-parser")
const mongoUri = process.env.MONGO_URI;

app.use(bodyParser.json())

async function connectDb() {
    try {
        let result = await mongoose.connect(mongoUri)
        //console.log(result);

    } catch (err) {
        console.log("Error Occured during connection")
        process.exit();

    }
}

connectDb();


app.use("/api/v1", bookRoutes);

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
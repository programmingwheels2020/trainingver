const express = require("express")
require('dotenv').config()
const mongoose = require("mongoose")
const app = express()
const bookRoutes = require("./routes/book.routes");
const userRoutes = require("./routes/user.routes")
const bodyParser = require("body-parser");
const { validateTokenMiddleware } = require("./middlewares/auth.middleware");
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

app.use("/api/v1/auth", userRoutes)

app.use("/api/v1/book", validateTokenMiddleware)

app.use("/api/v1/book", bookRoutes);



const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})